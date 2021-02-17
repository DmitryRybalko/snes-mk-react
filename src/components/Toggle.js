import React, { useState } from "react";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="toggle" onClick={() => setToggle(!toggle)}>
      <h3>{title}</h3>
      {toggle ? children : ""}
    </div>
  );
};

export default Toggle;
