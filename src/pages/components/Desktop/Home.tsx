<<<<<<< HEAD
=======

>>>>>>> 4723df52cc59f64d8a6fed715a55f5cc8744c767
import useWindow from "@/helper/useWindow";
import {
  Description,
  FlexContainer,
  Logo,
  MenuWrap,
  ItemMenu,
  RoundBox,
  Section,
  Title,
} from "@/styles/styledComponents";
import { Styles } from "@/styles/styles";
import Image from "next/image";
import React, { useState, useEffect } from "react";


const itemMenu = [

  {
    href : "#home",
    name:"Home",

  },
  {
    href : "#social",
    name:"Social Media",
    

  },
  {
    href : "#donate",
    name: "Donate",
    

  },
  {
    href : "#contact",
    name: "Contact Me"
    

  },
]
const Menu = () => {
  return (
    <>
      <MenuWrap>
        {itemMenu.map((element,i)=>{
          return(
            <ItemMenu key={i} href={element.href}>{element.name}</ItemMenu>
          )
        })}
      </MenuWrap>
    </>
  );
};
const Home = () => {
  const [width, height] = useWindow();
  const [anchorTarget, setAnchorTarget] = useState<any>(null)


  const fixDescription = (width: number) => {
    if (width <= 1000 && width > 600) {
      return "10%";
    } else if (width > 710 && width < 1140) {
      return "10%";
    } else {
      return "25%";
    }
  };



  return (
    <Section id = "home">
      <FlexContainer
        background="rgba(0,5,150,.3)"
        borderRadius="30px 30px 30px 30px"
        justifyContent=""
        heigth="10%"
      >
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
          <Description bottom={fixDescription(width)} textAlign="none">
            I am Steven Hernandez, a web developer with 2 years of experience. I
            specialize in HTML, CSS, JavaScript and C# and have worked on
            projects for different customers. <br /> <br />I enjoy working with
            up-to-date technologies and collaborating with project teams to
            achieve success.If you&apos;re looking for an experienced web
            developer, feel free to contact me!
          </Description>
        </FlexContainer>
      </FlexContainer>
    </Section>
  );
};

export default Home;
<<<<<<< HEAD
=======

>>>>>>> 4723df52cc59f64d8a6fed715a55f5cc8744c767
