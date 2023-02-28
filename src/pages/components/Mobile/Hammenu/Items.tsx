import * as React from "react";
import { motion } from "framer-motion";
import { styles } from "./styles";
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#fef6e4", "#f582ae", "#8bd3dd", "#b8c1ec", "#ff8906"];

export const MenuItem = ({ id, text, icon } : any) => {
  const style = { border: `3px solid ${colors[id]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div style={styles.iconPlaceholder}>
        <span style={styles.icon}>{icon}</span>
      </div>

      <div style={styles.textPlaceholder}>
        <span style={styles.text}>{text}</span>
      </div>
    </motion.li>
  );
};
