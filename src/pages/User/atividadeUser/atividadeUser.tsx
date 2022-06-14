import * as React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

import "./atividadeUser.styles.css";

const rows = [{ name: "name", calories: 10, fat: 10, carbs: 10, protein: 10 }];

export const AtividadeUser = (): React.ReactElement => {
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
      <div style={{ width: "100%", textAlign: "center" }}>
        <h2>DashBoard Atividades</h2>
      </div>
      <div className="center"> <img
        src="https://i.pinimg.com/originals/de/88/2e/de882e3f23b4b26a679af07341bbadb1.jpg"
        alt=""
      /></div>
      <div className="container">
        <div>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell>Últimas Atividades</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <br></br>
      </div>
    </>
  );
};
