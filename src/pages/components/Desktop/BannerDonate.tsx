import { Description, FlexContainer, Section, SubTitle,DonateButton } from "@/styles/styledComponents"
import { BiCoffeeTogo } from "react-icons/bi"
import { Styles } from "@/styles/styles"



const BannerDonate = ({handleModal} : any) => {
  return (
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
  )
}

export default BannerDonate