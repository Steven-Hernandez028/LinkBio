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
      <Section

        id="contact"
        flexdirection="row"
        heigthmobile="85vh"
        leftmobile="0px"
        widthmobile="99.5%"
        bordermobile="1px solid #f3f"
      marginmobile="10% 0 10% 0"
      brackgroundmobile = "#060528"
      >
        <FlexContainer
          alignitems="center"
          width="10%"
          heigth="100%"
          widthmobile="100%"
          heightmobile="15%"
        
        >
          <SideTitle marginmobile="30% 10% 0 10%" textalign="center">
            <span style={Styles.vowel[0]}>C</span>ontact
          </SideTitle>
        </FlexContainer>

        <FlexContainer
          justifycontent="center"
          width="90%"
          heigth="100%"
          widthmobile="100%"
          heightmobile="85%"
          flexdirectionmobile="column"
        >
          <Form >
            <FlexContainer displaymobile="none" width="40%" heigth="100%">
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
              alignitems="start"
              justifycontent="center"
              flexdirection="column"
              width="70%"
              heigth="100%"
              justifycontentmobile="center"
              flexdirectionmobile="column"
              widthmobile="100%"
              heightmobile="100%"
              alignitemsmobile="center"
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

export default ContactMe;
