import React from "react";
import '../../coin.css';

function Coin({name,image,symbol,price,volume, priceChange, marketCap}) {

  console.log(`this is volume ${volume}`)
  return (
  <div data-testid='coin1 col-md col-sm col-xs'>
    <div className="coin-container col-md col-sm col-xs">
      <div className="coin-row col-md col-sm col-xs">
        <div className="coin col-md col-sm col-xs">
          <img className="col-md col-sm col-xs .img-fluid" src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol col-md col-sm col-xs"></p>
        </div>
        <div className="coin-data col-md col-xs">
          <p className="coin-price col-md col-xs"> ${price}</p>
          <p className="coin-volume col-md col-xs"> ${volume}</p>
          {priceChange < 0 ? (<p className='coin-percent red col-md col-xs'>{priceChange}</p>): (<p>{priceChange}</p>)}
          
          <p className='coin-marketcap col-md col-xs'>
              mkt Cap: ${marketCap}
              
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Coin;
