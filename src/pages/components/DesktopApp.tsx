import React, { useState } from "react";
import Home from "./Desktop/Home";
import SocialMedia from "./Desktop/SocialMedia";
import BannerDonate from "./Desktop/BannerDonate";
import ContactMe from "./Desktop/ContactMe";
import Footer from "./Desktop/Footer";
import Modal from "react-modal";
import { Button, Description, FlexContainer, InputText } from '@/styles/styledComponents';
import { Styles } from '@/styles/styles';











const ModalEmail = ({
  modalIsOpen,
  closeModal,
  handleOnChange,
  handleSubmit,
  ToggleMsg
}: any) => {


  const Message =(ToggleMsg :any)=>{
    if(ToggleMsg.ShowMessage === undefined){
      return "Did you donate? i would like to thank you, pleave leave you email here:"
    }else  if(ToggleMsg.ShowMessage === true){
      return "Thanks";
    }else{
      return "Did you donate? i would like to thank you, pleave leave you email here:";
    }
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={Styles.modal}
      ariaHideApp={false}
    >
      <FlexContainer flexDirection="column" width="100%" heigth="80%">
        <Description bottom="0">

          {Message(ToggleMsg)}
        </Description>
        <InputText
          onChange={(e) => handleOnChange(e)}
          marginLeft="0"
          type="input"
        />
      </FlexContainer>

      <Button onClick={handleSubmit} top="80%">Send</Button>
    </Modal>
  );
};












const DesktopApp = () => {
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
      setToggleMsg(e=>{
        return{
          ...e,
          ShowMessage: true,
        }
      })
      setTimeout(()=>{
        setIsOpen(false)
        setToggleMsg(e=>{
          return{
            ...e,
            ShowMessage:false,
          }
        })
        setMail("");
      },1000)
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };
  return (
    <>
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
      <Footer />
    </>
  );
};
export default DesktopApp;
