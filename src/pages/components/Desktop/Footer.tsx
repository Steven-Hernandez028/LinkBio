import { Section, Label,FlexContainer, LinkFooter, Logo} from "@/styles/styledComponents"
import { Styles } from "@/styles/styles"



const Footer = () => {
  return (
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
  )
}

export default Footer