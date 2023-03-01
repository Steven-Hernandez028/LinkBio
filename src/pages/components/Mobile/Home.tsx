import { Description, FlexContainer, Logo, Section, Title } from '@/styles/styledComponents'
import { Styles } from '@/styles/styles'
import React from 'react'

const Home = () => {
  return (
    <Section id="home" width="71vw" left="14%">
      

      
    <FlexContainer heigth="40%" flexDirection="column"  justifyContent="end" alignItems="end" >
      <Logo width= "100%" textAlign = "center" marginLeft = "0" >
        <span style={{ color: "#7200F5" }}>S</span>tevdev
      </Logo>
      <Title textAlign="center" width="100%" marginLeft="0">

        <span style={Styles.vowel[0]}>M</span>
        <span style={Styles.vowel[1]}>y</span> LinkBio
      </Title>
    </FlexContainer>

    <FlexContainer justifyContent="center" alignItems="center" flexDirection="column" heigth="60%"    >

      <Description bottom="0px">
      I am Steven Hernandez, a web developer with 2 years of experience.
        I specialize in HTML, CSS, JavaScript and C# and have worked on
        projects for different customers. <br /> <br />I enjoy working
        with up-to-date technologies and collaborating with project teams
        to achieve success.If you&apos;re looking for an experienced web
        developer, feel free to contact me!
      </Description>
    </FlexContainer>
  </Section>
    )
}

export default Home