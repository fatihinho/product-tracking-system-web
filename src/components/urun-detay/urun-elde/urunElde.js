import React from 'react';
import './urunElde.css';

import Firebase from '../../../config/config';

export default class UrunElde extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pisirme: {
        firinTipi: '',
        yontemi: '',
        derecesi: '',
        tarihi: '',
        sogutmaSuresi: ''
      },
      ambalajlama: {
        tipi: '',
        tarihi: ''
      },
      etiketlenme: {
        tarihi: ''
      }
    };

    this.database = Firebase.database();
  }

  /*------------------------------------------------------------------*/

  setPisirmeFirinTipi = (e) => {
    this.setState({
      pisirme: {
        firinTipi: e.target.value,
        yontemi: this.state.pisirme.yontemi,
        derecesi: this.state.pisirme.derecesi,
        tarihi: this.state.pisirme.tarihi,
        sogutmaSuresi: this.state.pisirme.sogutmaSuresi
      }
    });
  }
  
  setPisirmeYontemi = (e) => {
    this.setState({
      pisirme: {
        firinTipi: this.state.pisirme.firinTipi,
        yontemi: e.target.value,
        derecesi: this.state.pisirme.derecesi,
        tarihi: this.state.pisirme.tarihi,
        sogutmaSuresi: this.state.pisirme.sogutmaSuresi
      }
    });
  }

  setPisirmeDerecesi = (e) => {
    this.setState({
      pisirme: {
        firinTipi: this.state.pisirme.firinTipi,
        yontemi: this.state.pisirme.yontemi,
        derecesi: e.target.value,
        tarihi: this.state.pisirme.tarihi,
        sogutmaSuresi: this.state.pisirme.sogutmaSuresi
      }
    });
  }

  setPisirmeTarihi = (e) => {
    this.setState({
      pisirme: {
        firinTipi: this.state.pisirme.firinTipi,
        yontemi: this.state.pisirme.yontemi,
        derecesi: this.state.pisirme.derecesi,
        tarihi: e.target.value,
        sogutmaSuresi: this.state.pisirme.sogutmaSuresi
      }
    });
  }

  setPisirmeSogutmaSuresi = (e) => {
    this.setState({
      pisirme: {
        firinTipi: this.state.pisirme.firinTipi,
        yontemi: this.state.pisirme.yontemi,
        derecesi: this.state.pisirme.derecesi,
        tarihi: this.state.pisirme.tarihi,
        sogutmaSuresi: e.target.value
      }
    });
  }

  /*------------------------------------------------------------------*/

  setAmbalajlamaTipi = (e) => {
    this.setState({
      ambalajlama: {
        tipi: e.target.value,
        tarihi: this.state.ambalajlama.tarihi
      }
    });
  }
  
  setAmbalajlamaTarihi = (e) => {
    this.setState({
      ambalajlama: {
        tipi: this.state.ambalajlama.tipi,
        tarihi: e.target.value
      }
    });
  }

  /*------------------------------------------------------------------*/

  setEtiketlenmeTarihi = (e) => {
    this.setState({
      etiketlenme: {
        tarihi: e.target.value
      }
    });
  }

  /*------------------------------------------------------------------*/

  saveToDB = () => {
    try {
      const refPisirme = this.database.ref('urunElde').child('pisirme');
      const refAmbalajlama = this.database.ref('urunElde').child('ambalajlama');
      const refEtiketleme = this.database.ref('urunElde').child('etiketleme');
  
      refPisirme.push(this.state.pisirme);
      refAmbalajlama.push(this.state.ambalajlama);
      refEtiketleme.push(this.state.etiketlenme);

      alert('Kayıt Başarılı !');
      
    } catch (error) {
      console.error('HATA: ' + error);
    }
  }

  /*------------------------------------------------------------------*/

  render() {
    return (
      <div className="urunElde">
        <header className="urunElde-header">
          <h2>Ürün Elde Bilgileri</h2>
        </header>
        <hr/>
        <div style={{marginLeft: '10px'}} className='pisirme'>
          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Hangi tip fırında pişti ?</p>
            <input onChange={this.setPisirmeFirinTipi} style={{marginLeft: '24px'}} type='text'></input>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Hangi tip pişirme yöntemi kullanıldı ?</p>
            <input onChange={this.setPisirmeYontemi} style={{marginLeft: '24px'}} type='text'></input>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Kaç derecede pişti ?</p>
            <input onChange={this.setPisirmeDerecesi} style={{marginLeft: '24px'}} type='text'></input>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Ne zaman pişirildi ?</p>
            <input onChange={this.setPisirmeTarihi} style={{marginLeft: '24px'}} type='text'></input>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Kaç dakika soğutma işlemi gerçekleşti ?</p>
            <input onChange={this.setPisirmeSogutmaSuresi} style={{marginLeft: '24px'}} type='text'></input>
          </div>
        </div>
        <hr/>

{/* ------------------------------------------------------------------------------------- */}

        <div style={{marginLeft: '10px'}} className='ambalajlama'>
          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Hangi ambalajlama tipi kullanıldı ?</p>
            <input onChange={this.setAmbalajlamaTipi} style={{marginLeft: '24px'}} type='text'></input>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Ne zaman paketlendi ?</p>
            <input onChange={this.setAmbalajlamaTarihi} style={{marginLeft: '24px'}} type='text'></input>
          </div>
        </div>
        <hr/>

{/* ------------------------------------------------------------------------------------- */}

        <div style={{marginLeft: '10px'}} className='etiketlenme'>
          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
            <p>Ne zaman etiketlendi ?</p>
            <input onChange={this.setEtiketlenmeTarihi} style={{marginLeft: '24px'}} type='text'></input>
          </div>
          <hr/>
          <button style={{margin: '10px'}} onClick={this.saveToDB}>KAYDET</button>
        </div>
      </div>
    );
  }
}