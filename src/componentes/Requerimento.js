import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Typography, Card, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { AttachFile } from '@material-ui/icons'


export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
      <>
        <CssBaseline />
         
            <AppBar position="relative" title="Enter User Details" >
              <Toolbar>
              <AttachFile />
                <Typography variant="h5"> Requerimento de Solicitação </Typography>
              </Toolbar>
            </AppBar>


            <main>
              <div>
                <Container maxWidth="sm" style={{ marginTop: '50px'}}>
                <TextField
                placeholder="Enter Your First Name"
                label="First Name"
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                placeholder="Enter Your Last Name"
                label="Last Name"
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                placeholder="Enter Your Email"
                label="Email"
                onChange={handleChange('email')}
                defaultValue={values.email}
                margin="normal"
                fullWidth
              />
              <br />

                <div style={{ marginTop: '20px' }}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                    <Button
                      color="primary"
                      variant="contained"
                      id="confirmar"
                      onClick={this.continue}
                    >Confirmar</Button>

                    </Grid>
                  </Grid>
                </div>
            
                </Container>
              </div>
            </main>
      </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
