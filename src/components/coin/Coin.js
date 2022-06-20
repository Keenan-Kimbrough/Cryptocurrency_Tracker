import React from "react";
import '../../coin.css';

function Coin({name,image,symbol,price,volume, priceChange, marketCap}) {

  console.log(`this is volume ${volume}`)
  return (
  <div data-testid='coin1 '>
    <div className="coin-container">
      <div className="coin-row ">
        <div className="coin ">
          <img className="col-md col-sm col-xs .img-fluid" src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol col-md col-sm col-xs"></p>
        </div>
        <div className="coin-data ">
          <p className="coin-price "> Price: ${price}</p>
          <p className="coin-volume "> Volume: ${volume.toFixed(2)}</p>
           {priceChange.toFixed(2) < 0 ? (<p className='coin-percent red '>Price Change: {priceChange.toFixed(2)}%</p>): (<p className=' coin-percent green'> Price Change: {priceChange}%</p>)}
          
          <p className='coin-marketcap col-md col-xs'>
              mkt Cap: ${marketCap.toFixed(2)}
              
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Coin;
