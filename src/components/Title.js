import React from "react";
import { Link } from "react-router-dom";
import destiny from "../assets/mp3/destiny.mp3";
import { motion } from "framer-motion";
import { titleAnimation, titleContainer } from "../animations.js";

const Title = () => {
  const audioOnStart = new Audio(destiny);
  const audioOnStartHandler = () => {
    audioOnStart.play();
  };
  return (
    <motion.div
      variants={titleContainer}
      initial="hidden"
      animate="show"
      exit="exit"
      className="title__container"
    >
      <div className="title">
        <motion.h1
          variants={titleAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
          className="title__name"
        >
          Ultimate Mortal Kombat 3
        </motion.h1>
        <Link
          to="/select"
          onClick={audioOnStartHandler}
          className="title__link"
        >
          SNES Moveset
        </Link>
      </div>
    </motion.div>
  );
};

export default Title;
