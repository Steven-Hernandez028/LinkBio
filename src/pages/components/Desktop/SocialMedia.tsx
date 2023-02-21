import { Card, CardWrapper, FlexContainer, Section, SideTitle,Label } from '@/styles/styledComponents'
import { RxInstagramLogo } from 'react-icons/rx'
import { RiFacebookBoxLine } from 'react-icons/ri'
import { AiOutlineLinkedin,AiOutlineYoutube,AiOutlineGithub,AiOutlineWarning} from 'react-icons/ai'
import { Styles } from '@/styles/styles'

const SocialMedia = () => {
  return (
    <Section flexDirection="row">
    <FlexContainer alignItems="start" width="7%" heigth="100%">
      <SideTitle>
        <span style={Styles.vowel[0]}>S</span>ocial
      </SideTitle>
    </FlexContainer>

    <FlexContainer justifyContent="center" width="86%" heigth="100%">
      <CardWrapper>
        <Card>
          <RxInstagramLogo style={Styles.icons[0]} />
          <Label>Instagram</Label>
        </Card>
        <Card>
          <RiFacebookBoxLine style={Styles.icons[0]} />
          <Label>Facebook</Label>
        </Card>
        <Card>
          <AiOutlineLinkedin style={Styles.icons[0]} />
          <Label>Linkedin</Label>
        </Card>
        <Card>
          <AiOutlineYoutube style={Styles.icons[0]} />
          <Label>Youtube</Label>
        </Card>
        <Card>
          <AiOutlineGithub style={Styles.icons[0]} />
          <Label>GitHub</Label>
        </Card>
        <Card>
          <AiOutlineWarning style={Styles.icons[0]} />
          <Label>Warning</Label>
        </Card>
      </CardWrapper>

      {/*Card */}
    </FlexContainer>

    <FlexContainer alignItems="end" width="7%" heigth="100%">
      <SideTitle>
        <span style={Styles.vowel[0]}>M</span>edia
      </SideTitle>
    </FlexContainer>
  </Section>


  )
}

export default SocialMedia