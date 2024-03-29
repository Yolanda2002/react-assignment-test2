import * as React from "react";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert'
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {signIn, signUp} from '../api/user-api'

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  // signType:0 signIn; 1 signUp;
  const [signType, setSignType] = React.useState(0);
  const [show, setShow] = React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const api = signType === 0 ? signIn : signUp;
    api({
      username: data.get('username'),
      password: data.get('password'),
    }).then(res => {
      if(signType === 0){
        sessionStorage.setItem('token',res.token);
        navigate("/");
      }
      setShow(signType === 0 ? 'Login Successful' : 'Registration Successful')
    }).catch(err => {
      setShow(signType === 0 ? 'Login Failure' : 'Registration Failure')
    })
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      {!!show && <Alert severity="success">{show}</Alert>}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {signType === 0 ? "Sign In" : "Sign Up"}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {signType === 0 ? "Sign In" : "Sign Up"}
            </Button>
            <Grid container>
              <Grid item>
                <Link variant="body2" onClick={() => setSignType(signType === 0 ? 1 : 0)}>
                  {signType === 0 ? "Don't have an account? Sign Up" : 'has an account? Sign In'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
