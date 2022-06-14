import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { UserAPI } from "../../../api";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

import "./RegisterUser.styles.css";
import { CircularProgress } from "@mui/material";

export const RegisterUser = (): React.ReactElement => {
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const userApi = new UserAPI();

  const registerUser = async (form: any) => {
    try {
      setLoading(true);

      const data = await userApi.registerUser(form);

      setLoading(false);
    } catch (error) {
      console.log(error);
      window.alert("Erro ao realizar login");
    }
  };

  return (
    <>
      <Container className="cont" component="main" maxWidth="xs">
        Criar novo usuário
        <Box
          component="form"
          sx={{ mt: 1 }}
          onSubmit={handleSubmit(registerUser)}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            autoComplete="name"
            autoFocus
            {...register("name")}
          />
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
          {loading ? (
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
            <Button onClick={() => navigate("/")}>
              {"Have an account? Sign in"}
            </Button>
          </Grid>
        </Grid>
      </Container>
      )
    </>
  );
};
