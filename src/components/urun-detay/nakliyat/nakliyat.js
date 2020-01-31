import React from 'react';
import './nakliyat.css';

import Firebase from '../../../config/config'

export default class Nakliyat extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nerden: {
        nakliyatFirmaAd: '',
        yuklenmeYeri: '',
        yuklenmeTarihi: '',
        nakliyatTipi: '',
        nakilEdenKisi: ''
      },
      nereye: {
        ulasmaNoktasi: '',
        ulasmaTarihi: ''
      }
    };

    this.database = Firebase.database();
  }

  /*------------------------------------------------------------------*/

  setNerdenNakliyatFirmaAd = (e) => {
    this.setState({
      nerden: {
        nakliyatFirmaAd: e.target.value,
        yuklenmeYeri: this.state.nerden.yuklenmeYeri,
        yuklenmeTarihi: this.state.nerden.yuklenmeTarihi,
        nakliyatTipi: this.state.nerden.nakliyatTipi,
        nakilEdenKisi: this.state.nerden.nakilEdenKisi
      }
    });
  }

  setNerdenYuklenmeYeri = (e) => {
    this.setState({
      nerden: {
        nakliyatFirmaAd: this.state.nerden.nakliyatFirmaAd,
        yuklenmeYeri: e.target.value,
        yuklenmeTarihi: this.state.nerden.yuklenmeTarihi,
        nakliyatTipi: this.state.nerden.nakliyatTipi,
        nakilEdenKisi: this.state.nerden.nakilEdenKisi
      }
    });
  }

  setNerdenYuklenmeTarihi= (e) => {
    this.setState({
      nerden: {
        nakliyatFirmaAd: this.state.nerden.nakliyatFirmaAd,
        yuklenmeYeri: this.state.nerden.yuklenmeYeri,
        yuklenmeTarihi: e.target.value,
        nakliyatTipi: this.state.nerden.nakliyatTipi,
        nakilEdenKisi: this.state.nerden.nakilEdenKisi
      }
    });
  }

  setNerdenNakliyatTipi = (e) => {
    this.setState({
      nerden: {
        nakliyatFirmaAd: this.state.nerden.nakliyatFirmaAd,
        yuklenmeYeri: this.state.nerden.yuklenmeYeri,
        yuklenmeTarihi: this.state.nerden.yuklenmeTarihi,
        nakliyatTipi: e.target.value,
        nakilEdenKisi: this.state.nerden.nakilEdenKisi
      }
    });
  }
  
  setNerdenNakilEdenKisi = (e) => {
    this.setState({
      nerden: {
        nakliyatFirmaAd: this.state.nerden.nakliyatFirmaAd,
        yuklenmeYeri: this.state.nerden.yuklenmeYeri,
        yuklenmeTarihi: this.state.nerden.yuklenmeTarihi,
        nakliyatTipi: this.state.nerden.nakliyatTipi,
        nakilEdenKisi: e.target.value
      }
    });
  }

  /*------------------------------------------------------------------*/

  setNereyeUlasmaNoktasi = (e) => {
    this.setState({
      nereye: {
        ulasmaNoktasi: e.target.value,
        ulasmaTarihi: this.state.nereye.ulasmaTarihi
      }
    });
  }
  
  setNereyeUlasmaTarihi = (e) => {
    this.setState({
      nereye: {
        ulasmaNoktasi: this.state.nereye.ulasmaNoktasi,
        ulasmaTarihi: e.target.value
      }
    });
  }

  /*------------------------------------------------------------------*/

  saveToDB = () => {
    try {
      const refNerden = this.database.ref('nakliyat').child('nerden');
      const refNereye = this.database.ref('nakliyat').child('nereye');
  
      refNerden.push(this.state.nerden);
      refNereye.push(this.state.nereye);

      alert('Kayıt Başarılı !');
      
    } catch (error) {
      console.error('HATA: ' + error);
    }
  }

  /*------------------------------------------------------------------*/

  render() {
    return (
      <div className="nakliyat">
        <header className="nakliyat-header">
          <h2>Nakliyat Bilgileri</h2>
        </header>
        <hr/>
        <div style={{marginLeft: '10px'}} className='nerden'>
          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Hangi nakliyat kullanıldı ?</p>
            <input onChange={this.setNerdenNakliyatFirmaAd} style={{marginLeft: '24px'}} type='text'></input>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Nereden yüklendi ?</p>
            <input onChange={this.setNerdenYuklenmeYeri} style={{marginLeft: '24px'}} type='text'></input>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Ne zaman yüklendi ?</p>
            <input onChange={this.setNerdenYuklenmeTarihi} style={{marginLeft: '24px'}} type='text'></input>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Nasıl bir nakil türü uygulandı ?</p>
            <input onChange={this.setNerdenNakliyatTipi} style={{marginLeft: '24px'}} type='text'></input>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Nakliyat kim tarafından gerçekleştirildi ?</p>
            <input onChange={this.setNerdenNakilEdenKisi} style={{marginLeft: '24px'}} type='text'></input>
          </div>
        </div>
        <hr/>

{/* ------------------------------------------------------------------------------------- */}

        <div style={{marginLeft: '10px'}} className='nereye'>
          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Son kullanıcıya ulaşma noktası neresidir ?</p>
            <input onChange={this.setNereyeUlasmaNoktasi} style={{marginLeft: '24px'}} type='text'></input>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Son kullanıcıya ulaşma ne zaman gerçekleşti ?</p>
            <input onChange={this.setNereyeUlasmaTarihi} style={{marginLeft: '24px'}} type='text'></input>
          </div>
          <hr/>
          <button style={{margin: '10px'}} onClick={this.saveToDB}>KAYDET</button>
        </div>
      </div>
    );
  }
}