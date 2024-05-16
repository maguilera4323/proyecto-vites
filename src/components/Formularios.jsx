import React, {useState} from "react";

//Usando variables independientes para cada input
/*export default function Formularios(){
    const [nombre, setNombre] = useState('');
    const [sabor, setSabor] = useState('');
    const [lenguaje, setLenguaje] = useState('');
    const [terminos, setTerminos] = useState('');

    const handleSubmit = e =>{
        e.preventDefault()
        alert('Formulario enviado')
    }

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input id="nombre" type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                <p>Elige tu sabor JS favorito:</p>
                <label htmlFor="vainilla">Vainilla</label>
                <input type="radio" name="sabor" id="vainilla" value="vainilla" onChange={(e)=>setSabor(e.target.value)} defaultChecked/>
                <label htmlFor="angular">Angular</label>
                <input type="radio" name="sabor" id="angular" value="angular" onChange={(e)=>setSabor(e.target.value)}/>
                <label htmlFor="react">React</label>
                <input type="radio" name="sabor" id="react" value="react" onChange={(e)=>setSabor(e.target.value)}/>
                <label htmlFor="vue">Vue</label>
                <input type="radio" name="sabor" id="vue" value="vue" onChange={(e)=>setSabor(e.target.value)}/>

                <p>Elige tu sabor JS favorito:</p>
                <select name="lenguaje" id="" defaultValue="" onChange={(e)=>setLenguaje(e.target.value)}>
                    <option value="">Selecciona una opción</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="go">GO</option>
                    <option value="py">Python</option>
                    <option value="rb">Ruby</option>
                </select>
                <br />
                <label htmlFor="terminos">Acepto los términos y condiciones</label>
                <input type="checkbox" name="terminos" id="terminos" onChange={(e)=>setTerminos(e.target.checked)}/>
                <br />               
                <input type="submit" value="Guardar Formulario" />
            </form>
        </>

    )
}*/

//usando solo una variable de estado para todo el formulario
export default function Formularios(){
    const [form, setForm] = useState({});

    const handleChecked = e =>{
        setForm({
            ...form,
            [e.target.name]:e.target.checked
        });
    };

    const handleChange = e =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit = e =>{
        e.preventDefault()
        alert('Formulario enviado')
    }

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input id="nombre" type="text" value={form.nombre} onChange={handleChange}/>
                <p>Elige tu sabor JS favorito:</p>
                <label htmlFor="vainilla">Vainilla</label>
                <input type="radio" name="sabor" id="vainilla" value="vainilla" onChange={handleChange} defaultChecked/>
                <label htmlFor="angular">Angular</label>
                <input type="radio" name="sabor" id="angular" value="angular" onChange={handleChange}/>
                <label htmlFor="react">React</label>
                <input type="radio" name="sabor" id="react" value="react" onChange={handleChange}/>
                <label htmlFor="vue">Vue</label>
                <input type="radio" name="sabor" id="vue" value="vue" onChange={handleChange}/>

                <p>Elige tu sabor JS favorito:</p>
                <select name="lenguaje" id="" defaultValue="" onChange={handleChange}>
                    <option value="">Selecciona una opción</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="go">GO</option>
                    <option value="py">Python</option>
                    <option value="rb">Ruby</option>
                </select>
                <br />
                <label htmlFor="terminos">Acepto los términos y condiciones</label>
                <input type="checkbox" name="terminos" id="terminos" onChange={handleChecked}/>
                <br />               
                <input type="submit" value="Guardar Formulario" />
            </form>
        </>

    )
}