import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { ToPrint } from "../../components/ToPrint";

import "./styles.css";
export const Example = () => {
  let componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="container">
      <button onClick={handlePrint}>print</button>
      <ToPrint ref={componentRef} text={"Example using create-react-app"} />
    </div>
  );
};
