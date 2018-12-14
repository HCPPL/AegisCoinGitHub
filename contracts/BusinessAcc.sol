pragma solidity ^0.4.24;

import "./Ownable.sol";

contract AegisEconomyCoin {
    function transfer(address _receiver, uint256 _value) public;
    function balanceOf(address) public;
}

contract BusinessAcc is Ownable {

    AegisEconomyCoin public aegisCoin;

    /// Modifier to allow only aegisCoin contract to call a method
    modifier onlyAdmin() {
            require (msg.sender == address(aegisCoin));
            _;
    } 

    /// @author Gagandeep_HashCode
    /// @notice Contructor for initial setup
    constructor (AegisEconomyCoin _address) 
    public
    {
            require(_address != address(0));
            aegisCoin = _address;
    }


    /// @notice Function to transfer business funds to any address
    /// @param _receiver Receiver's address
    /// @param _value Amount of tokens to be sent
    function transferTokens(address _receiver, uint256 _value) 
    onlyAdmin 
    public 
    {
            aegisCoin.transfer(_receiver, _value);
    }


    // ========================= Getter Methods ===============================

    // function getOwner()
    // public
    // view
    // returns (address)
    // {
    //         return owner;
    // }


    function getAegisCoinAddress() 
    public 
    view 
    returns (address) 
    {
            return aegisCoin;
    }
}