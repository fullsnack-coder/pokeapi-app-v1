import React, {Component} from 'react';
import Button from './../Button/Button';
import './Form.css';

class Form extends Component{

    pokemonRef = React.createRef();


    handler(e){
        e.preventDefault();
        window.fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then( response =>{
                return response.json()
            })
            .then( response =>{
                console.log(response)
            })
    }


    render(){
        return(
            <form className='Form' onSubmit={this.handler.bind(this)}>
                <input
                    className='Form__input'
                    placeholder='Enter the Pokemon name...'
                    ref={this.pokemonRef}
                    />
                <div className='Form__button-container'>
                   <Button
                       btntext='Search'
                   />
                </div>
            </form>
        )
    }
}

export default Form;