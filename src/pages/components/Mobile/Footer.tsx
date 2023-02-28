import { Section,FlexContainer,LinkFooter,Label,Logo } from '@/styles/styledComponents'
import { Styles } from '@/styles/styles'
import React from 'react'

const Footer = () => {
  return (
    <Section
    left="0%"
    width="100%"
    overflow="hidden"
    height="60vh"
    background="#100e2f"
    flexDirection="column"
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
  )
}

export default Footer