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

const cards = [
  {
    icon: <RxInstagramLogo style={Styles.icons[1]} />,
    label: "Instagram",
    link: "https://www.instagram.com/stev_hernandez28/",
  },
  {
    icon: <RiFacebookBoxLine style={Styles.icons[1]} />,
    label: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100083817818897",
  },
  {
    icon: <AiOutlineLinkedin style={Styles.icons[1]} />,
    label: "Linkedin",
    link: "https://www.linkedin.com/in/steven-manuel-hernandez-gonzalez/",
  },
  {
    icon: <AiOutlineYoutube style={Styles.icons[1]} />,
    label: "Youtube",
    link: "https://www.youtube.com/channel/UCFDZymHX92hQtwLS2Y8DooQ",
  },
  {
    icon: <AiOutlineGithub style={Styles.icons[1]} />,
    label: "Github",
    link: "https://github.com/Steven-Hernandez028",
  },
  {
    icon: <AiOutlineWarning style={Styles.icons[1]} />,
    label: "Warning",
    cursor: "wait",
  },
];


const SocialMedia = () => {
  return (
    <>
         <Section width="71vw" left="14%" height="280vh" flexDirection="column" margin="10% 0 10% 0">
     <FlexContainer heigth= "7%" justifyContent="center" alignItems="center" flexDirection="column">

     <SideTitle >
        <span style={Styles.vowel[0]}>S</span>ocial
      </SideTitle>
   
    
      
      <SideTitle textAlign="end">
        <span style={Styles.vowel[0]}>M</span>edia
      </SideTitle>
     </FlexContainer>
    


      <FlexContainer justifyContent="center" width="100%" heigth="93%">
        <CardWrapper>
          {cards.map(({ icon, label, link, cursor }, i) => {
            return (
              <Card
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                target="_blank"
                href={link}
                cursor={cursor}
                animate={{}}
              >
                {icon}
                <Label>{label}</Label>
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
