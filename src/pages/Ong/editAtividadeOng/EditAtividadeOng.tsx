import * as React from "react";
import TextField from "@material-ui/core/TextField";

import "./EditAtividadeOng.styles.css";

export const EditAtividadeOng = (): React.ReactElement => {
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
        <div className="center"> <img
          src="https://i.pinimg.com/originals/de/88/2e/de882e3f23b4b26a679af07341bbadb1.jpg"
          alt=""
        /></div>

        <div className="row">
          <div className="card green">
            <h2>Editar Atividade</h2>
            <form className="form">
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
            <button className="btn">Editar</button>
          </div>
        </div>
      </body>
    </>
  );
};
