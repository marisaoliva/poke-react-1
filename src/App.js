import React, { Component } from 'react';
import './App.css';

const mock = [
    {name: 'Bulbasur', url: 'bulbasur.com'},
    {name: 'Charmander', url: 'charmander.com'},
    {name: 'Squirtle', url: 'squirtle.com'}
];

class App extends Component {

    constructor(props){
        super(props);
        this.state = { pokemonSelected: mock[0] };
        this.selectPokemon = this.selectPokemon.bind(this);
    }

    selectPokemon(name){
        this.setState({ pokemonSelected: mock.find(p => p.name === name) });
    }
    render (){
        return (
            <div className='app'>
                <section className='pokemon-list'>
                    <h2>Pokemon list</h2>
                    <ul className='pokemon-list__list'>
                    {mock.map(pokemon => (
                        <li key={pokemon.name}>
                            <button className='pokemon-list-item' onClick={() => this.selectPokemon(pokemon.name)}>{pokemon.name}</button>
                        </li>
                    ))
                    }
                    </ul>
                </section>
                <section>
                    <h2>Detalle de un pokemon</h2>
                    <h3>{this.state.pokemonSelected.name}</h3>
                </section>
            </div>
        )
    }

}

export default App;
