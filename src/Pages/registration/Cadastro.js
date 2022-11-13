import React from 'react';
import { useEffect } from 'react';
import './registration.css';
import imagem1 from '../../shared/images/logo-aurum.png';

function Cadastro() {
  useEffect(() => {
    document.title = "Cadastro"
 }, []);
  return (
    <>
      <header className='header-cadastro'>
          <img src={imagem1} className='logo-cadastro' alt="logo" />  
      </header> 
      <div className='main'>
        <div className='container-cadastro'></div>
      </div>
    </>
  );
}

export default Cadastro;