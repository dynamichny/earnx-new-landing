import React from 'react';
import Icon from '../assets/icon.svg';

import Medium from '../assets/socials/medium.svg';
import Telegram from '../assets/socials/telegram.svg';
import Twitter from '../assets/socials/twitter.svg';

export default function Footer() {
  return (
    <footer>
      <div className='footer--wrapper'>
        <div className='footer--desc'>
          <Icon />
          <p>
            Built on the BSC network, EarnX is a deflationary frictionless token. We are among the
            first to merge NFT and DeFi. Built under the supervision of experienced developers,
            EarnX is deflationary and based on the following principles: scarcity, stability, and
            utility.
          </p>
        </div>

        <div className='footer--tracking-links'>
          <p className='footer--section-name'>Tracking</p>
          <div className='footer--links-wrapper'>
            <a href=''>BSC</a>
            <a href=''>DxSale</a>
            <a href=''>BogCharts</a>
            <a href=''>CoinMarketCap</a>
            <a href=''>CoinGecko</a>
          </div>
        </div>

        <div className='footer--tracking-links'>
          <p className='footer--section-name'>BSCSCAN</p>
          <div className='footer--links-wrapper'>
            <a href=''>Contract Address</a>
            <a href=''>EarnX Burnt</a>
            <a href=''>Locked Liquidity</a>
            <a href=''>Pool</a>
          </div>
        </div>

        <div className='footer--social-links'>
          <a href=''>
            <Twitter />
          </a>
          <a href=''>
            <Telegram />
          </a>
          <a href=''>
            <Medium />
          </a>
        </div>

        <div className='footer--copyright'>Copyright © 2021 EarnX</div>
        <div className='footer--disclaimer'>
          Disclaimer: Trading cryptocurrencies carries a high level of risk, and may not be suitable
          for all investors. Before deciding to trade cryptocurrency you should carefully consider
          your investment objectives, level of experience, and risk appetite. The possibility exists
          that you could sustain a loss of some or all of your initial investment and therefore you
          should not invest money that you cannot afford to lose. Investing in EARN is your personal
          decision and is not influenced by Yearn Classic Finance.
        </div>
      </div>
    </footer>
  );
}
