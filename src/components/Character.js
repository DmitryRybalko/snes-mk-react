import React, { useState } from "react";
import Modal from "./Modal";

const Character = ({
  profilePic,
  id,
  combo,
  announce,
  name,
  characterMoves,
  finishingMoves,
}) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal((prev) => !prev);
  };

  let announceNameAudio = new Audio(announce);
  const announceNameHandler = () => {
    announceNameAudio.play();
  };
  return (
    <>
      <div className="character" key={id} onClick={announceNameHandler}>
        <img onClick={showModalHandler} src={profilePic} alt={name} />
      </div>
      <Modal
        combo={combo}
        characterMoves={characterMoves}
        finishingMoves={finishingMoves}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default Character;
