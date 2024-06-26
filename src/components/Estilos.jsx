import React from "react";
import './Estilos.css';
import './Estilos.scss';
import moduleStyles from './Estilos.module.css';

export default function Estilos(){
    let myStyles={
        borderRadius:'.5rem',
        margin:'2rem auto',
        maxWidth:'50%'
    };

    return(
        <section className="estilos">
            <h2>Estilos CSS en React</h2>
            <h3 className="bg-react" style={{borderRadius:'0.25rem',margin:'1rem'}}>Estilos en hoja CSS externa</h3>
            <h3 className="bg-react" style={myStyles}>Estilozzz</h3>
            <h3 className="bg-react">Agregando Normalize con 
            <br />
            <code>@import-normalize;</code>
            </h3>
            <h3 className={moduleStyles.error}>Estilos con Módulos</h3>
            <h3 className={moduleStyles.success}>Estilos con Módulos</h3>
            <h3 className="bg-sass">Estilos con Sass</h3>
        </section>
    )
}