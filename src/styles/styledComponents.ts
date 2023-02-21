import styled from "styled-components";
import { Inconsolata } from "@next/font/google";
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
} from "./interfaces";
import {
  PARRAGRAH_FONT_SIZE,
  MENU_FONT_SIZE,
  LOGO_FONT_SIZE,
  TITLE_FONT_SIZE,
  SUBTITLE_FONT_SIZE,
  BUYMEACOFFEE_FONT_SIZE,
  FOOTER_FONT_SIZE,
} from "./styles";
import {
  COLOR_TOP_FONT,
  COLOR_ICON,
  COLOR_ICON_2,
  COLOR_INPUT_TEXT,
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

//FONT TYPE
const INCOSOLATA = inconsolata.style.fontFamily;
const INCOSOLATA_PARRAGRAH = incosolata_p.style.fontFamily;
const KARLA = karla.style.fontFamily;
//  border: 2px solid ${(props) => props.borderColor || "red"};

export const FlexContainer = styled.div<PropsContainer>`
  display: flex;
  position: relative;
  height: ${(props) => props.heigth || "100px"};
  width: ${(props) => props.width || "100%"};
  border: ${(props) => props.border || "1px solid #fff"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "center"};
  padding-left: ${(props) => props.paddingLeft || "0%"};
  justify-content: ${(props) => props.justifyContent || "space-between"};
  flex-wrap: ${(props) => props.wrap || "none"};
  left: ${(props) => props.left || "0%;"};
`;
//

const setRadius = (radius: string | undefined) => {
  const rad = `0% 100% 0% 100% / 100% 20% 76% 0%;`;
  if (radius === "activated") return rad;

  return "none";
};
// border-radius: ${(props) => setRadius(props.radius)}
//  border: 3px solid white;

export const Section = styled.section<PropsSection>`
  display: flex;
  position: relative;
  flex-direction: ${(props) => props.flexDirection || "column"};
  width: ${(props) => props.width || "80.5vw"};
  left: ${(props) => props.left || "9.3%"};
  border: 3px solid white;
  overflow: hidden;
  height: ${(props) => props.height || "100vh"};
  background: ${(props) => props.background || "none"};
`;

export const MenuWrap = styled.div`
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
const setMarginLeft = (span: string) => {
  if (!span) return;
  let margin = (Number(span) / 12) * 100;
  return `margin-left: ${margin}vw;`;
};

export const ItemMenu = styled.a<itemProps>`
  text-decoration: none;
  ${(props) => (props.xs ? setMarginLeft(props.xs) : "margin-left: 5.4vw;")};
  color: ${COLOR_TOP_FONT};
  font-family: ${INCOSOLATA};
  font-size: ${MENU_FONT_SIZE};
  @media only screen and (max-width: 960px) {
    ${"margin-left:3.5vw;"};
    ${"font-size: 1rem;"};
  }
`;

export const Logo = styled.h3<LogoProps>`
  margin-left: 3%;
  color: ${COLOR_TOP_FONT};
  font-size: ${(props) => props.fontSize || LOGO_FONT_SIZE};
  text-align: ${(props) => props.textAlign || "none"};
  font-family: ${INCOSOLATA};
  width: ${(props) => props.width || "0%"};
`;
// border-radius:16% 14% 45% 95% / 27% 52% 48% 23% ;
export const RoundBox = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  left: 6%;
  overflow: hidden;
  border-radius: 16% 14% 45% 95% / 27% 52% 48% 23%;
`;

export const Title = styled.h1`
  font-family: ${KARLA};
  font-size: ${TITLE_FONT_SIZE};
  color: white;
  margin-left: 4%;
`;

//  border: 1px solid #f3f;

export const SideTitle = styled(Title)`
  margin: 10% 0 10% 0;
  writing-mode: vertical-lr;
  text-orientation: upright;
  border: 1px solid #f3f;
  font-size: ${SUBTITLE_FONT_SIZE};
`;
export const Description = styled.p<PropsDescription>`
  position: relative;
  border: 1px solid #f3f;
  text-align: ${(props)=> props.textAlign || "center"};
  bottom: ${(props) => props.bottom || "25%"};
  width: ${(props) => props.width || "auto"};
  font-family: ${INCOSOLATA_PARRAGRAH};
  font-size: ${PARRAGRAH_FONT_SIZE};
  margin-left: 4%;
  margin-right: 4%;
  line-height: 1.6rem;
  color: white;
`;

export const Footer = styled.footer``;

//  border: 2px solid #534;

export const CardWrapper = styled.div`
  width: 80%;
  height: 80%;
  display: grid;
  border: 2px solid #534;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-auto-flow: row;
  grid-gap: 15%;
`;
//  border: 1px solid ${COLOR_ICON};

export const Card = styled.div`
  min-width: 50px;
  max-width: 300px;
  border: 1px solid ${COLOR_ICON};
  border-radius: 40px 0 40px 0;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: -4px 0px 15px -7px rgb(255, 111, 0, 0.4);
`;

export const Label = styled.p<LabelProps>`
  position: relative;
  font-family: ${INCOSOLATA_PARRAGRAH};
  font-size: ${PARRAGRAH_FONT_SIZE};
  color: white;
  left: ${(props) => props.left || "0%"};
`;
export const SubTitle = styled.h2`
  position: absolute;
  top: 20%;
  left: 30%;
  width: 60%;
  color: white;
  font-size: ${BUYMEACOFFEE_FONT_SIZE};
  font-family: ${TITLE_FONT_SIZE};
`;
//0% 100% 0% 100% / 100% 24% 76% 0%
export const DonateButton = styled.a<ButtonProps>`
  position: absolute;
  text-decoration: none;
  width: 100px;
  height: 30px;
  text-justify:center;
  left: 40%;
  appearance: button;
  text-align: center;
  display:flex;
  align-items:center;
  justify-content: center;
  top: ${(props) => props.top || "70%"};
  color: white;
  background: ${COLOR_ICON_2};
  font-family: ${INCOSOLATA_PARRAGRAH};
  font-size: ${PARRAGRAH_FONT_SIZE};
  border: none;
  padding: 5px;
  transition: all 0.1s ease-in;

  &:active {
    background: #424;
  }
`;
export const Button = styled.button<ButtonProps>`
  position: absolute;
  width: 100px;
  height: 40px;
  left: 40%;
  top: ${(props) => props.top || "70%"};
  color: white;
  background: ${COLOR_ICON_2};
  font-family: ${INCOSOLATA_PARRAGRAH};
  font-size: ${PARRAGRAH_FONT_SIZE};
  border: none;
  padding: 5px;
  transition: all 0.1s ease-in;

  &:active {
    background: #424;
  }
`;
//  border: 2px solid red;

export const Form = styled.form<FormProps>`
  position: relative;
  display: flex;
  border: 2px solid red;
  flex-direction: row;
  border: ${(props) => props.border || "none"};
  width: 70%;
  height: 80%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: none;
  box-shadow: -4px 0px 15px -7px rgb(255, 111, 0, 0.4);
  left: 0%;
`;

export const InputText = styled.input<ButtonProps>`
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
  margin-left: ${((props)=> props.marginLeft || "10%")};
`;

export const Textarea = styled.textarea`
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
`;
//INCOSOLATA_PARRAGRAH
export const LinkFooter = styled.a`
  text-decoration: none;
  font-family: ${INCOSOLATA_PARRAGRAH};
  font-size: ${FOOTER_FONT_SIZE};
  color: white;
`;
// export const Label = styled.label`

// `
