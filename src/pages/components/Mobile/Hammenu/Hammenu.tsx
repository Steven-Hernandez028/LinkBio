// import { HamButton,Icon,IconText,TextPlacerHolder,NavbarElements,Navbar,ListElements,UnorderedList } from "@/styles/styledComponents"
// import  {AiOutlineHome, AiOutlineExclamationCircle, AiOutlineQuestion}  from 'react-icons/ai';
// import {TbCross} from 'react-icons/tb';
// import { TfiWorld } from 'react-icons/tfi';
// import { MdOutlineContactPage } from'react-icons/md';
// import { motion,useCycle} from "framer-motion";

// const variantss = {
//     open: {
//         y: 0,
//         opacity: 1,
//         transition: {
//             y: { stiffness: 50, velocity: -10}
//         }
//     },
//     closed: {
//         y: 50,
//         opacity: 0,
//         transition: {
//             y: { stiffnes: 100},
            
//         },
//         display:"none"
//     }
// };


//  const Items = ({  text, icon, isOpen } :any) => {

// return (

//         <ListElements
//             variants={variantss}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: .95 }}
//             style={{display: isOpen? "flex" : "none"}}
//         >
//             <Icon >{icon}</Icon>

//             <TextPlacerHolder >
//                 <IconText >{text}</IconText>
//             </TextPlacerHolder>


//         </ListElements>
//     )
// }
// const variants ={
//     open:{
//         transition: { staggerChildren:.1, delayChildren: 0.5},
       
//     },
//     closed:{
//         transition: { staggerChildren: 0.1, staggerDirection: -1}
//     }
// };


// const items =[
//     { id: 0, text: "Home", icon: <AiOutlineHome/> },
//     { id: 1, text: "About Us", icon: <AiOutlineExclamationCircle/> },
//     { id: 2, text: "Quieres ser salvo?", icon:<TbCross/> },
//     { id: 3, text: "Campaing", icon: <TfiWorld/>},
//     { id: 4, text: "FAQ", icon: <AiOutlineQuestion/> },
//     { id: 5, text: "Contact", icon: <MdOutlineContactPage/> }
// ];

//  const Nav = ({isOpen}:any) => {
//   return (

//     <UnorderedList variants={variants}>
//         {items.map ((item)=> (
//             <Items  isOpen={isOpen} id={item.id} key={item.id} text={item.text} icon={item.icon} />
//         ))}
//     </UnorderedList>
//   )
// }


// const Path = (props:any) => (
//     <motion.path
//         fill="transparent"
//         strokeWidth="2.5"
//         stroke="rgb(255,255,255)"
//         strokeLinecap="round"
//         {...props}
//     />
// )

//  const Toggle = ({ toggle }:any) => {
//     return (
//         <HamButton onClick={toggle}>
//             <svg width="30" height="30" viewBox="0 0 23 23">
//                 <Path
//                     variants={{
//                         closed: { d: "M 2 2.5 L 20 2.5" },
//                         open: { d: "M 3 16.5 L 17 2.5" }
//                     }}
//                 />

//                 <Path
//                     d="M 2 9.423 L 20 9.423"
//                     variants={{
//                         closed: { opacity: 1 },
//                         open: { opacity: 0 }
//                     }}
//                     transition={{ duration: 0.1 }}
//                 />

//                 <Path
//                     variants={{
//                         closed: { d: "M 2 16.346 L 20 16.346" },
//                         open: { d: "M 3 2.5 L 17 16.346" }
//                     }}
//                 />

//             </svg>

//         </HamButton>
//     )
// }






// const sidebar = {
//   open: (height = 1000) => ({
//     y:-15,
//     x: -175,
//     clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
//     transition: {
//       type: "spring",
//       stiffness: 30,
//       restDelta: 2,
//     },

//   }),
//   closed: {
 
//     x:0,
//     clipPath: "circle(30px at 40px 40px)",
    
//     transition: {
//       delay: .5,
//       type: "spring",
//       stiffness: 400,
//       damping: 40
//     },
//   }
// };


//  const Hammenu = () => {
//   const [isOpen, toggleOpen] = useCycle(false, true);

//   return (


//     <Navbar
//       initial={false}
//       animate={isOpen ? "open" : "closed"}
//       custom="100%"
//     >

//       <NavbarElements variants={sidebar} />
//       <Nav isOpen ={isOpen} />
//       <Toggle toggle={() => toggleOpen()} />


//     </Navbar>




//   )
// }

// export default Hammenu


import "./styles.ts";
import * as React from "react";
import { motion, useCycle } from "framer-motion";

import MenuToggle  from "./Toggle";
import  Navigation  from "./Nav";

import { styles } from "./styles";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export default function Hammenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <motion.nav
      //@ts-ignore
        style={styles.nav}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom="100%"
      
      >
        <motion.div style={styles.navbar} variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>

    </>
  );
}
