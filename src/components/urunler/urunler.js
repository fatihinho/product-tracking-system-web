import React from 'react';
import './urunler.css';

import { Route } from 'react-router-dom';

export default class Urunler extends React.Component {

  urunBilgiBtn = () => (
    <Route render={({ history }) => (
      <button
        className='urunler-btn'
        type='button'
        onClick={() => { history.push('/urun-bilgi') }}
      >
        Bilgiler
      </button>
    )} />
  )

  render() {
    return (
      <div className="urunler">
        <header className='urunler-header'>
          <h2>Ürünler</h2>
        </header>
        <hr/>
        <div className='urunler-area'>
          <div className='urunler-label'>
            Bisküvi
          </div>
          <this.urunBilgiBtn></this.urunBilgiBtn>
        </div>
        <div className='urunler-area'>
          <div className='urunler-label' style={{color: 'gray'}}>
            Ürün 2
          </div>
          <button disabled className='urunler-btn'>Bilgiler</button>
        </div>
        <div className='urunler-area'>
          <div className='urunler-label' style={{color: 'gray'}}>
            Ürün 3
          </div>
          <button disabled className='urunler-btn'>Bilgiler</button>
        </div>
      </div>
    );
  }
}