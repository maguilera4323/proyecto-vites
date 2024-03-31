import React, {Component} from "react";

//Usando funcion de flecha
const Componente=(props)=><h2>{props.msg}</h2>;

/*
Usando clases
class Componente extends Component{
    render(){
        return <h2>Hola soy un componente</h2>
    }
}*/

//Usando funcion tradicional
/*function Componente(props){
    return <h2>{props.msg}</h2>
}*/

export default Componente;