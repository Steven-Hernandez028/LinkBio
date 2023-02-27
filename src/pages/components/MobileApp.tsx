import { useState } from "react";
import {
  Description,
  FlexContainer,
  Label,
  Section,
  Form,
  SideTitle,
  InputText,
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

      <Section width="71vw" left="14%">
      <FlexContainer alignItems="center" width="10%" heigth="100%">
        <SideTitle>
          <span style={Styles.vowel[0]}>C</span>ontact
        </SideTitle>
      </FlexContainer>
      <FlexContainer justifyContent="center" width="90%" heigth="100%">
        <Form border="1px solid #f3f">
          <FlexContainer width="40%" heigth="100%;">
            <Image
              priority
              fill
              alt="contact"
              sizes="100%"
              src="/contact.png"
              style={Styles.imageContact}
            />
          </FlexContainer>

          <FlexContainer
            alignItems="start"
            justifyContent="center"
            flexDirection="column"
            width="70%"
            heigth="100%"
          >
            <Label left="10%">Name:</Label>
            <InputText top="0%" type="text" />
            <Label left="10%">Email:</Label>

            <InputText top="0%" type="text" />
            <Label left="10%">Message:</Label>

            <Textarea />
            <Button top="89%" type="submit">
              Send
            </Button>
          </FlexContainer>
        </Form>
      </FlexContainer>
   

      </Section>
    </>
  );
};
export default MobileApp;
