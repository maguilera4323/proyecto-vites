import React, {useState} from 'react'

export default function ContadorHooks(props){
    const [contador, setContador] = useState(0)

    const sumar=(e)=> setContador(contador+1)

    const restar=(e)=>setContador(contador-1)

    return(
        <>
            <h2>Hooks - useState</h2>
            <p>Contador de {props.titulo}</p>
            <nav>
                <h3>{contador}</h3>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
        </>
    )
}

ContadorHooks.defaultProps={
    titulo:"Clicks"
}