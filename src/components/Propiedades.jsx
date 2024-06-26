import React from "react";

export default function Propiedades(props){
    return(
        <div>
            <h2>Hola we </h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.bool ? "Verdadero" : "Falso"}</li>
                <li>{props.arreglo.join(', ')}</li>
                <li>{`${props.objeto.nombre} - ${props.objeto.correo}`}</li>
                <li>{props.arreglo.map(props.funcion).join(', ')}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    )
}

Propiedades.defaultProps={
    textoDefecto:"Esta es una propiedad",
};