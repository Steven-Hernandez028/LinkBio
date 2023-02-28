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
    <Section  background = "##060528" id = "contact" flexDirection="row">
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
  );
};

export default ContactMe;
