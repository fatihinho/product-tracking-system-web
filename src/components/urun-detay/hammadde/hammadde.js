import React from 'react';
import './hammadde.css';

import Firebase from '../../../config/config';

export default class Hammadde extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      bugday: {
        hasatTarihi: '',
        fabrikayaGirisTarihi: '',
        fabrikadaKullanimTarihi: ''
      },
      seker: {
        uretimTarihi: '',
        fabrikayaGirisTarihi: '',
        fabrikadaKullanimTarihi: ''
      },
      yag: {
        hasatTarihi: '',
        fabrikadaUretimTarihi: ''
      },
      kabartmaTozu: {
        uretimTarihi: '',
        fabrikayaGirisTarihi: '',
        fabrikadaKullanimTarihi: ''
      },
      sut: {
        sagilmaTarihi: '',
        hazirlanmaTarihi: '',
        fabrikayaGirisTarihi: '',
        fabrikadaKullanimTarihi: ''
      },
      yumurta: {
        toplanmaTarihi: '',
        paketlenmeTarihi: '',
        fabrikayaGirisTarihi: '',
        fabrikadaKullanimTarihi: ''
      },
    };

    this.database = Firebase.database();
  }

  /*------------------------------------------------------------------*/

  setBugdayHasatTarihi = (e) => {
    this.setState({
      bugday: {
        hasatTarihi: e.target.value,
        fabrikayaGirisTarihi: this.state.bugday.fabrikayaGirisTarihi,
        fabrikadaKullanimTarihi: this.state.bugday.fabrikadaKullanimTarihi
      }
    });
  }

  setBugdayFabrikaGirisTarihi = (e) => {
    this.setState({
      bugday: {
        hasatTarihi: this.state.bugday.hasatTarihi,
        fabrikayaGirisTarihi: e.target.value,
        fabrikadaKullanimTarihi: this.state.bugday.fabrikadaKullanimTarihi
      }
    });
  }
  
  setBugdayFabrikadaKullanimTarihi = (e) => {
    this.setState({
      bugday: {
        hasatTarihi: this.state.bugday.hasatTarihi,
        fabrikayaGirisTarihi: this.state.bugday.fabrikayaGirisTarihi,
        fabrikadaKullanimTarihi: e.target.value
      }
    });
  }

  /*------------------------------------------------------------------*/
  
  setSekerUretimTarihi = (e) => {
    this.setState({
      seker: {
        uretimTarihi: e.target.value,
        fabrikayaGirisTarihi: this.state.seker.fabrikayaGirisTarihi,
        fabrikadaKullanimTarihi: this.state.seker.fabrikadaKullanimTarihi
      }
    });
  }
  
  setSekerFabrikayaGirisTarihi = (e) => {
    this.setState({
      seker: {
        uretimTarihi: this.state.seker.uretimTarihi,
        fabrikayaGirisTarihi: e.target.value,
        fabrikadaKullanimTarihi: this.state.seker.fabrikadaKullanimTarihi
      }
    });
  }
  
  setSekerFabrikadaKullanimTarihi = (e) => {
    this.setState({
      seker: {
        uretimTarihi: this.state.seker.uretimTarihi,
        fabrikayaGirisTarihi: this.state.seker.fabrikayaGirisTarihi,
        fabrikadaKullanimTarihi: e.target.value
      }
    });
  }

  /*------------------------------------------------------------------*/
  
  setYagHasatTarihi = (e) => {
    this.setState({
      yag: {
        hasatTarihi: e.target.value,
        fabrikadaUretimTarihi: this.state.yag.fabrikadaUretimTarihi
      }
    });
  }
  
  setYagFabrikadaUretimTarihi = (e) => {
    this.setState({
      yag: {
        hasatTarihi: this.state.yag.hasatTarihi,
        fabrikadaUretimTarihi: e.target.value
      }
    });
  }

  /*------------------------------------------------------------------*/
  
  setKabartmaTozuUretimTarihi = (e) => {
    this.setState({
      kabartmaTozu: {
        uretimTarihi: e.target.value,
        fabrikayaGirisTarihi: this.state.kabartmaTozu.fabrikayaGirisTarihi,
        fabrikadaKullanimTarihi: this.state.kabartmaTozu.fabrikadaKullanimTarihi
      }
    });
  }
  
  setKabartmaTozuFabrikayaGirisTarihi = (e) => {
    this.setState({
      kabartmaTozu: {
        uretimTarihi: this.state.kabartmaTozu.uretimTarihi,
        fabrikayaGirisTarihi: e.target.value,
        fabrikadaKullanimTarihi: this.state.kabartmaTozu.fabrikadaKullanimTarihi
      }
    });
  }
  
  setKabartmaTozuFabrikadaKullanimTarihi = (e) => {
    this.setState({
      kabartmaTozu: {
        uretimTarihi: this.state.kabartmaTozu.uretimTarihi,
        fabrikayaGirisTarihi: this.state.kabartmaTozu.fabrikayaGirisTarihi,
        fabrikadaKullanimTarihi: e.target.value
      }
    });
  }

  /*------------------------------------------------------------------*/

  setSutSagilmaTarihi = (e) => {
    this.setState({
      sut: {
        sagilmaTarihi: e.target.value,
        hazirlanmaTarihi: this.state.sut.hazirlanmaTarihi,
        fabrikayaGirisTarihi: this.state.sut.fabrikayaGirisTarihi,
        fabrikadaKullanimTarihi: this.state.sut.fabrikadaKullanimTarihi
      }
    });
  }

  setSutHazirlanmaTarihi = (e) => {
    this.setState({
      sut: {
        sagilmaTarihi: this.state.sut.sagilmaTarihi,
        hazirlanmaTarihi: e.target.value,
        fabrikayaGirisTarihi: this.state.sut.fabrikayaGirisTarihi,
        fabrikadaKullanimTarihi: this.state.sut.fabrikadaKullanimTarihi
      }
    });
  }

  setSutFabrikayaGirisTarihi = (e) => {
    this.setState({
      sut: {
        sagilmaTarihi: this.state.sut.sagilmaTarihi,
        hazirlanmaTarihi: this.state.sut.hazirlanmaTarihi,
        fabrikayaGirisTarihi: e.target.value,
        fabrikadaKullanimTarihi: this.state.sut.fabrikadaKullanimTarihi
      }
    });
  }
  
  setSutFabrikadaKullanimTarihi = (e) => {
    this.setState({
      sut: {
        sagilmaTarihi: this.state.sut.sagilmaTarihi,
        hazirlanmaTarihi: this.state.sut.hazirlanmaTarihi,
        fabrikayaGirisTarihi: this.state.sut.fabrikayaGirisTarihi,
        fabrikadaKullanimTarihi: e.target.value
      }
    });
  }

  /*------------------------------------------------------------------*/
  
  setYumurtaToplanmaTarihi = (e) => {
    this.setState({
      yumurta: {
        toplanmaTarihi: e.target.value,
        paketlenmeTarihi: this.state.yumurta.paketlenmeTarihi,
        fabrikayaGirisTarihi: this.state.yumurta.fabrikayaGirisTarihi,
        fabrikadaKullanimTarihi: this.state.yumurta.fabrikadaKullanimTarihi
      }
    });
  }

  setYumurtaPaketlenmeTarihi = (e) => {
    this.setState({
      yumurta: {
        toplanmaTarihi: this.state.yumurta.toplanmaTarihi,
        paketlenmeTarihi: e.target.value,
        fabrikayaGirisTarihi: this.state.yumurta.fabrikayaGirisTarihi,
        fabrikadaKullanimTarihi: this.state.yumurta.fabrikadaKullanimTarihi
      }
    });
  }

  setYumurtaFabrikayaGirisTarihi = (e) => {
    this.setState({
      yumurta: {
        toplanmaTarihi: this.state.yumurta.toplanmaTarihi,
        paketlenmeTarihi: this.state.yumurta.paketlenmeTarihi,
        fabrikayaGirisTarihi: e.target.value,
        fabrikadaKullanimTarihi: this.state.yumurta.fabrikadaKullanimTarihi
      }
    });
  }
  
  setYumurtaFabrikadaKullanimTarihi = (e) => {
    this.setState({
      yumurta: {
        toplanmaTarihi: this.state.yumurta.toplanmaTarihi,
        paketlenmeTarihi: this.state.yumurta.paketlenmeTarihi,
        fabrikayaGirisTarihi: this.state.yumurta.fabrikayaGirisTarihi,
        fabrikadaKullanimTarihi: e.target.value
      }
    });
  }

  /*------------------------------------------------------------------*/

  saveToDB = () => {
    try {
      const refBugday = this.database.ref('hammadde').child('bugday');
      const refSeker = this.database.ref('hammadde').child('seker');
      const refYag = this.database.ref('hammadde').child('yag');
      const refKabartmaTozu = this.database.ref('hammadde').child('kabartmaTozu');
      const refSut = this.database.ref('hammadde').child('sut');
      const refYumurta = this.database.ref('hammadde').child('yumurta');
  
      refBugday.push(this.state.bugday);
      refSeker.push(this.state.seker);
      refYag.push(this.state.yag);
      refKabartmaTozu.push(this.state.kabartmaTozu);
      refSut.push(this.state.sut);
      refYumurta.push(this.state.yumurta);
      
      alert('Kayıt Başarılı !');

    } catch (error) {
      console.error('HATA: ' + error);
    }
  }
  
  /*------------------------------------------------------------------*/

  render() {
    return (
      <div className="hammadde">
        <header className="hammadde-header">
          <h2>Hammadde Bilgileri</h2>
        </header>
        <hr/>
        <div style={{marginLeft: '10px'}} className='bugday'>
          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Buğday ne zaman hasat edildi ?</p> 
            <input onChange={this.setBugdayHasatTarihi} style={{marginLeft: '24px'}} type='text'></input>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Buğday fabrikaya ne zaman girdi ?</p> 
            <input onChange={this.setBugdayFabrikaGirisTarihi} style={{marginLeft: '24px'}} type='text'></input>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Buğday fabrikada ne zaman kullanıldı ?</p> 
            <input onChange={this.setBugdayFabrikadaKullanimTarihi} style={{marginLeft: '24px'}} type='text'></input>
          </div>
        </div>
        <hr/>

{/* ------------------------------------------------------------------------------------- */}

        <div style={{marginLeft: '10px'}} className='seker'>
          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Şeker ne zaman üretildi ?</p>
            <input onChange={this.setSekerUretimTarihi} style={{marginLeft: '24px'}} type='text'></input>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Şeker fabrikaya ne zaman girdi ?</p>
            <input onChange={this.setSekerFabrikayaGirisTarihi} style={{marginLeft: '24px'}} type='text'></input>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Şeker fabrikada ne zaman kullanıldı ?</p>
            <input onChange={this.setSekerFabrikadaKullanimTarihi} style={{marginLeft: '24px'}} type='text'></input>
          </div>
        </div>
        <hr/>

{/* ------------------------------------------------------------------------------------- */}

        <div style={{marginLeft: '10px'}} className='yag'>
          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Ayçiçeği ne zaman hasat edildi ?</p>
            <input onChange={this.setYagHasatTarihi} style={{marginLeft: '24px'}} type='text'></input>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Yağ fabrikada ne zaman üretildi ?</p>
            <input onChange={this.setYagFabrikadaUretimTarihi} style={{marginLeft: '24px'}} type='text'></input>
          </div>
        </div>
        <hr/>

{/* ------------------------------------------------------------------------------------- */}

        <div style={{marginLeft: '10px'}} className='kabartmaTozu'>
          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Kabartma Tozu ne zaman üretildi ?</p>
            <input onChange={this.setKabartmaTozuUretimTarihi} style={{marginLeft: '24px'}} type='text'></input>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Kabartma Tozu fabrikaya ne zaman girdi ?</p>
            <input onChange={this.setKabartmaTozuFabrikayaGirisTarihi} style={{marginLeft: '24px'}} type='text'></input>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Kabartma Tozu fabrikada ne zaman kullanıldı ?</p>
            <input onChange={this.setKabartmaTozuFabrikadaKullanimTarihi} style={{marginLeft: '24px'}} type='text'></input>
          </div>
        </div>
        <hr/>

{/* ------------------------------------------------------------------------------------- */}

        <div style={{marginLeft: '10px'}} className='sut'>
          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Süt ne zaman sağıldı ?</p>
            <input onChange={this.setSutSagilmaTarihi} style={{marginLeft: '24px'}} type='text'></input>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Süt ne zaman hazırlandı ?</p>
            <input onChange={this.setSutHazirlanmaTarihi} style={{marginLeft: '24px'}} type='text'></input>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Süt fabrikaya ne zaman girdi ?</p>
            <input onChange={this.setSutFabrikayaGirisTarihi} style={{marginLeft: '24px'}} type='text'></input>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Süt fabrikada ne zaman kullanıldı ?</p>
            <input onChange={this.setSutFabrikadaKullanimTarihi} style={{marginLeft: '24px'}} type='text'></input>
          </div>
        </div>
        <hr/>

{/* ------------------------------------------------------------------------------------- */}

        <div style={{marginLeft: '10px'}} className='yumurta'>
          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Yumurta ne zaman toplandı ?</p>
            <input onChange={this.setYumurtaToplanmaTarihi} style={{marginLeft: '24px'}} type='text'></input>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Yumurta ne zaman paketlendi ?</p>
            <input onChange={this.setYumurtaPaketlenmeTarihi} style={{marginLeft: '24px'}} type='text'></input>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Yumurta fabrikaya ne zaman girdi ?</p>
            <input onChange={this.setYumurtaFabrikayaGirisTarihi} style={{marginLeft: '24px'}} type='text'></input>
          </div>

          <div style={{display: 'flex', flexDirection: 'row'}}>
            <p>Yumurta fabrikada ne zaman kullanıldı ?</p>
            <input onChange={this.setYumurtaFabrikadaKullanimTarihi} style={{marginLeft: '24px'}} type='text'></input>
          </div>
          <hr/>
          <button style={{margin: '10px'}} onClick={this.saveToDB}>KAYDET</button>
        </div>
      </div>
    );
  }
}