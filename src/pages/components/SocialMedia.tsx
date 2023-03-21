import {
  Card,
  CardWrapper,
  FlexContainer,
  Section,
  SideTitle,
  Label,
} from "@/styles/styledComponents";
import { RxInstagramLogo } from "react-icons/rx";
import { RiFacebookBoxLine } from "react-icons/ri";
import {
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineGithub,
  AiOutlineWarning,
} from "react-icons/ai";
import { Styles } from "@/styles/styles";
import { useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import { useRef,useEffect } from "react";



const cards = [
  {
    icon: <RxInstagramLogo style={Styles.icons[0]} />,
    label: "Instagram",
    link: "https://www.instagram.com/stev_hernandez28/",
    time: .1,
  },
  {
    icon: <RiFacebookBoxLine style={Styles.icons[0]} />,
    label: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100083817818897",
    time: .5,
  },
  {
    icon: <AiOutlineLinkedin style={Styles.icons[0]} />,
    label: "Linkedin",
    link: "https://www.linkedin.com/in/steven-manuel-hernandez-gonzalez/",
    time: .8,
  },
  {
    icon: <AiOutlineYoutube style={Styles.icons[0]} />,
    label: "Youtube",
    link: "https://www.youtube.com/channel/UCFDZymHX92hQtwLS2Y8DooQ",
    time: .1,
  },
  {
    icon: <AiOutlineGithub style={Styles.icons[0]} />,
    label: "Github",
    link: "https://github.com/Steven-Hernandez028",
    time: 1.3,
  },
  {
    icon: <AiOutlineWarning style={Styles.icons[0]} />,
    label: "Warning",
    cursor: "wait",
    time: 1.5,
  },
]
const SocialMedia = () => {
  const ref = useRef(null);
  const isInView  = useInView(ref);
  const controls = useAnimation();

  const customAnimation= (time:number)=>{

    return{
      visible: {opacity: 1, scale:1,  transition:{ duration: time}},
    hidden: {opacity: .2},
    }
  }

  useEffect(()=>{
    if(isInView){
      controls.start("visible");
    }
  },[controls,isInView])
  return (
    <>
      <Section
        marginmobile="10% 0 10% 0"
        heigthmobile="310vh"
        id="social"
        flexdirection="row"
      >
        <FlexContainer
          alignitems="center"
          width="7%"
          heigth="100%"
          widthmobile="100%"
          heightmobile="5%"

        >
          <SideTitle>
            <span style={Styles.vowel[0]}>S</span>ocial{" "}
            <span style={Styles.vowel[0]}>M</span>edia
          </SideTitle>
        </FlexContainer>

        <FlexContainer
          justifycontent="center"
          width="86%"
          heigth="100%"
          widthmobile="100%"
          heightmobile="95%"

        >
          <CardWrapper>
            {cards.map(({ time, icon, label, link, cursor }, i) => {
              return (
                <Card
                  ref={ref}
                  key={i}
                  animate={controls}
                  initial="hidden"
                  variants={customAnimation(time)}
                  target="_blank"
                  href={link}
                  cursor={cursor}
                >
                  {icon}
                  <Label leftmobile="0%">{label}</Label>
                </Card>
              );
            })}
          </CardWrapper>

          {/*Card */}
        </FlexContainer>
      </Section>
    </>
  );
};

export default SocialMedia;
