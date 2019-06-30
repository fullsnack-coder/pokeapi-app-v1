import React, {Component} from 'react';
import './Header.css';
import Pikachu from './../../toolbox/pikachu.svg';

export default class Header extends Component{

    render(){
        return(
            <header className='Header'>
                <h1 className='Header__title'>{this.props.title.toUpperCase()}</h1>
                <img
                    className='logoPika'
                    alt='pikapika'
                    src={Pikachu}
                />
            </header>
        )
    }

}