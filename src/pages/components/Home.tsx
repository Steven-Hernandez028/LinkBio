
import {
    Description,
    FlexContainer,
    Logo,
    MenuWrap,
    ItemMenu,
    RoundBox,
    Section,
    LetterSpan,
    Title,
} from "@/styles/styledComponents";
import { Styles } from "@/styles/styles";
import { useInView } from "framer-motion";
import Image from "next/image";

import HamburgerMenu from "./HamburgerMenu";
import {useEffect, useState} from 'react'
const itemMenu = [
    {
        href: "#home",
        name: "Home",
        initialY: -50,
    },
    {
        href: "#social",
        name: "Social Media",
        initialY: -50,
    },
    {
        href: "#donate",
        name: "Donate",
        initialY: -60,
    },
    {
        href: "#contact",
        name: "Contact Me",
        initialY: -60,
    },
];

const Menu = () => {
    return (
        <>
            <MenuWrap>
                {itemMenu.map((element, i) => {
                    return (
                        <ItemMenu
                            whileHover={{ scale: 1.1 }}
                            transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 10,
                            }}
                            initial={{ y: element.initialY }}
                            animate={{ y: 0 }}
                            key={i}
                            href={element.href}
                        >
                            {element.name}
                        </ItemMenu>
                    );
                })}
            </MenuWrap>
        </>
    );
};
const Home = () => {
    const [isBreathing, setIsBreathing] = useState<boolean>(true);

    useEffect(() => {
        const interval = setInterval(() => {
          setIsBreathing(prev => !prev);
        }, 2000);
    
        return () => clearInterval(interval);
      }, []);


    const variants = {
        initial: {
            y: -50,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        },
    };

    const variants2 = {
        initial: {
            y: 50,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: "easeInOut",
            },
        },
    };

    const shadows = {
        breathIn: {
            boxShadow: "0px 0px 40px 20px rgba(108, 99, 255, 0.5)",
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        },
        breathOut: {
            boxShadow: "0px 0px 20px 10px rgba(108, 99, 255, 0.2)",
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        },
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
                    <Logo
                        whileHover={{ scale: 1.1 }}
                        transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 100,
                        }}
                        initial={{ y: -50 }}
                        animate={{ y: 0 }}
                    >
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
                        <RoundBox initial={{ x: "-40%" }} animate={{ x: "0%" }}>
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
                        <Title
                            variants={variants}
                            initial="initial"
                            animate="animate"
                          
                        >
                        
                            <span style={Styles.vowel[0]}>M</span>
                            <span style={Styles.vowel[1]}>y</span> LinkBio
                        </Title>

                        <Description
                            bottommobile="0px"
                            marginmobile="0 4% 0 4%"
                            bottommedia="25%"
                            textalign="none"
                            variants={variants2}
                            initial="initial"
                            animate="animate"
                        >
                            I am Steven Hernandez, a web developer with 2 years
                            of experience. I specialize in HTML, CSS, JavaScript
                            and C# and have worked on projects for different
                            customers. <br /> <br />I enjoy working with
                            up-to-date technologies and collaborating with
                            project teams to achieve success.If you&apos;re
                            looking for an experienced web developer, feel free
                            to contact me!
                        </Description>
                    </FlexContainer>
                </FlexContainer>
            </Section>
        </>
    );
};

export default Home;
