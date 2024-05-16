import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente from './components/Componente'
import Propiedades from './components/Propiedades'
import Estado from './components/Estado'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/RenderizadoElementos'
import ComunicacionComponentes from './components/ComunicacionComponentes'
import CicloVida from './components/CicloVida'
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos'
import AjaxApis from './components/AjaxApis'
import ContadorHooks from './components/ContadorHooks'
import ScrollHooks from './components/scrollHooks'
import RelojHooks from './components/RelojHooks'
import AjaxHooks from './components/AjaxHooks'
import HooksPersonalizados from './components/HooksPersonalizados'
import Referencias from './components/Referencias'
import Formularios from './components/Formularios'
import Estilos from './components/Estilos'

function App() {
  const [count, setCount] = useState(0)
  let nombre = "Asa";
  let auth=false;
  let dias=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];

  return (

    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>{nombre}</h1>
      <p>{auth?"El usuario esta logueado":"ERROR: El usuario no esta logueado"}</p>

      <ul>
        {dias.map((dia, index) => (
          <li key={index}>{dia}</li>
        ))}
      </ul>

      <section>
        <Componente msg="Prueba de msg con arrow function"/>
        <hr />
        <Propiedades cadena="esto es texto" numero={20} bool={true}
         arreglo={[1,2,3]} objeto={{nombre:'Karim',correo:'karimhernandez233@gmail.com'}}
         funcion={(num)=>num*num}
         elementoReact={<i>Pueba de elemento</i>}
         componenteReact={<Componente msg="Que ondaaaa"/>}
        />
        <hr />
        <Estado></Estado>
        <hr />
         <RenderizadoCondicional/>
         <hr />
         <RenderizadoElementos/>

         <hr />
         <EventosES6/>
         <hr />
         <EventosES7/>
         <hr />
         <MasSobreEventos/>
         <hr />
         <ComunicacionComponentes/>
         <hr />
         <CicloVida/>
         <hr />
         <AjaxApis/>
         <hr />
         <ContadorHooks/>
         <hr />
         <ScrollHooks/>
         <hr />
         <RelojHooks/>
         <hr />
         <AjaxHooks />
         <hr />
         <HooksPersonalizados/>
         <hr />
         <Referencias/>
         <hr />
         <Formularios/>
         <hr />
         <Estilos />
      </section>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
