import React, {createRef, useRef} from "react";

export default function Referencias(){
    let refMenu = useRef(),
    refBtnMenu = useRef();

    const handleToggleMenu = (e) =>{
        if(refBtnMenu.current.textContent==='Menú'){
            refBtnMenu.current.textContent = 'Cerrar';
        }else{
            refBtnMenu.current.textContent = 'Menú';
            refMenu.current.style.display='none';
        }

        /* const $menu = document.getElementById('menu')

        if(e.target.textContent==='Menú'){
            e.target.textContent = 'Cerrar';
            $menu.style.display='block';
        }else{
            e.target.textContent = 'Menú';
            $menu.style.display='none';
        } */
    }

    return(
        <>
            <h2>Referencias</h2>
            <button id="menu-btn" ref={refBtnMenu} onClick={handleToggleMenu}>Menú</button>
            <nav id="menu" ref={refMenu} style={{display:"none"}}>
                <a href="">Seccion 1</a>
                <br />
                <a href="">Seccion 2</a>
                <br />
                <a href="">Seccion 3</a>
                <br />
                <a href="">Seccion 4</a>
                <br />
                <a href="">Seccion 5</a>
            </nav>
        </>
    );
}