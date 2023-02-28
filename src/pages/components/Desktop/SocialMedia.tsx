import { Card, CardWrapper, FlexContainer, Section, SideTitle,Label } from '@/styles/styledComponents'
import { RxInstagramLogo } from 'react-icons/rx'
import { RiFacebookBoxLine } from 'react-icons/ri'
import { AiOutlineLinkedin,AiOutlineYoutube,AiOutlineGithub,AiOutlineWarning} from 'react-icons/ai'
import { Styles } from '@/styles/styles'

const cards =[
    {
        icon: <RxInstagramLogo style={Styles.icons[0]} />,
        label: "Instagram",
        link: "https://www.instagram.com/stev_hernandez28/"
    },
    {   icon: <RiFacebookBoxLine style={Styles.icons[0]} />,
        label: "Facebook",
        link: "https://www.facebook.com/profile.php?id=100083817818897",

    },
    {  
        icon:<AiOutlineLinkedin style={Styles.icons[0]} />,
        label: "Linkedin",
        link: "https://www.linkedin.com/in/steven-manuel-hernandez-gonzalez/",
    },
    {
        icon: <AiOutlineYoutube style={Styles.icons[0]} />,
        label:"Youtube",
        link: "https://www.youtube.com/channel/UCFDZymHX92hQtwLS2Y8DooQ",
    },
    {
        icon: <AiOutlineGithub style={Styles.icons[0]} />,
        label:"Github",
        link: "https://github.com/Steven-Hernandez028",
    },
    {
        icon: <AiOutlineWarning style={Styles.icons[0]} />,
        label:"Warning",
        cursor:"wait"

    }

]




const SocialMedia = ()  => {
  return (
    <Section id="social" flexDirection="row">
<<<<<<< HEAD
=======

>>>>>>> 4723df52cc59f64d8a6fed715a55f5cc8744c767
    <FlexContainer alignItems="start" width="7%" heigth="100%">
      <SideTitle>
        <span style={Styles.vowel[0]}>S</span>ocial
      </SideTitle>
    </FlexContainer>

    <FlexContainer justifyContent="center" width="86%" heigth="100%">
      <CardWrapper>
        {cards.map(({icon,label,link,cursor},i)=>{
            return(
                <Card
                key = {i}
                whileHover={{scale: 1.1}}
                whileTap={{scale:1}}
                target="_blank"
                href={link}
                cursor={cursor}
                animate={{

                }}
                >
                {icon}
                <Label>{label}</Label>
                
                </Card>
            )
        })}
     
      </CardWrapper>

      {/*Card */}
    </FlexContainer>

    <FlexContainer alignItems="end" width="7%" heigth="100%">
      <SideTitle>
        <span style={Styles.vowel[0]}>M</span>edia
      </SideTitle>
    </FlexContainer>
  </Section>
<<<<<<< HEAD
    
=======

>>>>>>> 4723df52cc59f64d8a6fed715a55f5cc8744c767


  )
}

export default SocialMedia