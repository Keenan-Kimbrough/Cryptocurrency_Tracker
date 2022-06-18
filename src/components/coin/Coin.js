import React from "react";
import '../../coin.css';

function Coin({name,image,symbol,price,volume, priceChange, marketCap}) {

  console.log(`this is volume ${volume}`)
  return (
  <div data-testid='coin col-md'>
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol"></p>
        </div>
        <div className="coin-data">
          <p className="coin-price"> ${price}</p>
          <p className="coin-volume"> ${volume}</p>
          {priceChange < 0 ? (<p className='coin-percent red'>{priceChange}</p>): (<p>{priceChange}</p>)}
          
          <p className='coin-marketcap'>
              mkt Cap: ${marketCap}
              
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Coin;
