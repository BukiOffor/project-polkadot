const CoinMarketCap = require('coinmarketcap-api')

export default async function priceFeed(){
    const coinApi = 'f153a2fe-0002-4a02-8d67-dcc1d26ee11d'
    const client = new CoinMarketCap(coinApi)
    const eth = await client.getQuotes({id:'50', convert:"USD"})
    const price = eth['data']['50']['quote']['USD']['price']
    return price;
}   
