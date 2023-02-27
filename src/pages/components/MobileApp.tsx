import { useState } from "react";
import {
  Description,
  FlexContainer,
  Label,
  Section,
  Form,
  SideTitle,
  InputText,
  LinkFooter,
  Logo,
  Textarea,
  Button,
} from "@/styles/styledComponents";
import { Styles } from "@/styles/styles";
import SocialMedia from "./Mobile/SocialMedia";
import Home from "./Mobile/Home";
import Hammenu from "./Mobile/Hammenu/Hammenu";
import { BiCoffeeTogo } from "react-icons/bi";

import Modal from "react-modal";
import BannerDonate from "./Mobile/BannerDonate";
import Image from "next/image";
import ContactMe from "./Mobile/ContactMe";

const ModalEmail = ({
  modalIsOpen,
  closeModal,
  handleOnChange,
  handleSubmit,
  ToggleMsg,
}: any) => {
  const Message = (ToggleMsg: any) => {
    if (ToggleMsg.ShowMessage === undefined) {
      return "Did you donate? i would like to thank you, pleave leave you email here:";
    } else if (ToggleMsg.ShowMessage === true) {
      return "Thanks";
    } else {
      return "Did you donate? i would like to thank you, pleave leave you email here:";
    }
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={Styles.ModalMobile}
      ariaHideApp={false}
    >
      <FlexContainer flexDirection="column" width="100%" heigth="80%">
        <Description bottom="0">{Message(ToggleMsg)}</Description>
        <InputText
          onChange={(e) => handleOnChange(e)}
          marginLeft="0"
          type="input"
        />
      </FlexContainer>

      <Button onClick={handleSubmit} top="80%">
        Send
      </Button>
    </Modal>
  );
};

const MobileApp = () => {
  const [Mail, setMail] = useState<string>("");
  const [ToggleMsg, setToggleMsg] = useState<object>({
    Message: "Thanks!",
    ShowMessage: false,
  });
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleModal = () => {
    setTimeout(() => {
      openModal();
    }, 1000);
  };
  const handleSubmit = async () => {
    try {
      const res = await fetch("../api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Mail }),
      });

      const { message } = await res.json();
      setToggleMsg((e) => {
        return {
          ...e,
          ShowMessage: true,
        };
      });
      setTimeout(() => {
        setIsOpen(false);
        setToggleMsg((e) => {
          return {
            ...e,
            ShowMessage: false,
          };
        });
        setMail("");
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };

  return (
    <>
      {/* 
    <Hammenu/> */}
      <Home />
      <SocialMedia />

      <BannerDonate handleModal={handleModal} />

      {modalIsOpen ? (
        <ModalEmail
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          handleOnChange={handleOnChange}
          handleSubmit={handleSubmit}
          ToggleMsg={ToggleMsg}
        />
      ) : null}

      <ContactMe />

      <Section
        left="0%"
        width="100%"
        overflow="hidden"
        height="60vh"
        background="#100e2f"
        flexDirection="column"
      >
        <FlexContainer margin = "5% 0 0 0" justifyContent="start" border = "1px solid #f34" width= "100%" heigth="40%">

          <FlexContainer
            width="30%"
            justifyContent="space-around"
            alignItems="start"
            heigth="100%"
            flexDirection="column"
            border = "1px solid #334"
          >
            <LinkFooter href="#">Instagram</LinkFooter>
            <LinkFooter href="#">Facebook</LinkFooter>
            <LinkFooter href="#">YouTube</LinkFooter>
            <LinkFooter href="#">Linkedin</LinkFooter>
          </FlexContainer>

          <FlexContainer
            width="70%"
            justifyContent="space-around"
            alignItems="start"
            heigth="100%"
            flexDirection="column"
            border = "1px solid #a34"
          >
            <LinkFooter href="#">Donate</LinkFooter>
            <LinkFooter href="#">Credits</LinkFooter>
          </FlexContainer>

      
        </FlexContainer>



        <FlexContainer width="100%"  heigth="40%">
            <Logo width="100%" textAlign="start" fontSize="5em">
              <span style={Styles.vowel[0]}>S</span>tevdev
            </Logo>
          </FlexContainer>
        <FlexContainer heigth="15%" justifyContent="Center">
          <Label >Made with❤️ by Steven Hernandez</Label>
        </FlexContainer>
      </Section>
    </>
  );
};
export default MobileApp;
