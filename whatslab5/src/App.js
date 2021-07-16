// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from "react"

// export default class App extends React.Component {
//   state = {
//     nome: "",
//     mensagem: "",
//     usuario:[]

//   };

//   changeNome = (event) => {
//   this.setState({
//     nome: event.target.value
//   });
//   };

//   changeMensagem = (event) => {
//   this.setState({
//     mensagem: event.target.value
//   });
//   };

//   adicionaMensagem = () =>{
//     const novasMensagens = [
//   ...this.state.usuario,
//   {
//     nome: this.state.nome,
//     mensagem: this.state.mensagem
//   }
//   ]

//   this.setState({
//   usuario: novasMensagens,
//   nome: "",
//   mensagem: ""
//   })
// }

//   render() {
//     const mostraMensagem = this.state.usuario.map((nome, index) => {
//       return (
//         <div key={index}>
//           <div>
//           <input 
//           value={this.state.nome}
//           onChange={this.changeNome}
//           placeholder="Nome"/>
                
//           <input
//           value={this.state.mensagem}
//           onChange={this.changeMensagem}
//           placeholder="Mensagem" />

//           <button onClick={this.novasMensagens}>Enviar</button>
//           </div>
//           {mostraMensagem}

//         </div>

//       )
//     })
//   }

// };
import React from "react";
import { TeacherItem } from "./App.styles";
import "./styles.css";

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

  addTeacher = () => {
    if (this.state.mensagem === "") {
      return alert("Idade precisa ser preenchida");
    }

    if (this.state.nome === "") {
      return alert("Nome precisa ser preenchido");
    }

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

  // removeTeacher = (nameToRemove) => {
  //   const newTeachers = [...this.state.teachers].filter(
  //     (teacher) => {
  //       return teacher.name !== nameToRemove
  //     }
  //   ) // prettier-ignore

  //   this.setState({
  //     teachers: newTeachers
  //   });
  // };

  render() {
    const listaDeEstudantes = this.state
      .usuario.map((elemento, index) => {
        return (
          <TeacherItem key={index}>
            <div><b>{elemento.nome}:</b></div>
            <div>{elemento.mensagem}</div>
          </TeacherItem>
        );
    }); // prettier-ignore

    // this.removeTeacher("Caio")

    return (
      <div className="App">
        {listaDeEstudantes}
        <hr />
        <div className="formulario">
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
          <button onClick={this.addTeacher}>Enviar</button>
        </div>
        
        
      </div>
    ); // prettier-ignore
  }
}