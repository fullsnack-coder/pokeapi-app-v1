import React, {Component} from 'react';
import './Pokemon.css';

export default class Pokemon extends Component{
    render(){
        return(
            <div className='Pokemon'>
                <figure className='Pokemon__img'>
                    <img src='' alt=''/>
                </figure>
                <div className='Pokemon__description'>
                    <ul className='Pokemon__atributtes'>
                        <li className='Pokemon__atributte'>Id = </li>
                        <li className='Pokemon__atributte'>Name = </li>
                        <li className='Pokemon__atributte'>Type = </li>
                        <li className='Pokemon__atributte'>Abilities = </li>
                    </ul>
                </div>
            </div>
        )
    }
}
