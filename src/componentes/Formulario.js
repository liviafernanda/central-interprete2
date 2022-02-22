import React, { Component } from 'react';
import Requerimento from './Requerimento';
//import FormPersonalDetails from './FormPersonalDetails';
import Confirmacao from './Confirmacao';
import Success from './Success';

export class Formulario extends Component {
  state = {
    step: 1,
    localAula: '',
    assuntoAula: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { localAula, assuntoAula, dataAula, horaInicial, horaFinal, interprete } = this.state;
    const values = { localAula, assuntoAula, dataAula, horaInicial, horaFinal, interprete };

    switch (step) {
      case 1:
        return (
          <Requerimento
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Confirmacao
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 3:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default Formulario;
