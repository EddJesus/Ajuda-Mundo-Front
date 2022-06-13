import * as React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './EditOng.styles.css'







export const EditOng = (): ReactElement => {
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
            <form class="form">
              <label>Nome</label>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <br></br>
              <label>E-mail</label>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <br></br>
              <label>Senha</label>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />



              <br></br>
            </form>
            <button class="btn" >Salvar</button>
          </div>
        </div>
      </body>
    </>
  )
}