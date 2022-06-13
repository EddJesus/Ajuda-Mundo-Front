import * as React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import './User.styles.css'







export const User = (): ReactElement => {
  return (
    <>
      <ul>
        <li class="dropdown">
          <a href="javascript:void(0)" class="dropbtn">Conta</a>
        </li>
        <li class="dropdown">
          <a href="javascript:void(0)" class="dropbtn">Atividades</a>
        </li>
      </ul>
      <body>
        <div class="row">
          <div class="card green">
            <h2>Editar perfil</h2>
            <p>Edite sua conta</p>
            <button class="btn" >Editar</button>
          </div>

          <div class="card blue">
            <h2>Atividade</h2>
            <p>Veja suas aividade</p>
            <button class="btn">Verificar</button>
          </div>
        </div>
      </body>
    </>
  )
}