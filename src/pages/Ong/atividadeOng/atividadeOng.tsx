import * as React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './atividadeOng.styles.css'

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Economia para crianças 2022'),

];





export const AtividadeOng = (): ReactElement => {
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
      <center><h2>DashBoard Atividades Cadastradas</h2></center>
      <div class="container">
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
  )
}