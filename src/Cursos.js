import React, { Component } from "react"

class Cursos extends Component {

    render(){
        return (
            <div>
                <h1 className="title">Você está página de cursos.</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Cursos
