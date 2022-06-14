import * as React from "react";

import "./User.styles.css";

export const User = (): React.ReactElement => {
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
      <div className="center">
        {" "}
        <img
          src="http://aamae.org.br/wp-content/uploads/2020/01/ong-voluntari.jpg"
          alt=""
        />
      </div>
      <body>
        <div className="row">
          <div className="card green">
            <h2>Editar perfil</h2>
            <p>Edite sua conta</p>
            <button className="btn">Editar</button>
          </div>

          <div className="card blue">
            <h2>Atividade</h2>
            <p>Veja suas atividades</p>
            <button className="btn">Verificar</button>
          </div>
        </div>
      </body>
    </>
  );
};
