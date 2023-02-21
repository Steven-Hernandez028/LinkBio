import React, { useEffect, useState } from "react";
import Image from "next/image";

import {
  FlexContainer,
  Section,
  ItemMenu,
  MenuWrap,
  Logo,
  RoundBox,
  Title,
  Description,
  SideTitle,
  CardWrapper,
  Card,
  Label,
  SubTitle,
  Button,
  Form,
  InputText,
  Textarea,
  LinkFooter,
  DonateButton,
} from "@/styles/styledComponents";
import {
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineGithub,
  AiOutlineWarning,
} from "react-icons/ai";
import { BiCoffeeTogo } from "react-icons/bi";
import { RxInstagramLogo } from "react-icons/rx";
import { RiFacebookBoxLine } from "react-icons/ri";
import { Styles } from "@/styles/styles";
import Modal from "react-modal";

const Menu = () => {
  return (
    <>
      <MenuWrap>
        <ItemMenu href="#">Home</ItemMenu>
        <ItemMenu href="#">Social Media</ItemMenu>
        <ItemMenu href="#">Donate</ItemMenu>
        <ItemMenu href="#">Contact Me</ItemMenu>
      </MenuWrap>
    </>
  );
};
const EmailRequestModal = ({
  modalIsOpen,
  closeModal,
  handleOnChange,
  handleSubmit,
}: any) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={Styles.modal}
      ariaHideApp={false}
    >
      <FlexContainer flexDirection="column" width="100%" heigth="80%">
        <Description bottom="0">
  
          {`Did you donate? i would like to thank you, please leave your email here:`}
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

      alert('recibido')
      console.log(message);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };
  return (
    <>
      <Section>
        <FlexContainer justifyContent="" heigth="10%">
          <Logo>
            <span style={{ color: "#7200F5" }}>S</span>tevdev
          </Logo>
          <Menu />
        </FlexContainer>

        <FlexContainer justifyContent="none" heigth="90%">
          <FlexContainer width="42%" heigth="100%">
            <RoundBox>
              <Image
                priority
                fill
                sizes="100%"
                alt="steven"
                src="/me.png"
                style={Styles.image}
              />
            </RoundBox>
          </FlexContainer>

          <FlexContainer
            alignItems="start"
            justifyContent="space-around"
            flexDirection="column"
            width="58%"
            heigth="100%"
          >
            <Title>
              <span style={Styles.vowel[0]}>M</span>
              <span style={Styles.vowel[1]}>y</span> LinkBio
            </Title>

            {/*Descripcion*/}
            <Description>
              I am Steven Hernandez, a web developer with 2 years of experience.
              I specialize in HTML, CSS, JavaScript and C# and have worked on
              projects for different customers. <br /> <br />I enjoy working
              with up-to-date technologies and collaborating with project teams
              to achieve success.If you&apos;re looking for an experienced web
              developer, feel free to contact me!
            </Description>
          </FlexContainer>
        </FlexContainer>
      </Section>

      {/* Social media */}
      <Section flexDirection="row">
        <FlexContainer alignItems="start" width="7%" heigth="100%">
          <SideTitle>
            <span style={Styles.vowel[0]}>S</span>ocial
          </SideTitle>
        </FlexContainer>

        <FlexContainer justifyContent="center" width="86%" heigth="100%">
          <CardWrapper>
            <Card>
              <RxInstagramLogo style={Styles.icons[0]} />
              <Label>Instagram</Label>
            </Card>
            <Card>
              <RiFacebookBoxLine style={Styles.icons[0]} />
              <Label>Facebook</Label>
            </Card>
            <Card>
              <AiOutlineLinkedin style={Styles.icons[0]} />
              <Label>Linkedin</Label>
            </Card>
            <Card>
              <AiOutlineYoutube style={Styles.icons[0]} />
              <Label>Youtube</Label>
            </Card>
            <Card>
              <AiOutlineGithub style={Styles.icons[0]} />
              <Label>GitHub</Label>
            </Card>
            <Card>
              <AiOutlineWarning style={Styles.icons[0]} />
              <Label>Warning</Label>
            </Card>
          </CardWrapper>

          {/*Card */}
        </FlexContainer>

        <FlexContainer alignItems="end" width="7%" heigth="100%">
          <SideTitle>
            <span style={Styles.vowel[0]}>M</span>edia
          </SideTitle>
        </FlexContainer>
      </Section>

      {/* Banner donate */}

      <Section
        radius="activated"
        background="#ff7d26"
        left="0%"
        width="100%"
        flexDirection="row"
        height="25vh"
      >
        <FlexContainer width="30%" heigth="100%">
          <SubTitle>
            <span style={Styles.vowel[1]}>B</span>uy me a coffee
          </SubTitle>
          <BiCoffeeTogo style={Styles.icons[1]} />
        </FlexContainer>

        <FlexContainer width="70%" heigth="100%">
          <Description width="85%" bottom="10%">
            Support me as a web developer with a donation. Any contribution, no
            matter how small, will be greatly appreciated and will allow me to
            continue creating innovative solutions. Thank you!
          </Description>

          <DonateButton
            href={`https://www.paypal.com/donate/?hosted_button_id=${process.env
              .PAYPAL_ID!}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleModal}
          >
            Donate
          </DonateButton>
        </FlexContainer>
      </Section>

      {modalIsOpen ? (
        <EmailRequestModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          handleOnChange={handleOnChange}
          handleSubmit={handleSubmit}
        />
      ) : null}

      {/* ContactMe */}
      <Section flexDirection="row">
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

      <Section
        left="0%"
        width="100%"
        height="35vh"
        background="#100e2f"
        flexDirection="column"
      >
        <FlexContainer heigth="70%">
          <FlexContainer width="20%" heigth="100%"></FlexContainer>

          <FlexContainer
            width="10%"
            justifyContent="space-around"
            alignItems="start"
            heigth="100%"
            flexDirection="column"
          >
            <LinkFooter href="#">Instagram</LinkFooter>
            <LinkFooter href="#">Facebook</LinkFooter>
            <LinkFooter href="#">YouTube</LinkFooter>
            <LinkFooter href="#">Linkedin</LinkFooter>
          </FlexContainer>

          <FlexContainer
            width="20%"
            justifyContent="space-around"
            alignItems="start"
            heigth="100%"
            flexDirection="column"
          >
            <LinkFooter href="#">Donate</LinkFooter>
            <LinkFooter href="#">Credits</LinkFooter>
          </FlexContainer>

          <FlexContainer width="50%" heigth="100%">
            <Logo width="100%" textAlign="center" fontSize="5em">
              <span style={Styles.vowel[0]}>S</span>tevdev
            </Logo>
          </FlexContainer>
        </FlexContainer>

        <FlexContainer heigth="30%">
          <Label left="40%">Made with❤️ by Steven Hernandez</Label>
        </FlexContainer>
      </Section>
    </>
  );
};
export default DesktopApp;
