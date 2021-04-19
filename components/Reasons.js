import React from 'react';

export default function Reasons() {
  return (
    <div className='reasons--wrapper'>
      <h2>What is making EarnX a good investment?</h2>
      <div className='reasons--list'>
        <div className='reasons--list__item'>
          <div>
          <img src="/reasons/safe.png" />
          </div>
          <div>
            <p>SAFETY</p>
            <p>
              You are safe against any rug pulls (Token ownership renounced, liquidity locked with
              DxSale).
            </p>
          </div>
        </div>
        <div className='reasons--list__item'>
          <div>
          <img src="/reasons/increasing.png" />
          </div>
          <div>
            <p>CONSTANT BENEFITS</p>
            <p>
              You benefit with Token value constantly increasing based on redistribution channels.
            </p>
          </div>
        </div>
        <div className='reasons--list__item'>
          <div>
          <img src="/reasons/low-gas.png" />
          </div>
          <div>
            <p>SCALABILITY</p>
            <p>
              You benefit from low gas fee {'&'} highest scalability as EarnX is built on BSC
              network.
            </p>
          </div>
        </div>
        <div className='reasons--list__item'>
          <div>
          <img src="/reasons/gift.png" />
          </div>
          <div>
            <p>UTILITY</p>
            <p>
              You could anytime utilize your tokens against our unique yet physical collectibles
              providing utility to EarnX.
            </p>
          </div>
        </div>
        <div className='reasons--list__item'>
          <div>
          <img src="/reasons/10.png" />
          </div>
          <div>
            <p>GOOD CONDITIONS</p>
            <p>
              Every transaction attracts a 10% tax, half of it get's redistributed proportionately
              among holders {'&'} other half adds to EarnX Liquidity Pool.
            </p>
          </div>
        </div>
        <div className='reasons--list__item'>
          <div>
            <img src="/reasons/fire.png" />
          </div>
          <div>
            <p>STABILITY</p>
            <p>
              You benefit as supply is limited and constantly burning, which makes it scarce, hence
              price stability is guaranteed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
