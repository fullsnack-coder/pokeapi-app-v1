import React, {Component} from 'react';
import './Button.css';

export default class Button extends Component{

    render(){

        return(
            <button id='btnSend' className='btn-send'>
                {this.props.btntext}
            </button>
        )
    }
}