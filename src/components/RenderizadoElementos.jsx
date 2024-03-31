import React,{Component} from "react";
import data from './helpers/data.json'

function ListaElementos(props){
    return(
        <li>
            <a href={props.el.web}>{props.el.name}</a>
        </li>
    )
}

export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props)
        this.state={
            seasons:['Primavera','Verano','Otoño','Invierno'],
        };
    }

    render(){
        return(
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del año</h3>
                
                <h3>Frameworks Javascript</h3>
                <ul>
                {data.frameworks.map((el) => <ListaElementos key={el.id} el={el}/>)}
                </ul>
            </div>
        )
    }
}