import React,{useState} from "react";
import { slide as Menu } from "react-burger-menu";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { FlexContainer, ItemMenu,HamburguerMenuWrapper} from "@/styles/styledComponents";


var styles = {
  bmBurgerButton: {
    position: "fixed",
    height: "36px",
    width: "34px",
    left: "80%",
    top: "36px",
    color: "#26A8FF",
  },
  bmBurgerBars: {
    background: "#26A8FF",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    left: "20px",
    top: "40px",
    height: "26px",
    width: "24px",
  },
  bmCross: {
    height: "36px",
    width: "34px",
    color: "white",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
   
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#34023A",
    padding: "2.5em 1.5em 0",

  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    height: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",

    color: "#b8b7ad",
    padding: "0.8em",
  
  },
  bmItem: {
   
    display: "flex",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, .3)",
    left:"0%"

  },
};

const HamburgerMenu = () => {
  const [isOpenMenu, setisOpenMenu] = useState<boolean>(false);

  const onClose = () => {
    setisOpenMenu(!isOpenMenu);
  };

  const checkIsOpen = () => {
    setisOpenMenu(!isOpenMenu);
  };



  return (
    <HamburguerMenuWrapper >
      <Menu
        isOpen={isOpenMenu}
        right
        styles={styles}
        onOpen={checkIsOpen}
        onClose={checkIsOpen}
        customCrossIcon={<RxCross1 />}
        customBurgerIcon={<RxHamburgerMenu />}
      >
        <ItemMenu onClick={onClose} href="#home">
          Home
        </ItemMenu>
        <ItemMenu onClick={onClose} href="#social">
          Social Media
        </ItemMenu>
        <ItemMenu onClick={onClose} href="#donate">
          Donate
        </ItemMenu>
        <ItemMenu onClick={onClose} href="#contact">
          Contact Me
        </ItemMenu>
      </Menu>
      </HamburguerMenuWrapper>
  );
};

export default HamburgerMenu;
