import React,{useState, useEffect} from "react";

function Pokemon({ avatar, name}) {
    return (
      <figure>
        <img src={avatar} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    );
  }

export default function AjaxHooks(){
    const [pokemons, setPokemons] = useState([])

    useEffect(()=>{
        //Usando Async -Await
        const getPokemons = async (url) =>{
            let res = await fetch(url),
            json = await res.json()

            json.results.forEach(async(elemento) => {
                let res = await fetch(elemento.url),
                json = await res.json()

                    let pokemon = {
                      id: json.id,
                      name: json.name,
                      avatar: json.sprites.front_default,
                    };
  
                    setPokemons((pokemons)=>[...pokemons, pokemon])
      
                  
              });

        }

        getPokemons("https://pokeapi.co/api/v2/pokemon")

        //Usando fetch
        /*let url = "https://pokeapi.co/api/v2/pokemon";
        fetch(url)
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            json.results.forEach((pokemon) => {
              fetch(pokemon.url)
                .then((res) => res.json())
                .then((json) => {
                  let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default,
                  };

                  setPokemons((pokemons)=>[...pokemons, pokemon])
    
                });
            });
          });*/
    },[])

    return (
        <div>
          <h2>Peticiones Asíncronas en Componentes de Clase</h2>
          {pokemons.length === 0 ?(
            <h3>Cargando...</h3>
          ):(
            pokemons.map((elemento) => (
                <Pokemon key={elemento.id} name={elemento.name} avatar={elemento.avatar} />
              ))
          )}
          
        </div>
      );
}