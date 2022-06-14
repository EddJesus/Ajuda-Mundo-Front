import * as React from "react";

import "./Ong.styles.css";

export const Ong = (): React.ReactElement => {
  return (
    <>
      <ul className="ulheader">
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
            <h2>Editar perfil ONG</h2>
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
