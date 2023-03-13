import styled from "styled-components";
import { Inconsolata, Prosto_One } from "@next/font/google";
import { motion } from "framer-motion";

import { Karla } from "@next/font/google";
import {
  PropsContainer,
  PropsDescription,
  PropsSection,
  itemProps,
  LogoProps,
  ButtonProps,
  LabelProps,
  FormProps,
  CardProps,
  TitleProps,
} from "./interfaces";
import {
  PARRAGRAH_FONT_SIZE,
  MENU_FONT_SIZE,
  LOGO_FONT_SIZE,
  TITLE_FONT_SIZE,
  SUBTITLE_FONT_SIZE,
  BUYMEACOFFEE_FONT_SIZE,
  MOBILE_SUBTITLE_FONT_SIZE,
  FOOTER_FONT_SIZE,
  MOBILE_TITLE_FONT_SIZE,
} from "./styles";
import {
  COLOR_TOP_FONT,
  COLOR_ICON,
  COLOR_ICON_2,
  COLOR_INPUT_TEXT,
  COLOR_PRIMARY,
} from "./styles";
// |0px     600px    960px    1280px   1920px
// |xs      sm       md       lg       xl
// |--------|--------|--------|--------|-------->
// |   xs   |   sm   |   md   |   lg   |   xl
const inconsolata = Inconsolata({
  weight: "800",
  subsets: ["latin"],
});
const incosolata_p = Inconsolata({
  weight: "500",
  subsets: ["latin"],
});

const karla = Karla({
  weight: "800",
  subsets: ["latin"],
});
import image from "../../public/me.png";
//FONT TYPE
const INCOSOLATA = inconsolata.style.fontFamily;
const INCOSOLATA_PARRAGRAH = incosolata_p.style.fontFamily;
const KARLA = karla.style.fontFamily;
//  border: 2px solid ${(props) => props.borderColor || "red"};

export const FlexContainer = styled(motion.div)<PropsContainer>`
  display: flex;
  position: ${(props) => props.position || "relative"};
  background: ${(props) => props.background || "none"};
  height: ${(props) => props.heigth || "100px"};
  width: ${(props) => props.width || "100%"};
  border: ${(props) => props.border || "none"};
  margin: ${(props) => props.margin || "0px"};
  flex-direction: ${(props) => props.flexdirection || "row"};
  align-items: ${(props) => props.alignitems || "center"};
  padding-left: ${(props) => props.paddingleft || "0%"};
  justify-content: ${(props) => props.justifycontent || "space-between"};
  flex-wrap: ${(props) => props.wrap || "none"};
  left: ${(props) => props.left || "0%;"};
  border-radius: ${(props) => props.borderradius || "none"};
  top: ${(props)=>props.top || "0px"};
    @media (max-width: 600px) {
    box-shadow: ${(props) => props.boxshadow || "none"};
    display:${(props)=>props.displaymobile || "flex"};
    background: none;
    margin: ${(props) => props.marginmobile || "0px"};
    flex-direction: ${(props) => props.flexdirectionmobile || "row"};
    height: ${(props) => props.heightmobile || "auto"};
    width: ${(props) => props.widthmobile};
    justify-content: ${(props) => props.justifycontentmobile};
    aling-items: ${(props) => props.alignitemsmobile};
    left: ${(props)=>props.leftmobile || "0px"};
    top:${(props)=>props.topmobile || "0px"};
  }
`;

export const Section = styled.section<PropsSection>`
display:flex;
  position: ${(props) => props.position || "relative"};
  flex-direction: ${(props) => props.flexdirection || "column"};
  width: ${(props) => props.width || "80.5vw"};
  left: ${(props) => props.left || "9.3%"};
  overflow: ${(props) => props.overflow || "hidden"};
  height: ${(props) => props.height || "100vh"};
  background: ${(props) => props.background || "none"};
  margin: ${(props) => props.margin || "0px"};
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content:${(props)=>props.justifycontentmobile || "auto"};
    height: ${(props) => props.heigthmobile || "100vh"};
    margin: ${(props) => props.marginmobile || "0px"};
    width: ${(props) => props.widthmobile || "71vw"};
    left: ${(props) => props.leftmobile || "14%"};
    border:${(props)=>props.bordermobile || "none"};
    background: ${(props)=>props.brackgroundmobile ||"none"};
  }
`;

