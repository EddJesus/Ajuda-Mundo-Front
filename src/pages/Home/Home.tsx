import * as React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

import "./Home.styles.css";

export const Home = (): React.ReactElement => {
  return (
    <>
      <div className="header">
        <img src="https://i.pinimg.com/originals/de/88/2e/de882e3f23b4b26a679af07341bbadb1.jpg"
          alt=""
        />
      </div>
      <Container className="cont" component="main" maxWidth="xs">
        Acesso Usuário
        {/* @ts-ignore */}
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
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
        </Box>
        <Button>Sign In</Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Container>


    </>
  );
};
