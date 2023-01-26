import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/me.jpg";
import "./profile.css";

const Profile = () => {
  return (
    <motion.div
      className="profile"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <img src={me} alt="me" className="profile__photo" />
      <div>
        <h1 className="profile__h1">Junhy Aviña</h1>
        <p className="profile__p">Frontend Developer</p>
      </div>
    </motion.div>
  );
};

export default Profile;
