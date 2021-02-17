import React, { useRef } from "react";
import { MdClose } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import Toggle from "./Toggle";

const Modal = ({
  characterMoves,
  combo,
  showModal,
  setShowModal,
  finishingMoves,
}) => {
  const modalRef = useRef();

  const closeModalHandler = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <div
          className="modal-shadow"
          ref={modalRef}
          onClick={closeModalHandler}
        >
          <div className="modal-special-moves">
            <div className="close-modal-container">
              <MdClose
                className="close-modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </div>
            <Toggle title={"Special Moves"}>
              {characterMoves.map((m) => (
                <p key={uuidv4()}>{m}</p>
              ))}
            </Toggle>
            <Toggle title={"Finishing Moves"}>
              {finishingMoves.map((fm) => (
                <p key={uuidv4()}>{fm}</p>
              ))}
            </Toggle>
            <Toggle title={"Combo Moves"}>
              {combo.map((c) => (
                <p key={uuidv4()}>{c}</p>
              ))}
            </Toggle>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
