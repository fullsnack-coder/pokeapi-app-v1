import React from 'react';
import './Main.css';
import Form from './../Form/Form';
import Pokemon from './../Pokemon/Pokemon';

export default class Main extends React.Component{

    render(){
        return(
            <main className='Main'>
                <h3 className='Main__subtitle'>{this.props.subtitle}</h3>
                <Form
                    setinfo={this.props.setinfo}
                />
                <Pokemon info={this.props.info}/>
            </main>
        )
    }
}