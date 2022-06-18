
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import Coin from './components/coin/Coin'


function App() {

const [coins, setCoins] = useState([])
const [search,setSearch]= useState('')

  useEffect( () => {
    
 axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    ).then((response)=> {
    //handles success 

    console.log(response)
    setCoins(response.data)
  }).catch((error) => {
    console.log(error);
  }
  ).finally( () => {

  });
   

    
  
  }, []);
  console.log(coins)
const handleChange = e => {
  setSearch(e.target.value)
}

console.log(coins)

const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="coin-app col-md">
     <div className='coin-search'>
       <h1 className='coin-text'> Search a currency</h1>
       <form>

         <input type='text' placeholder='search' className='coin-input' onChange={handleChange} />
   
       </form>
     </div>
     {filteredCoins.map(coin=> {
       return (
         <Coin
          key={coin.id}
          name={coin.name} 
          image={coin.image}
          symbol={coin.symbol}
          marketCap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}/>


       )
     })}
    </div>
  );
}

export default App;
