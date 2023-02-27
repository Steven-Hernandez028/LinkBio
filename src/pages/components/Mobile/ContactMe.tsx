import { Section,FlexContainer,SideTitle,Form,InputText,Button, Label,Textarea} from "@/styles/styledComponents"
import { Styles } from "@/styles/styles"

const ContactMe = () => {
  return (
    
<Section overflow ="initial"width="71vw" left="14%">
  
  <FlexContainer   boxShadow = "-4px 0px 15px -7px rgb(255, 111, 0, 0.4)"  border="1px solid #f3f" flexDirection = "column" justifyContent="center" width="100%" heigth="100%">
  <SideTitle textAlign="center">
      <span style={Styles.vowel[0]}>C</span>ontact
    </SideTitle>
    <Form>

      <FlexContainer
        alignItems="start"
        justifyContent="center"
        flexDirection="column"
        border= "1px solid #f43"
        width="100%"
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

  )
}

export default ContactMe