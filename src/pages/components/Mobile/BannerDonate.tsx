import React from 'react'
import { Section,FlexContainer,SubTitle,Description, DonateButton} from '@/styles/styledComponents'
import { BiCoffeeTogo } from 'react-icons/bi'
import { Styles } from '@/styles/styles'

const BannerDonate = ({handleModal}:any) => {
  return (
    
    <Section
    radius="activated"
    background="#ff7d26"
    left="0%"
width="100%"
    flexDirection="column"
    height="60vh"
  >
    <FlexContainer border= "3px solid #3f3" width="100%" alignItems="center" heigth="40%"> 
      <SubTitle>
        <span style={Styles.vowel[1]}>B</span>uy me a coffee
      </SubTitle>
      <BiCoffeeTogo style={Styles.icons[3]} />
    </FlexContainer>

    <FlexContainer border="1px solid #f43" width="100%" justifyContent="space-around" heigth="100%">
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