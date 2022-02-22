import React, { Component } from 'react';
import { Typography, InputLabel, FormControl, NativeSelect, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { AttachFile } from '@material-ui/icons';
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import "../../node_modules/react-datepicker/dist/react-datepicker.css";
import video1 from "../assets/videos/9.mp4";
import video2 from "../assets/videos/10.mp4";
import video3 from "../assets/videos/11.mp4";

//usestate cannot be called in a class component


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

                <Player
                  playsInline
                  src={video1}
                  videoId="video1"
                />
                <Typography variant="body1">Coloque as informações sobre a aula</Typography>
                <TextField
                placeholder="Local da aula"
                label="Local da aula"
                id="local"
                onChange={handleChange('localAula')}
                defaultValue={values.localAula}
                margin="normal"
                fullWidth
              />
              <TextField
                placeholder="Assunto da aula"
                label="Assunto da aula"
                id="assunto"
                onChange={handleChange('assuntoAula')}
                defaultValue={values.assuntoAula}
                margin="normal"
                fullWidth
              />
              <br /><br />
              <Player 
                playsInline
                src={video2} videoId="video2"/>
              <Typography variant="body1">Coloque o dia e a hora da aula</Typography>
              <TextField
                placeholder="Digite a data"
                label="Data da aula"
                onChange={handleChange('dataAula')}
                defaultValue={values.dataAula}
                margin="normal"
                fullWidth
                
              />
              
              <Grid container spacing={2} justify="center">
                <Grid item xs={6}>
                <TextField
                placeholder="Digite a hora inicial"
                label="Hora Inicial"
                onChange={handleChange('horaInicial')}
                defaultValue={values.horaInicial}
                margin="normal"
                fullWidth
              />
                </Grid>
                <Grid item xs={6}>
                <TextField
                placeholder="Dgite a hora final"
                label="Hora final"
                onChange={handleChange('horaFinal')}
                defaultValue={values.horaFinal}
                margin="normal"
                fullWidth
              />
                </Grid>
              </Grid>
              <br /><br/>
              <Player 
                playsInline
                src={video3} videoId="video3"/>
              <Typography variant="body1">Escolha o intérprete para a aula</Typography>
              <br /> <br/>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Intérprete
                </InputLabel>
                <NativeSelect
                  onChange={handleChange('interprete')}
                  defaultValue={values.interprete}
                  inputProps={{
                    name: 'interprete',
                    id: 'uncontrolled-native',
                  }}
                >
                  <option value={1}>Selecione...</option>
                  <option value={"Maria da Silva"}>Maria da Silva</option>
                  <option value={"João Pedro"}>João Pedro</option>
                  <option value={"Daniela Alves"}>Daniela Alves</option>
                  
                </NativeSelect>
              </FormControl>
              <br />
              <br />

                <div style={{ marginTop: '20px' }}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                    <Button
                      color="primary"
                      variant="contained"
                      id="confirmar"
                      onClick={this.continue}
                    >Salvar</Button>

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
