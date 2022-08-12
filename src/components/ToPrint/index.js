import React from "react";
import logo from "../../assets/logo.svg";
import "./styles.css";
export const ToPrint = React.forwardRef((props, ref) => {
  return (
    <div className="content" ref={ref}>
      <h1>{props.text}</h1>

      <img
        src={logo}
        style={{
          width: "25%",
        }}
        alt="logo"
      />
    </div>
  );
});
