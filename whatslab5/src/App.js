import React from "react";
import { Formulario, MensagemItem, Container, CampoMensagem } from "./App.styles";
import './App.css';

export default class App extends React.Component {
  state = {
    nome: "",
    mensagem: "",
    usuario: []
  };

  changeNome = (event) => {
    this.setState({
      nome: event.target.value
    });
  };

  changeMensagem = (event) => {
    this.setState({
      mensagem: event.target.value
    });
  };

  addMensagem = () => {

    const novaMensagem = [
      ...this.state.usuario,
      {
        nome: this.state.nome,
        mensagem: this.state.mensagem
      }
    ];

    this.setState({
      usuario: novaMensagem,
      nome: "",
      mensagem: ""
    });
  };

  render() {
    const listaDeEstudantes = this.state
      .usuario.map((elemento, index) => {
        return (
          <MensagemItem key={index}>
            <div><b>{elemento.nome}:</b></div>
            <div>{elemento.mensagem}</div>
          </MensagemItem>
        );
    }); 

    return (
      
      <Container>
        <CampoMensagem>
        {listaDeEstudantes}
        </CampoMensagem>
        <hr />
        <Formulario>
          <input
            placeholder="Usuário"
            value={this.state.nome}
            onChange={this.changeNome}
          />

          <input
            placeholder="Mensagem"
            value={this.state.mensagem}
            onChange={this.changeMensagem}
          />
          <button onClick={this.addMensagem}>Enviar</button>
        </Formulario>
        
        
      </Container>
    ); 
  }
}