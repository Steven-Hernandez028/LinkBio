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
import { useInView } from "framer-motion";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";

const itemMenu = [
  {
    href: "#home",
    name: "Home",
  },
  {
    href: "#social",
    name: "Social Media",
  },
  {
    href: "#donate",
    name: "Donate",
  },
  {
    href: "#contact",
    name: "Contact Me",
  },
];
const Menu = () => {
  return (
    <>
      <MenuWrap>
        {itemMenu.map((element, i) => {
          return (
            <ItemMenu key={i} href={element.href}>
              {element.name}
            </ItemMenu>
          );
        })}
      </MenuWrap>
    </>
  );
};
const Home = () => {
  const [width, height] = useWindow();

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
    <>
      <HamburgerMenu />
      <Section id="home">
        <FlexContainer
          background="rgba(0,5,150,.3)"
          borderradius="30px 30px 30px 30px"
          justifycontent=""
          heigth="10%"
          heightmobile="10%"
        >
          <Logo>
            <span style={{ color: "#7200F5" }}>S</span>tevdev
          </Logo>
          <Menu />
        </FlexContainer>

        <FlexContainer
          flexdirectionmobile="column"
          justifycontent=""
          heigth="90%"
          widthmobile="100%"
          heightmobile="90%"
        >
          <FlexContainer

            justifycontentmobile="center"
            width="42%"
            heigth="100%"
            widthmobile="100%"
            heightmobile="20%"
          >
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
            alignitems="start"
            justifycontent="space-around"
            flexdirection="column"
            width="58%"
            heigth="100%"

            flexdirectionmobile="column"
            justifycontentmobile="space-around"
            heightmobile="80%"
            widthmobile="100%"
          >
            <Title>
              <span style={Styles.vowel[0]}>M</span>
              <span style={Styles.vowel[1]}>y</span> LinkBio
            </Title>



            <Description
              bottommobile="0px"
              marginmobile="0 4% 0 4%"
              bottom={fixDescription(width)}
              textalign="none"
            >
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
    </>
  );
};

export default Home;
