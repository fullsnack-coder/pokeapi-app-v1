import React, {Component} from 'react';
import Button from './../Button/Button';
import './Form.css';

class Form extends Component{

    pokemonRef = React.createRef();

    handler = (e) =>{

        const pokemon = this.pokemonRef.current.value.toLowerCase();

        e.preventDefault();
        window.fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then( response =>{
                if(response.status === 200) return response.json();
                else if(response.status === 404) return 'error';
            })
            .then( responseJSON =>{
                if(responseJSON === 'error') return null;
                else this.props.setinfo(responseJSON);
            })
    }


    render(){
        return(
            <form className='Form' onSubmit={this.handler}>
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