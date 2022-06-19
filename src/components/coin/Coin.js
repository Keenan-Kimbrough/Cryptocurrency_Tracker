import React from "react";
import '../../coin.css';

function Coin({name,image,symbol,price,volume, priceChange, marketCap}) {
let volume1= Number(volume)
let newmaa = Number(marketCap)
let newpra = Number(priceChange) 
  console.log(`this is volume ${volume1}`)
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
          <p className="coin-volume col-md col-xs"> ${volume1.toFixed(2)}</p>
          {priceChange.toFixed(2) < 0 ? (<p className='coin-percent red col-md col-xs'>{newpra.toFixed(2)}</p>): (<p>{priceChange}</p>)}
          
          <p className='coin-marketcap col-md col-xs'>
              mkt Cap: ${newmaa.toFixed(2)}
              
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Coin;
