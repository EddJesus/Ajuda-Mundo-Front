import * as React from "react";

import "./Ong.styles.css";

export const Ong = (): React.ReactElement => {
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
            <h2>Editar perfil</h2>
            <p>Edite sua conta</p>
            <button className="btn">Editar</button>
          </div>

          <div className="card blue">
            <h2>Atividade</h2>
            <p>Veja suas aividade</p>
            <button className="btn">Verificar</button>
          </div>
        </div>
      </body>
    </>
  );
};
