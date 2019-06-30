import React from 'react';
import './App.css';
import './toolbox/colors.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Header
        title="Who's that Pokémon?"
      />
      <Main
        subtitle="Search the first Pokémon generation by Pokedex's Name"
      />
      <Footer/>
    </div>
  );
}

export default App;
