import * as React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

import "./atividadeOng.styles.css";

const rows = [{ name: "name", calories: 10, fat: 10, carbs: 10, protein: 10 }];

export const AtividadeOng = (): React.ReactElement => {
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
        <h2>DashBoard Atividades Cadastradas</h2>
      </div>
      <div className="container">
        <div>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell>Últimas atividades cadastradas</TableCell>
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
        <Button className="btn" variant="contained" color="primary">
          Editar Atividade
        </Button>
      </div>
    </>
  );
};
