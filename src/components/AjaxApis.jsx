import React, { Component } from "react";

function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}

export default class AjaxApis extends Component {
  state = {
    pokemones: [],
  };

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon";

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        json.results.forEach((pokemon) => {
          fetch(pokemon.url)
            .then((res) => res.json())
            .then((json) => {
              let datosPokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };

              let pokemones = [...this.state.pokemones, datosPokemon];
              this.setState({ pokemones });
            });
        });
      });
  }

  render() {
    return (
      <div>
        <h2>Peticiones Asíncronas en Componentes de Clase</h2>
        {this.state.pokemones.map((elemento) => (
          <Pokemon key={elemento.id} name={elemento.name} avatar={elemento.avatar} />
        ))}
      </div>
    );
  }
}
