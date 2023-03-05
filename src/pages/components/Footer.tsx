import { Section, Label,FlexContainer, LinkFooter, Logo,Footer} from "@/styles/styledComponents"
import { Styles } from "@/styles/styles"



const Footerc = () => {
  return (
    <>
    <Footer
    left="0%"
    width="100%"
    height="35vh"
    background="#100e2f"
    flexdirection="column"

    justifycontentmobile="center"
    leftmobile="0px"
    widthmobile="100%"
    heigthmobile="50vh"
  >
    <FlexContainer  heigth="70%" heightmobile="70%" flexdirectionmobile="column"  justifycontentmobile="flex-start">


      <FlexContainer
        width="10%"
        justifycontent="space-around"
        alignitems="start"
        heigth="100%"
        flexdirection="column"
        left="10%"
        top="11%"

        flexdirectionmobile="column"
        widthmobile="30%"
        heightmobile="50%"
        leftmobile = "-30%"
        topmobile="11%"
      
      >
        <LinkFooter href="#">Instagram</LinkFooter>
        <LinkFooter href="#">Facebook</LinkFooter>
        <LinkFooter href="#">YouTube</LinkFooter>
        <LinkFooter href="#">Linkedin</LinkFooter>
      </FlexContainer>

      <FlexContainer
        width="20%"
        justifycontent="space-around"
        alignitems="start"
        heigth="100%"
        flexdirection="column"

        widthmobile="40%"
        heightmobile="40%"
        justifycontentmobile="space-around"
        flexdirectionmobile="column"
        
        marginmobile="10%"
        leftmobile = "5%"
        topmobile="-40%"
      >
        <LinkFooter href="#">Donate</LinkFooter>
        <LinkFooter href="#">Credits</LinkFooter>
      </FlexContainer>

      <FlexContainer  width="50%" heigth="100%" widthmobile="70%" topmobile="-15%">
        <Logo fontsizemobile="3em" textalignmobile="end" width="100%" textalign="center" fontSize="5em">
          <span style={Styles.vowel[0]}>S</span>tevdev
        </Logo>
      </FlexContainer>
    </FlexContainer>

    <FlexContainer heigth="30%" widthmobile="100%"   heightmobile="20%">
      <Label topmobile="40%" leftmobile="25%"  fontSize="3vmin"left="40%">Made with❤️ by Steven Hernandez</Label>
    </FlexContainer>

  </Footer>


</>
)
}

export default Footerc