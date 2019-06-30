import React from 'react';
import './Footer.css';

export default class Footer extends React.Component{
    render(){
        return(
            <footer className='Footer'>
                <p className='Footer__text'>Whit React.js, Node.js, Typescript & PokeApi Technologies.</p>
                <span className='Footer__author'>ManuelDev - 2019</span>
            </footer>
        )
    }
}