export const MenuWrap = styled(motion.div)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  position: relative;
  padding-right: 3%;
  @media only screen and (max-width: 600px) {
    ${"display:none;"};
  }
`;
const setmarginleft = (span: string) => {
  if (!span) return;
  let margin = (Number(span) / 12) * 100;
  return `margin-left: ${margin}vw;`;
};

export const ItemMenu = styled(motion.a)<itemProps>`
  text-decoration: none;
  ${(props) => (props.xs ? setmarginleft(props.xs) : "margin-left: 5.4vw;")};
  color: ${COLOR_TOP_FONT};
  font-family: ${INCOSOLATA};
  font-size: ${MENU_FONT_SIZE};
  @media only screen and (max-width: 960px) {
    ${"margin-left:3.5vw;"};
    ${"font-size: 1rem;"};
  }

  @media only screen and (max-width: 600px) {
    font-size: 5vmin;
    text-align: center;
  }
`;

export const Logo = styled(motion.h3)<LogoProps>`
  margin-left: ${(props) => props.marginleft || "3%"};
  color: ${COLOR_TOP_FONT};
  font-size: ${(props) => props.fontSize || LOGO_FONT_SIZE};
  text-align: ${(props) => props.textalign || "none"};
  font-family: ${INCOSOLATA};
  width: ${(props) => props.width || "0%"};
  @media (max-width: 600px) {
    text-align: ${(props)=>props.textalignmobile || "center"};
    font-size:${(props)=>props.fontsizemobile};
    width: 100%;
  }
`;
export const RoundBox = styled(motion.div)`
  position: relative;
  width: 90%;
  height: 90%;
  left: 6%;
  overflow: hidden;
  border-radius: 16% 14% 45% 95% / 27% 52% 48% 23%;
  @media (max-width: 600px) {
    width: 40%;
    height: 90%;
    left: 0px;
    border-radius: 50%;
    border: 1px solid ${COLOR_PRIMARY};
    box-shadow: 0px 0px 15px -3px rgb(255, 111, 255, 1);
  }
`;

export const Title = styled(motion.h1)<TitleProps>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  text-align: ${(props) => props.textalign || "auto"};
  font-family: ${KARLA};
  font-size: ${TITLE_FONT_SIZE};
  color: white;
  margin-left: ${(props) => props.marginleft || "4%"};

  @media (max-width: 600px) {
    font-size: ${MOBILE_TITLE_FONT_SIZE};
    position: relative;
    text-align: center;
    width: 100%;
    margin-left: 0px;
    height: 10%;
  }
`;

export const Footer = styled(motion.footer)<PropsSection>`
display:flex;
position: ${(props) => props.position || "relative"};
flex-direction: ${(props) => props.flexdirection || "column"};
width: ${(props) => props.width || "80.5vw"};
left: ${(props) => props.left || "9.3%"};
overflow: ${(props) => props.overflow || "hidden"};
height: ${(props) => props.height || "100vh"};
background: ${(props) => props.background || "none"};
margin: ${(props) => props.margin || "0px"};
@media (max-width: 600px) {
  flex-direction: column;
  justify-content:${(props)=>props.justifycontentmobile || "auto"};
  height: ${(props) => props.heigthmobile || "100vh"};
  margin: ${(props) => props.marginmobile || "0px"};
  width: ${(props) => props.widthmobile || "71vw"};
  left: ${(props) => props.leftmobile || "14%"};

`



export const SideTitle = styled(Title)`
  margin: 10% 0 10% 0;
  writing-mode: vertical-lr;
  text-orientation: upright;
  font-size: ${SUBTITLE_FONT_SIZE};

  @media (max-width: 600px) {
    font-size: ${MOBILE_SUBTITLE_FONT_SIZE};
    width: 100%;
    height: 100%;
    writing-mode: horizontal-tb;
    text-orientation: initial;
    margin:${(props)=>props.marginmobile|| "0 10% 0 10%"} ;
    text-align: ${(props) => props.textalign || "auto"};
  }
`;

