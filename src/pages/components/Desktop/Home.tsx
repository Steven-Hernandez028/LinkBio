import { Description, FlexContainer, Logo, MenuWrap, ItemMenu, RoundBox, Section, Title } from '@/styles/styledComponents'
import { Styles } from '@/styles/styles'
import Image from 'next/image'
import React from 'react'


const Menu = () => {
    return (
      <>
        <MenuWrap>
          <ItemMenu href="#">Home</ItemMenu>
          <ItemMenu href="#">Social Media</ItemMenu>
          <ItemMenu href="#">Donate</ItemMenu>
          <ItemMenu href="#">Contact Me</ItemMenu>
        </MenuWrap>
      </>
    );
  };
const Home = () => {
  return (
    <Section>
    <FlexContainer background="rgba(0,5,150,.3)" borderRadius="30px 30px 30px 30px" justifyContent="" heigth="10%">
      <Logo>
        <span style={{ color: "#7200F5" }}>S</span>tevdev
      </Logo>
      <Menu />
    </FlexContainer>

    <FlexContainer justifyContent="none" heigth="90%">
      <FlexContainer width="42%" heigth="100%">
        <RoundBox>
          <Image
            priority
            fill
            sizes="100%"
            alt="steven"
            src="/me.png"
            style={Styles.image}
          />
        </RoundBox>
      </FlexContainer>

      <FlexContainer
        alignItems="start"
        justifyContent="space-around"
        flexDirection="column"
        width="58%"
        heigth="100%"
      >
        <Title>
          <span style={Styles.vowel[0]}>M</span>
          <span style={Styles.vowel[1]}>y</span> LinkBio
        </Title>

        {/*Descripcion*/}
        <Description textAlign="none">
          I am Steven Hernandez, a web developer with 2 years of experience.
          I specialize in HTML, CSS, JavaScript and C# and have worked on
          projects for different customers. <br /> <br />I enjoy working
          with up-to-date technologies and collaborating with project teams
          to achieve success.If you&apos;re looking for an experienced web
          developer, feel free to contact me!
        </Description>
      </FlexContainer>
    </FlexContainer>
  </Section>
  )
}

export default Home
