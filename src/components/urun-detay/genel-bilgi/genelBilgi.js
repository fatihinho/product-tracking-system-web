import React from 'react';
import './genelBilgi.css';

import Firebase from '../../../config/config';

export default class GenelBilgi extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      bilgiler: {
        marka: '',
        sonKullanmaTarihi: '',
        barkodNo: ''
      }
    };

    this.database = Firebase.database();
  }

  /*------------------------------------------------------------------*/

  setBilgilerMarka = (e) => {
    this.setState({
      bilgiler: {
        marka: e.target.value,
        sonKullanmaTarihi: this.state.bilgiler.sonKullanmaTarihi,
        barkodNo: this.state.bilgiler.barkodNo
      }
    });
  }
  
  setBilgilerSKT = (e) => {
    this.setState({
      bilgiler: {
        marka: this.state.bilgiler.marka,
        sonKullanmaTarihi: e.target.value,
        barkodNo: this.state.bilgiler.barkodNo
      }
    });
  }
  
  setBilgilerBarkodNo = (e) => {
    this.setState({
      bilgiler: {
        marka: this.state.bilgiler.marka,
        sonKullanmaTarihi: this.state.bilgiler.sonKullanmaTarihi,
        barkodNo: e.target.value
      }
    });
  }

  /*------------------------------------------------------------------*/

  saveToDB = () => {
    try {
      const refGenelBilgi = this.database.ref('genelBilgi').child('genelBilgiler');
      refGenelBilgi.push(this.state.bilgiler);

      alert('Kayıt Başarılı !');
      
    } catch (error) {
      console.error('HATA: ' + error);
    }
  }

  /*------------------------------------------------------------------*/

  render() {
    return (
      <div className="genelBilgi">
        <header className="genelBilgi-header">
          <h2>Genel Bilgilendirme</h2>
        </header>
        <hr/>
        <div style={{marginLeft: '10px'}} className='bilgiler'>
          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Marka ?</p>
            <input onChange={this.setBilgilerMarka} style={{marginLeft: '24px'}} type='text'></input>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Son Kullanma Tarihi ?</p>
            <input onChange={this.setBilgilerSKT} style={{marginLeft: '24px'}} type='text'></input>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Barkod No ?</p>
            <input onChange={this.setBilgilerBarkodNo} style={{marginLeft: '24px'}} type='text'></input>
          </div>
          <hr/>
          <button style={{margin: '10px'}} onClick={this.saveToDB}>KAYDET</button>
        </div>
      </div>
    );
  }
}