//PARRAGRAH_FONT_SIZE
export const Description = styled(motion.p)<PropsDescription>`
  position: ${(props) => props.position || "relative"};
  text-align: ${(props) => props.textalign || "center"};
  bottom: ${(props) => props.bottom || "25%"};
  width: ${(props) => props.width || "auto"};
  font-family: ${INCOSOLATA_PARRAGRAH};

  font-size: ${PARRAGRAH_FONT_SIZE};
  margin-left: 4%;
  margin-right: 4%;
  line-height: 1.8rem;
  color: white;
  @media (max-width: 1100px) {
    font-size: 2vmin;
  }
  @media (max-width: 600px) {
    position: relative;
    font-size: 4vmin;
    bottom: ${(props) => props.bottommobile || "25%"};
    text-align: justify;
    margin: ${(props) => props.marginmobile};
  }
`;



export const CardWrapper = styled(motion.div)`
  width: 80%;
  height: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-auto-flow: column;
  grid-gap: 15%;
  @media (max-width: 600px){
    height : 100%;
    width: 100%;
    justify-content:center;
    margin-left:10%;
    margin-right: 10%;
    grid-template-columns 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
     grid-gap: 2%;

     @media(max-width:600px){
      margin-top:20%;
     }
  }
`;
//  border: 1px solid ${COLOR_ICON};
//  border: 1px solid ${COLOR_ICON};

export const Card = styled(motion.a)<CardProps>`
  display: block;
  text-decoration: none;
  cursor: ${(props) => props.cursor || "select"};
  min-width: 50px;
  max-width: 300px;
  border-radius: 40px 0 40px 0;
  position: relative;
  background: rgba(252, 0, 2, 0.1);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: -4px 0px 15px -7px rgb(255, 111, 0, 0.4);
  transition: all 0.3s ease-in-out;

  &:active {
    box-shadow: -4px 0px 20px -7px rgb(190, 10, 0, 0.9);
  }

  @media (max-width: 600px) {
    max-width: 60vw;
    max-height: 40vh;
  }
`;

export const Label = styled(motion.label)<LabelProps>`
  position: relative;
  font-family:${PARRAGRAH_FONT_SIZE};
  font-size: 2vmin;
  color: white;
  left: ${(props) => props.left || "0%"};
  @media (max-width: 600px) {
    font-size: ${(props) => props.fontSize || "5vmin"};
    left:${(props)=>props.leftmobile || "10%"};
    top:${(props)=>props.topmobile || "0px"};
  }
`;
export const SubTitle = styled(motion.h2)`
  position: absolute;
  top: 25%;
  left: 30%;
  width: 60%;
  color: white;
  font-size: ${BUYMEACOFFEE_FONT_SIZE};
  font-family: ${TITLE_FONT_SIZE};
  @media (max-width: 1359px) {
    font-size: 5vmin;
  }
  @media (max-width: 600px) {
    position: relative;
    left: 12%;
    top: 0px;
    width: 100%;
    font-size: ${MOBILE_SUBTITLE_FONT_SIZE};
  }
`;
//0% 100% 0% 100% / 100% 24% 76% 0%
export const DonateButton = styled(motion.a)<ButtonProps>`
  position: absolute;
  text-decoration: none;
  width: 9%;
  height: 15%;
  text-justify: center;
  left: 42%;
  appearance: button;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  top: ${(props) => props.top || "70%"};
  color: white;
  background: ${COLOR_ICON_2};
  font-family: ${INCOSOLATA_PARRAGRAH};
  font-size: 2vmin;
  border: none;
  padding: 5px;
  transition: all 0.1s ease-in;

  &:active {
    background: #424;
  }

  @media (max-width: 600px) {
    position: relative;
    font-size: 4vmin;
    left:0px;
    top:5%;
    width: 25%;
    height: 8%;
  }
`;
export const Button = styled(motion.button)<ButtonProps>`
  position: absolute;
  width: 19%;
  height:${(props)=>props.height || "6%"};
  left: 40%;
  top: ${(props) => props.top || "70%"};
  color: white;
  background: ${COLOR_ICON_2};
  font-family: ${INCOSOLATA_PARRAGRAH};
  font-size: 2vmin;
  border: none;
  padding: 5px;
  transition: all 0.1s ease-in;

  &:active {
    background: #424;
  }
  @media (max-width: 600px) {
    width: ${(props)=>props.widthmobile || "30%"};
    height: ${(props)=>props.heightmobile || "6%"};
    left: 35%;
    font-size: 4vmin;
  }
`;


