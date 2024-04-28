// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {

    uint256 public _storedData;

    constructor(uint256 storedData_) {

        _storedData = storedData_;
    }

    function set(uint256 storedData_) public {
        _storedData = storedData_;
    }

    function get() view public returns(uint256 storedData) {
        storedData = _storedData;
    }
}
      