import React from "react";
import { motion } from "framer-motion";
import '../style/aboutMe.css'

const AboutMe = () => {
  return (
    <motion.div className="content aboutMe"       initial={{ opacity: 0 }}
    whileInView={{ opacity: 10 }}
    viewport={{ once: true }}>
      <h1 className="aboutMe__h1">About me</h1>
      <p className="aboutMe__p">
        Hello! My name is Jonathan and I like learn, teach, and create. I heard
        about programming time ago, but didn't knew that was fun until I try it.
        What I enjoy of programming is satisfaction of complete a challenge and
        overcome obstacles.
      </p>
      <p className="aboutMe__p">
        Actually i'm studying online on 'Touch of Tech' frontend academy. Before
        that, I learnt some autunomously watching Youtube videos and taking
        Udemy courses. This experience made my interest grows up, and now, I get
        excited about being a developer.
      </p>
      <p className="aboutMe__p">
        My long-term goals:
      </p>
      <ul className="aboutMe__ul">
          <li>Teach new developers</li>
          <li>Improve my quality of life</li>
        </ul>
    </motion.div>
  );
};

export default AboutMe;
