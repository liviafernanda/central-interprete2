import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { Typography, Card, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { Done } from '@material-ui/icons'

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <CssBaseline />
            <AppBar title="Confirmação" >
              <Toolbar>
                <Done spacing={1} />
                <Typography variant="h5">
                  Confirmação
                </Typography>
              </Toolbar>
            </AppBar>

            <main>
              <div>
                <Container maxWidth="sm" style={{ marginTop: '100px'}}>
                <List>
                    <ListItem>
                      <ListItemText primary="First Name" secondary={firstName} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Last Name" secondary={lastName} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Email" secondary={email} />
                    </ListItem>
                    
                  </List>
                  <br />

                  <div>
                    <Grid container spacing={2} justify="center">
                      <Grid item>
                        <Button
                          color="secondary"
                          variant="contained"
                          id="voltar"
                          onClick={this.back}
                        >Voltar</Button>
                      </Grid>
                      <Grid item>
                        <Button
                          color="primary"
                          id="finalizar"
                          variant="contained"
                          onClick={this.continue}
                        >Confirmar & Continuar</Button>
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

export default Confirm;
