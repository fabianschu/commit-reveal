pragma solidity >=0.4.21 <0.7.0;

contract Hash {
  
  uint public secret;

  function setSecret(uint _secret) public returns (uint) {
    secret = _secret;
    return _secret;
  }
}
