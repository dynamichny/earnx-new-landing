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
            <a
              href='https://bscscan.com/address/0x9C28E48Ea9170d9A9cB76d338655b8bd4124BC7A'
              target='_blank'>
              BSC
            </a>
            <a href='https://dxsale.app/app/pages/defipresale?saleID=512&chain=BSC' target='_blank'>
              DxSale
            </a>
            <a
              href='https://charts.bogged.finance/?token=0x9C28E48Ea9170d9A9cB76d338655b8bd4124BC7A'
              target='_blank'>
              BogCharts
            </a>
            <a href='https://earnx.yearnclassic.finance/#' target='_blank'>
              CoinMarketCap
            </a>
            <a href='https://earnx.yearnclassic.finance/#' target='_blank'>
              CoinGecko
            </a>
          </div>
        </div>

        <div className='footer--tracking-links'>
          <p className='footer--section-name'>BSCSCAN</p>
          <div className='footer--links-wrapper'>
            <a
              href='https://bscscan.com/token/0x9c28e48ea9170d9a9cb76d338655b8bd4124bc7a'
              target='_blank'>
              Contract Address
            </a>
            <a
              href='https://bscscan.com/token/0x9c28e48ea9170d9a9cb76d338655b8bd4124bc7a?a=0x000000000000000000000000000000000000dead'
              target='_blank'>
              EarnX Burnt
            </a>
            <a
              href='https://bscscan.com/token/0x9c28e48ea9170d9a9cb76d338655b8bd4124bc7a?a=0x9c28e48ea9170d9a9cb76d338655b8bd4124bc7a)'
              target='_blank'>
              Locked Liquidity Pool
            </a>
          </div>
        </div>

        <div className='footer--social-links'>
          <a href='https://twitter.com/earn_finance' target='_blank'>
            <Twitter />
          </a>
          <a href='https://t.me/yearnX' target='_blank'>
            <Telegram />
          </a>
          <a href='https://earnfinance.medium.com/' target='_blank'>
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
      <span className="poweredBy">Powered by <a href="https://twitter.com/Pawlicki_">Marcin Pawlicki</a></span>
    </footer>
  );
}
