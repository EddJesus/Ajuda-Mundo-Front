import * as React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './createAtividadeOng.styles.css'







export const CreateAtividadeOng = (): ReactElement => {
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
            <h2>Cadastrar Atividade</h2>
            <form class="form">
              <label>Nome da Atividade</label>
              <TextField
                margin="normal"
                required
                fullWidth
                name="atividade"
                label="Atividade"
                type="text"
                id="Atividade"
                autoComplete="current-password"
              />
              <br></br>
              <label>Objetivo da Atividade</label>
              <TextField
                margin="normal"
                required
                fullWidth
                name="atividade"
                label="Objetivo"
                type="text"
                id="Atividade"
                autoComplete="current-password"
              />
              <br></br>
              <label>Pontuação da Atividade</label>
              <TextField
                margin="normal"
                required
                fullWidth
                name="atividade"
                label="Pontuação"
                type="text"
                id="Atividade"
                autoComplete="current-password"
              />
              <br></br>
            </form>
            <button class="btn" >Cadastrar</button>
          </div>
        </div>
      </body>
    </>
  )
}