export const Form = styled(motion.form)<FormProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  border: ${(props) => props.border || "none"};
  background: #060528;
  width: 70%;
  height: 80%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: none;
  box-shadow: -4px 0px 15px -7px rgb(255, 111, 0, 0.4);
  left: 0%;

  @media (max-width: 600px) {
    background:none;
    flex-direction:column;
    box-shadow: none;
    width: 100%;
    height:100%;
 
  }
`;

export const InputText = styled(motion.input)<ButtonProps>`
  position: relative;
  border-bottom: 0.5px solid ${COLOR_INPUT_TEXT};
  padding: 10px;
  color: white;
  background: none;
  outline: none;
  border-top: none;
  border-right: none;
  border-left: none;
  width: 75%;
  top: ${(props) => props.top || "0"};
  font-size: ${PARRAGRAH_FONT_SIZE};
  font-family: ${INCOSOLATA_PARRAGRAH};
  margin-bottom: 10%;
  margin-left: ${(props) => props.marginleft || "10%"};

  @media (max-width: 600px) {
    width: 70%;
    margin:0px;
    margin-bottom:${(props)=>props.margibottommobile || "10%"};
    left:${(props)=>props.leftmobile || "10%"};
    font-size: ${(props) => props.fontSize || PARRAGRAH_FONT_SIZE};
  }
`;

export const Textarea = styled(motion.textarea)`
  padding: 10px;
  color: white;
  background: none;
  outline: none;
  border: none;
  max-width: 75%;
  min-width: 75%;
  min-height: 20%;
  max-height: 20%;
  top: 5%;
  font-size: ${PARRAGRAH_FONT_SIZE};
  font-family: ${INCOSOLATA_PARRAGRAH};
  margin-bottom: 10%;
  margin-left: 10%;
  position: relative;
  border-bottom: 0.5px solid ${COLOR_INPUT_TEXT};

  @media (max-width: 600px) {
    max-width: 70%;
    min-width: 70%;
    min-height: 20%;
    max-height: 20%;
    font-size: 4vmin;
  }
`;
//INCOSOLATA_PARRAGRAH
export const LinkFooter = styled(motion.a)`
  text-decoration: none;
  font-family: ${INCOSOLATA_PARRAGRAH};
  font-size: ${FOOTER_FONT_SIZE};
  color: white;
  @media (max-width:600px){
    margin:5%;
  }
`;

export const HamburguerMenuWrapper = styled(motion.div)`
  @media (min-width: 600px) {
    display: none;
  }
`;

export const HamButton = styled.button`
  position: absolute;
  top: 0px;
  left: 0%;
  width: 30px;
  height: 30px;
  @media only screen and (max-width: 768px) {
  }
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 35px;
  margin-right: 15px;
  color: rgb(255, 255, 255);
`;
export const TextPlacerHolder = styled.div`
  border-radius: 0.5px;
  font-family: ${INCOSOLATA};
  font-size: ${PARRAGRAH_FONT_SIZE};
  height: 55px;
  flex: 1;
`;
export const IconText = styled.span`
  color: #fef6e4;
  position: relative;
  top: 19%;
`;

export const NavbarElements = styled(motion.div)`
  position: absolute;
  top: 5px;
  left: 100%;
  bottom: 0;
  width: 275px;
  height: 800px;
  background: #bd170b;
`;

export const Navbar = styled(motion.nav)`
  position: sticky;
  top: 0%;
  left: 52%;
  bottom: 10px;
  width: 100px;
  z-index: 2000;
  transform: translateY(-5px);
`;

export const ListElements = styled(motion.li)`
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const UnorderedList = styled(motion.ul)`
  padding: 25px;
  position: absolute;
  top: 100px;
  left: -65px;
  width: 250px;
`;

export const LetterSpan = styled(motion.span)`
`