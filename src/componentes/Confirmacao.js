import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Typography, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { Done, Copyright } from '@material-ui/icons'

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
      values: { localAula, assuntoAula, dataAula, horaInicial, horaFinal, interprete }
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
              <div id="confirmacao">
                <Container maxWidth="sm" style={{ marginTop: '100px'}}>
                <List>
                    <ListItem>
                      <ListItemText primary="Local da aula" secondary={localAula} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Assunto da aula" secondary={assuntoAula} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Data da aula" secondary={dataAula} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Hora inicial" secondary={horaInicial} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Hora final" secondary={horaFinal} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Intérprete" secondary={interprete} />
                    </ListItem>
                    
                  </List>
                  <br />

                  <div>
                    <Grid container spacing={2} justify="center">
                      <Grid item>
                        <Button
                          color="secondary"
                          variant="contained"
                          id="botaoVoltar"
                          onClick={this.back}
                        >Voltar</Button>
                      </Grid>
                      <Grid item>
                        <Button
                          color="primary"
                          id="botaoConfirmar"
                          variant="contained"
                          onClick={this.continue}
                        >Confirmar e Continuar</Button>
                      </Grid>
                    </Grid>
                  </div>

                </Container>
              </div>
            </main>

            <footer id="footer" style={{ bottom: '0', position: "absolute", width: "100%" }}>
            <AppBar position="relative" title="Enter User Details" >
              <Toolbar>
              <Copyright justify="center" />
                <p>2022 - Todos os direitos reservados.</p>
              </Toolbar>
            </AppBar>

            </footer>
            
         
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
