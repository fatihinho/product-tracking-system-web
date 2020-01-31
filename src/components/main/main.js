import React from 'react';
import './main.css';

import { Route } from 'react-router-dom';

export default class Main extends React.Component {

  urunlerBtn = () => (
    <Route render={({ history }) => (
      <button
        className='btn'
        type='button'
        onClick={() => { history.push('/urunler') }}
      >
        ÜRÜN BİLGİLERİ
      </button>
    )} />
  )

  render() {
    return (
      <div className="main">
        <header className="main-header">
          <h1>TEDARİK ZİNCİRİ</h1>
          <h3>Admin Paneli</h3>
          <this.urunlerBtn></this.urunlerBtn>
        </header>
      </div>
    );
  }
}