import {
  Description,
  FlexContainer,
  Section,
  SubTitle,
  DonateButton,
} from "@/styles/styledComponents";
import { Styles } from "@/styles/styles";

const BannerDonate = ({ handleModal }: any) => {
  return (
    <>
      <Section
        id="donate"
        radius="activated"
        background="#ff7d26"
        left="0%"
        width="100%"
        flexdirection="row"
        height="25vh"
        leftmobile="0px"
        widthmobile="100%"
        heigthmobile="50vh"
        justifycontentmobile="center"
        brackgroundmobile="#ff7d26"
      >
        <FlexContainer
          width="30%"
          heigth="100%"
          widthmobile="100%"
    

          heightmobile="30%"
        >
          <SubTitle>
            <span style={Styles.vowel[1]}>B</span>uy me a coffee
          </SubTitle>

        </FlexContainer>

        <FlexContainer
          width="70%"
          heigth="100%"
          widthmobile="100%"
          flexdirectionmobile="column"
          heightmobile="70%"
          justifycontentmobile="center"
          alignitemsmobile="center"
        >
          <Description
            width="85%"
            bottom="10%"
            bottommobile="10%"
            
            marginmobile="0px"
            textalign="justify"
          >
            Support me as a web developer with a donation. Any contribution, no
            matter how small, will be greatly appreciated and will allow me to
            continue creating innovative solutions. Thank you!
          </Description>

          <DonateButton
            href={`https://www.paypal.com/donate/?hosted_button_id=${process.env
              .PAYPAL_ID!}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleModal}
          >
            Donate
          </DonateButton>
        </FlexContainer>
      </Section>
    </>
  );
};

export default BannerDonate;
