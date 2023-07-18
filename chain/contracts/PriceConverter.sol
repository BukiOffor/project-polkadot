// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

library PriceConverter {
    // We could make this public, but then we'd have to deploy it
    function getPrice(
        AggregatorV3Interface priceFeed
    ) internal view returns (uint256) {
        // https://docs.chain.link/docs/ethereum-addresses/
        (, int256 answer, , , ) = priceFeed.latestRoundData();
        // exchange rate in 18 digit
        return uint256(answer * 1e10);
    }

    function getConversionRate(
        uint256 ethAmount,
        AggregatorV3Interface priceFeed
    ) internal view returns (uint256 exchangeRate) {
        uint256 rate = getPrice(priceFeed);
        // the actual GLDR/USD conversion rate, after adjusting the extra 0s.
        exchangeRate = (rate * ethAmount) / 1000000000000000000;
    }
}
