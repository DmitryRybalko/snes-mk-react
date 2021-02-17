import React from "react";
import Character from "./Character";
import roster from "../data";
import { motion } from "framer-motion";
import { characterAnimation } from "../animations.js";
import Footer from "./Footer";

const Select = () => {
  const characters = roster.map((character) => (
    <Character
      name={character.name}
      profilePic={character.profilePic}
      announce={character.announce}
      key={character.id}
      finishingMoves={character.finishingMoves}
      combo={character.combo}
      characterMoves={character.specialMoves}
    />
  ));
  return (
    <>
      <div className="selection-container">
        <motion.div
          variants={characterAnimation}
          initial="hidden"
          animate="show"
          className="selection"
        >
          {characters}
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Select;
