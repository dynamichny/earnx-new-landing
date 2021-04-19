import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function RoadMap() {
  return (
    <div style={{ height: '100%' }}>
      <Head>
        <title>EarnX | Road map</title>
      </Head>
      <Layout>
        <div className='road-map--wrapper'>
          <h2>Road map</h2>
          <div className='road-map--quartal-wrapper'>
            <div className='hex'>
              <span>Q2</span>
            </div>
            <span className='road-map--quartal__tittle'>Foundations</span>
            <ul>
              <li><span>Launch of EarnX trading</span></li>
              <li><span>Listing on information centers (CoinMarketCap, CoinGecko)</span></li>
              <li><span>Build a solid community of EarnXers</span></li>
              <li><span>Launch first marketing campaign</span></li>
              <li><span>Launch trading on tier 2 and tier 3 exchanges</span></li>
              <li><span>EarnX audited and vetted by a credibility agency</span></li>
              <li><span>Produce and deliver the first BNB collection Rugs</span></li>
            </ul>
          </div>
          <div className='road-map--quartal-wrapper'>
            <div className='hex'>
              <span>Q3</span>
            </div>
            <span className='road-map--quartal__tittle'>Expansion</span>
            <ul>
              <li><span>Develop partnerships and affiliations</span></li>
              <li><span>Populate the NFT space</span></li>
              <li><span>Recruit new team members and bring more utility to EarnX</span></li>
            </ul>
          </div>
          <div className='road-map--quartal-wrapper'>
            <div className='hex'>
              <span>Q4</span>
            </div>
            <span className='road-map--quartal__tittle'>Innovation</span>
            <ul>
              <li><span>Trading on major exchanges</span></li>
              <li><span>Revolutionize the NFT world with research and innovation</span></li>
              <li><span>Launch our own NFT auction platform with a crypto gateway</span></li>
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
}
