import * as React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import {
  loginPending,
  loginFail,
  loginSuccess,
} from "../../../store/login/Login.store";

import { getUserProfile } from "../../../store/user/User.actions";

import { RootState } from "../../../store";

import { UserAPI } from "../../../api";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

import "./LoginUser.styles.css";
import { CircularProgress } from "@mui/material";

export const LoginUser = (): React.ReactElement => {
  const dispatch = useDispatch();

  const loginState = useSelector((state: RootState) => state.login);
  const userState = useSelector((state: RootState) => state.user);

  const { register, handleSubmit } = useForm();
  const userApi = new UserAPI();

  const login = async (form: any) => {
    try {
      dispatch(loginPending());
      const data = await userApi.login(form);

      const { token } = data;

      localStorage.setItem("access-token", `Bearer ${token}`);

      dispatch(loginSuccess());
      // @ts-ignore
      dispatch(getUserProfile());
      console.log(data);
      console.log(userState.user);
    } catch (error) {
      dispatch(loginFail("Erro ao realizar login"));
      console.log(error);
      window.alert("Erro ao realizar login");
    }
  };

  return (
    <>
      <Container className="cont" component="main" maxWidth="xs">
        Acesso Usuário
        <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit(login)}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            {...register("email")}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password")}
          />
          {loginState.isLoading ? (
            <div
              style={{ textAlign: "center", marginTop: 10, marginBottom: 10 }}
            >
              <CircularProgress />
            </div>
          ) : (
            <Button
              variant="contained"
              type="submit"
              style={{
                backgroundColor: "#1976d2",
                color: "white",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              Sign In
            </Button>
          )}
        </Box>
        <Grid container>
          <Grid item>
            <Button onClick={() => Navigate({ to: "/" })}>
              {"Don't have an account? Sign Up"}
            </Button>
          </Grid>
        </Grid>
      </Container>
      )
    </>
  );
};
