import React, {Component} from "react";

export default class Padre extends Component{
    state={
        contador:0,
    }


    incrementarContador=(e)=>{
        this.setState({
            contador:this.state.contador+1
        })
        console.log(this.state.contador)
    }


    render(){
        return(
            <div>
                <h2>Comunicacion Entre Componentes</h2>
                <Hijo mensaje="Mensaje para el hijo 1"/>
                <Hijo incrementarContador={this.incrementarContador}
                mensaje="Mensaje para el hijo 2"/>
            </div>
        )
    }
}

function Hijo(props){
    return(
        <>
            <h2>{props.mensaje}</h2>
            <button onClick={props.incrementarContador}>+</button>
        </>
    )
}