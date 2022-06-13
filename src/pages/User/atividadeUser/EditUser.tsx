import * as React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "./EditUser.styles.css";

export const EditUser = (): React.ReactElement => {
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
            <h2>Editar perfil </h2>
            <form className="form">
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
            <button className="btn">Salvar</button>
          </div>
        </div>
      </body>
    </>
  );
};
