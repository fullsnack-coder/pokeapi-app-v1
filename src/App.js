import React from 'react';
import './App.css';
import './toolbox/colors.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      pokemon : {}
    }

  }

  getInfoPokemon =(pkmn) =>{
    
    this.setState({
      pokemon : pkmn
    })

  }

  render(){

    const {abilities, name, id, sprites, types} = this.state.pokemon;
    const infoPkmn = {
      pkid : id,
      pkname : name,
      pktypes : types,
      pksprites : sprites,
      pkabilities : abilities
    }

    return (
      <div className="App">
        <Header
          title="Who's that Pokémon?"
        />
        <Main setinfo={this.getInfoPokemon} info={infoPkmn}
          subtitle="Search the Pokémon info by Pokedex's Name"
        />
        <Footer/>
      </div>
    )
  }

}

export default App;
