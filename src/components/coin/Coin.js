import React from "react";
import '../../coin.css';

function Coin({name,image,symbol,price,volume, priceChange, marketCap}) {

  return (
  <div data-testid=''>
    <div className="coin-container">
      <div className="coin-row ">
       
        <div className="coin-data ">
        <p className="coin-symbol"> <img  src={image} alt="crypto" /><h1>{name}</h1> </p>
          
          <p className="coin-price "> Price: ${price}</p>
          <p className="coin-volume "> Volume: ${volume.toFixed(2)}</p>
           {priceChange.toFixed(2) < 0 ? (<p className='coin-percent red '>Price Change: {priceChange.toFixed(2)}%</p>): (<p className=' coin-percent green'> Price Change: {priceChange}%</p>)}
          
          <p className='coin-marketcap '>
              mkt Cap: ${marketCap.toFixed(2)}
              
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Coin;
