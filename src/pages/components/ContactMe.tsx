import {
  Button,
  Label,
  InputText,
  FlexContainer,
  Textarea,
  Form,
  Section,
  SideTitle,
} from "@/styles/styledComponents";
import { Styles } from "@/styles/styles";
import Image from "next/image";
import {useState} from 'react'


const ContactMe = () => {

  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [subject, setSubject] = useState<string>("");

  const handleSubmit = async(e:any)=>{
    e.preventDefault();


    const res = await fetch("../api/recieve-email",{
      body: JSON.stringify({
        email:email,
        message:message,
        subject:subject
      }),
      headers:{
        "Content-Type":"application/json",
      },
      method:"POST"
    })

    const {error} = await res.json();

    if(error){
      console.log(error);
      return;
    }

    console.log(message,email,subject)
  }


  return (
    <>
      <Section

        id="contact"
        flexdirection="row"
        heigthmobile="85vh"
        leftmobile="0px"
        widthmobile="99.5%"
        bordermobile="1px solid #f3f"
      marginmobile="10% 0 10% 0"
      brackgroundmobile = "#060528"
      >
        <FlexContainer
          alignitems="center"
          width="10%"
          heigth="100%"
          widthmobile="100%"
          heightmobile="15%"
        
        >
          <SideTitle marginmobile="30% 10% 0 10%" textalign="center">
            <span style={Styles.vowel[0]}>C</span>ontact
          </SideTitle>
        </FlexContainer>

        <FlexContainer
          justifycontent="center"
          width="90%"
          heigth="100%"
          widthmobile="100%"
          heightmobile="85%"
          flexdirectionmobile="column"
        >
          <Form onSubmit={(e)=>handleSubmit(e)}>
            <FlexContainer displaymobile="none" width="40%" heigth="100%">
              <Image
                priority
                fill
                alt="contact"
                sizes="100%"
                src="https://i.ibb.co/7QzjNGR/Tiger-XV-a-pixel-art-of-a-interstellar-black-hole-4k-dde3f792-0691-45b4-a445-176b8f51460f.png"
                style={Styles.imageContact}
              />
            </FlexContainer>

            <FlexContainer
              alignitems="start"
              justifycontent="center"
              flexdirection="column"
              width="70%"
              heigth="100%"
              justifycontentmobile="center"
              flexdirectionmobile="column"
              widthmobile="100%"
              heightmobile="100%"
              alignitemsmobile="center"
            >
              <Label  left="10%">Email:</Label>
              <InputText onChange={(e)=>{
                setEmail(e.target.value)
              }} top="0%" type="text" />

              <Label  left="10%">Subject:</Label>
              <InputText 
                onChange={(e)=>{
                  setSubject(e.target.value)
                }}
              top="0%" type="text" />

              <Label left="10%">Message:</Label>

              <Textarea onChange={(e)=>{
                setMessage(e.target.value)
              }}/>
              <Button top="89%" type="submit">
                Send
              </Button>
            </FlexContainer>
          </Form>
        </FlexContainer>
      </Section>
    </>
  );
};

export default ContactMe;
