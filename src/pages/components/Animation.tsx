import React from 'react';
import { motion } from 'framer-motion';

const BreathAnimation = () => {
  const [isBreathing, setIsBreathing] = React.useState(true);

  const variants = {
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

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsBreathing(prev => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      variants={variants}
      animate={isBreathing ? "breathIn" : "breathOut"}
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "#6c63ff",
        borderRadius: "50%",
      }}
    />
  );
};

export default BreathAnimation;
