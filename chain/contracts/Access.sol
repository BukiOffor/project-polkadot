// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;
import "./PriceConverter.sol";

error InsufficientAmount();
error TransactionFailed();

contract Access{
    using PriceConverter for uint256;

    address owner;
    AggregatorV3Interface priceFeed;

    //event Transfer()

    constructor(address priceFeedAddress) {
        priceFeed = AggregatorV3Interface(priceFeedAddress);
        owner = msg.sender;
    }

    function pay(address _creator,uint256 _amount)external payable {
        if(msg.value.getConversionRate(priceFeed) < _amount){
            revert InsufficientAmount();
        }
        (bool success,)=_creator.call{value:msg.value}("");
        if(!success){
            revert TransactionFailed();
        }
        //emit Transfer()
    }
}