import React, { useState } from "react";
import Home from "./Desktop/Home";
import SocialMedia from "./Desktop/SocialMedia";
import BannerDonate from "./Desktop/BannerDonate";
import ContactMe from "./Desktop/ContactMe";
import Footer from "./Desktop/Footer";
import ModalEmail from "./Desktop/ModalEmail";

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
