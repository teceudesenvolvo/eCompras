import React, { Component } from 'react';

//Imagens

// Icones

// Components
import TopBar from '../../componets/topBarSearch'
import PubliList from '../../componets/publiList';

//mudança de páginas

class Exames extends Component {
  render() {
    return (

      <div className='App-header' >
        <div className='header-home'>
          <TopBar />
        </div>
        <div className='favoritos agendarConsulta'>
        <h1>Publicações</h1>
          <PubliList/> 
        </div>
      </div>
    );
  }
}

export default Exames;