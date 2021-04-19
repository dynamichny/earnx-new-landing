import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function WhereToBuy() {
  return (
    <div style={{ height: '100%' }}>
      <Head>
        <title>EarnX | Where to buy</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <div className='where-to-buy--wrapper'>
          <h2>Where to buy EarnX?</h2>

          <div className='where-to-buy--grid'>
            <a className='where-to-buy--grid-item'>
              <img
                src='/whereToBuy/pancakeswap-preview.png'
                className='where-to-buy--grid-item__bg'
              />
              <div class='where-to-buy--grid-item__texts'>
                <img src='/whereToBuy/pancakeswap.png' />
                <span>Buy EarnX on PancakeSwap</span>
              </div>
            </a>

            <a className='where-to-buy--grid-item'>
              <img src='/whereToBuy/hotbit-preview.png' className='where-to-buy--grid-item__bg' />
              <div class='where-to-buy--grid-item__texts'>
                <img src='/whereToBuy/hotbit.png' />
                <span>Buy EarnX on Hotbit</span>
              </div>
            </a>
          </div>
        </div>
      </Layout>
    </div>
  );
}
