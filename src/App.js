import React from 'react';
import './App.css';

import { 
  Main,
  Urunler,
  UrunBilgi,
  Hammadde,
  UrunElde,
  Nakliyat,
  GenelBilgi 
} from './components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className='App-header'>
        <Link style={{margin: '10px'}} to='/'>Ana Sayfa</Link>
      </div>
      <div>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/urunler'>
            <Urunler />
          </Route>
          <Route path='/urun-bilgi'>
            <UrunBilgi />
          </Route>
          <Route path='/hammadde'>
            <Hammadde />
          </Route>
          <Route path='/urun-elde'>
            <UrunElde />
          </Route>
          <Route path='/nakliyat'>
            <Nakliyat />
          </Route>
          <Route path='/genel-bilgi'>
            <GenelBilgi />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}