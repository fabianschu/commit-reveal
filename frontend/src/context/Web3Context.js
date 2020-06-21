import React, { createContext, useState } from "react";
import { web3js } from "../config/node";
import { contractAddress } from "../config/contractAddress";
import * as jsonInterface from "../config/contractABI.json";


const Web3Context = createContext();

const Web3ContextProvider = ({ children }) => {

  const {abi} = jsonInterface.default;

  const [hashContract] = useState(
    new web3js.eth.Contract(abi, contractAddress)
  );

  // const increaseBy = (value) => {
  //   setAmount(amount + value);
  // };

  // const decreaseBy = (value) => {
  //   setAmount(amount - value);
  // };

  const defaultContext = {
    // increaseBy,
    // decreaseBy,
  };

  return (
    <Web3Context.Provider value={defaultContext}>
      {children}
    </Web3Context.Provider>
  );
};

export { Web3Context, Web3ContextProvider };
