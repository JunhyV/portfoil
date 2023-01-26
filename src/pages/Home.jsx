import React from "react";
import { motion } from "framer-motion";
import "../style/home.css";

const Home = () => {
  return (
    <motion.div
      className="content home"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: .8,
        delay: .2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <p className="home__p">Hi! My name is </p>
      <h1 className="home__h1">Jonathan</h1>
    </motion.div>
  );
};

export default Home;
