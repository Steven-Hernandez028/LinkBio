import { Section, Label,FlexContainer, LinkFooter, Logo} from "@/styles/styledComponents"
import { Styles } from "@/styles/styles"



const Footer = () => {
  return (
    <>
    <Section
    left="0%"
    width="100%"
    height="35vh"
    background="#100e2f"
    flexDirection="column"
    ElementDesktop={true}
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



<Section
    left="0%"
    width="100%"
    overflow="hidden"
    height="60vh"
    background="#100e2f"
    flexDirection="column"
    ElementMobile = {true}
  >
    <FlexContainer margin = "5% 0 0 0" justifyContent="start"  width= "100%" heigth="40%">

      <FlexContainer
        width="30%"
        justifyContent="space-around"
        alignItems="start"
        heigth="100%"
        flexDirection="column"
        left="5%"
      
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
      <Label fontSize="3vmin">Made with❤️ by Steven Hernandez</Label>
    </FlexContainer>
  </Section>



</>
)
}

export default Footer