import * as React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './EditAtividadeOng.styles.css'







export const EditAtividadeOng = (): ReactElement => {
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
            <h2>Editar Atividade</h2>
            <form class="form">
              <label>Últimas Atividades</label>
              <TextField
                margin="normal"
                required
                fullWidth
                name="Atividades"
                label="Atividades"
                type="text"
                id="Atividades"
                autoComplete="current-password"
              />
              <br></br>
            </form>
            <button class="btn" >Editar</button>
          </div>
        </div>
      </body>
    </>
  )
}