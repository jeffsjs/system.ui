import React from 'react';

import './404.css';
import notFountImg from '../imgs/404.png';

export default function NotFound () {
  return (
    <div className='not-found'>
      <img className='img-fluid' src={notFountImg} alt='Página não encontrada' />
      <h1>Ops!</h1>
      <p>
        Esta página não existe ou não pode ser encontrada.<br />
        Tente atualizar o navegador ou acesse novamente mais tarde!
      </p>
    </div>
  )
}
