import * as React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "./createAtividadeOng.styles.css";

export const CreateAtividadeOng = (): React.ReactElement => {
  return (
    <>
      <ul>
        <li className="dropdown">
          <a href="javascript:void(0)" className="dropbtn">
            Conta
          </a>
        </li>
        <li className="dropdown">
          <a href="javascript:void(0)" className="dropbtn">
            Atividades
          </a>
        </li>
      </ul>
      <body>
        <div className="row">
          <div className="card green">
            <h2>Cadastrar Atividade</h2>
            <form className="form">
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
            <button className="btn">Cadastrar</button>
          </div>
        </div>
      </body>
    </>
  );
};
