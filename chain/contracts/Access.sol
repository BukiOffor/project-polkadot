// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;
import "./PriceConverter.sol";
import "hardhat/console.sol";

error InsufficientAmount();
error TransactionFailed();

contract Access {
    using PriceConverter for uint256;

    address public owner;
    AggregatorV3Interface priceFeed;

    event Transfer(
        address indexed user,
        string indexed product,
        address indexed creator,
        uint256 amount
    );

    constructor(address priceFeedAddress) {
        priceFeed = AggregatorV3Interface(priceFeedAddress);
        owner = msg.sender;
    }

    function pay(
        string memory product,
        address _creator,
        uint256 _amount
    ) external payable {
        console.log(msg.value.getConversionRate(priceFeed));
        if (msg.value.getConversionRate(priceFeed) < (_amount*1e18)) {
            revert InsufficientAmount();
        }
        (bool success, ) = payable(_creator).call{value: msg.value}("");
        if (!success) {
            revert TransactionFailed();
        }
        emit Transfer(msg.sender, product, _creator, _amount);
    }
}
