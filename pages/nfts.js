import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Nfts() {
  return (
    <div style={{ height: '100%' }}>
      <Head>
        <title>EarnX | NFTS</title>
      </Head>
      <Layout>
        <div class='nfts--wrapper'>
          <h2>NFTS</h2>
          <div className='nfts--collection-wrapper'>
            <div>
              <p>#BNB Collection RUGS Limited Edition</p>
            </div>
            <img src='/nfts/img1.png' />
            <img src='/nfts/img2.png' />
          </div>

          <p className="nfts--comming-soon">
            More collections coming soon...
          </p>
        </div>
      </Layout>
    </div>
  );
}
