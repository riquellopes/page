import React, { Component } from "react"

const cursos = [
    {"nome": "React"},
    {"nome": "Redux"},
    {"nome": "NodeJS"},
    {"nome": "React Native"},
]
class Curso extends Component {

    render(){
        return (
            <h1>Você está olhando o curso de {cursos[this.props.params.id].nome}</h1>
        )
    }
}

export default Curso
