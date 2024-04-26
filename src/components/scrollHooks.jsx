import React,{useState, useEffect} from "react";

export default function ScrollHooks(){
    const[scrollY, setScrollY] = useState(0)

    useEffect(()=>{
        console.log('Moviendo Scroll')

        const detectarScroll =()=>setScrollY(window.scrollY)

        window.addEventListener('scroll',detectarScroll)

        return()=>{
            window.removeEventListener('scroll',detectarScroll)
            console.log('Fase de desmontaje')
        }
    },[scrollY])

    useEffect(()=>{
        console.log('Fase de montaje')
    },[])

    useEffect(()=>{
        console.log('Fase de actualizacion')
    })

    useEffect(()=>{
        return()=>{
            console.log('Fase de desmontaje')
        }
    })

    return(
        <>
            <h2>Scroll Y del Navegador: {scrollY}</h2>
        </>
    )
}