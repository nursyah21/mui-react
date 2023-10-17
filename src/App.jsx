// import { useState } from 'react'
import { Button } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material"
import { Container } from "@mui/material"
import { CssBaseline } from "@mui/material"
import { Box, Avatar } from "@mui/material"
import { Typography } from "@mui/material"
import { TextField } from "@mui/material"
import { FormControlLabel } from "@mui/material"
import { Checkbox } from "@mui/material"
import { Grid } from "@mui/material"
import { Link } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'


const defaultTheme = createTheme()

function App() {

  return (
    <>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box 
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={()=>alert('test')} noValidate sx={{ mt: 1 }}>
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          </Box>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
          </Button>
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
        </Box>
      </Container>
    </ThemeProvider>
    </>
  )
}

export default App
