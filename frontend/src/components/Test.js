import React, { useContext } from "react";
import NumberChange from "./NumberChange";
import { Web3Context } from "../context/Web3Context";

const Test = () => {
  console.log(Web3Context);
  // const { amount } = useContext(Web3Context);

  return (
    <>
      <div>Test Component</div>
      <p>{/* Current amount: <span>{amount}</span> */}</p>
    </>
  );
};

export default Test;
