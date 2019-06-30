import React, {Component} from 'react';
import './Pokemon.css';

export default class Pokemon extends Component{
    render(){

        const info = this.props.info;

        if(info.pkid == null){
            return ''
        }

        console.log(info)
        const type = info.pktypes[0].type.name;
        const abilities = info.pkabilities[0].ability.name;
        
        return(
            <div className='Pokemon'>
                <figure className='Pokemon__img'>
                    <img src={info.pksprites.front_default} alt={info.pkname}/>
                </figure>
                <div className='Pokemon__description'>
                    <ul className='Pokemon__atributtes'>
                        <li className='Pokemon__atributte'>Id = {info.pkid}</li>
                        <li className='Pokemon__atributte'>Name = {info.pkname}</li>
                        <li className='Pokemon__atributte'>Type = {type}</li>
                        <li className='Pokemon__atributte'>Abilities = {abilities}</li>
                    </ul>
                </div>
            </div>
        )
    }
}
