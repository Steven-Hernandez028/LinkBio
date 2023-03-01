import {
  Button,
  Label,
  InputText,
  FlexContainer,
  Textarea,
  Form,
  Section,
  SideTitle,
} from "@/styles/styledComponents";
import { Styles } from "@/styles/styles";
import Image from "next/image";

const ContactMe = () => {
  return (
<>
    <Section ElementDesktop={true} background = "##060528" id = "contact" flexDirection="row">


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

    
    <Section ElementMobile={true} id="contact" background = "##060528" overflow ="initial"width="100vw" left="0%">
  
  <FlexContainer   boxShadow = "-4px 0px 15px -7px rgb(255, 111, 0, 0.4)"  border="1px solid #f3f" flexDirection = "column" justifyContent="center" width="99.6%" heigth="100%">
  <SideTitle textAlign="center">
      <span style={Styles.vowel[0]}>C</span>ontact
    </SideTitle>
    <Form>

      <FlexContainer
        alignItems="start"
        justifyContent="center"
        
        flexDirection="column"
   
        width="100%"
        heigth="100%"
      >
        <Label left="10%">Name:</Label>
        <InputText fontSize="4vmin" top="0%" type="text" />
        <Label left="10%">Email:</Label>

        <InputText fontSize="4vmin" top="0%" type="text" />
        <Label left="10%">Message:</Label>

        <Textarea />
        <Button top="90%" type="submit">
          Send
        </Button>
      </FlexContainer>
    </Form>
  </FlexContainer>


  </Section>
    </>
  );
};

export default ContactMe;
