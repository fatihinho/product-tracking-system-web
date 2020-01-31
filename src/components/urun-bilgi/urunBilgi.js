import React from 'react';
import './urunBilgi.css';

import { Route } from 'react-router-dom';

export default class UrunBilgi extends React.Component {

  hammaddeBtn = () => (
    <Route render={({ history }) => (
      <button
        className='urunBilgi-btn'
        type='button'
        onClick={() => { history.push('/hammadde') }}
      >
        Hammadde Bilgileri
      </button>
    )} />
  )
  
  urunEldesiBtn = () => (
    <Route render={({ history }) => (
      <button
        className='urunBilgi-btn'
        type='button'
        onClick={() => { history.push('/urun-elde') }}
      >
        Ürün Elde Bilgileri
      </button>
    )} />
  )
  
  nakliyatBtn = () => (
    <Route render={({ history }) => (
      <button
        className='urunBilgi-btn'
        type='button'
        onClick={() => { history.push('/nakliyat') }}
      >
        Nakliyat Bilgileri
      </button>
    )} />
  )
  
  genelBilgiBtn = () => (
    <Route render={({ history }) => (
      <button
        className='urunBilgi-btn'
        type='button'
        onClick={() => { history.push('/genel-bilgi') }}
      >
        Genel Bilgilendirme
      </button>
    )} />
  )

  render() {
    return (
      <div className="urunBilgi">
        <header className='urunBilgi-header'>
          <h2>Ürün Bilgi</h2>
        </header>
        <hr/>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <this.hammaddeBtn></this.hammaddeBtn>
          <this.urunEldesiBtn></this.urunEldesiBtn>
          <this.nakliyatBtn></this.nakliyatBtn>
          <this.genelBilgiBtn></this.genelBilgiBtn>
        </div>
      </div>
    );
  }
}