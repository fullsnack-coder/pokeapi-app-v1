import React, {Component} from 'react';
import './types.css';
import './Pokemon.css';

export default class Pokemon extends Component{
    render(){

        const info = this.props.info;

        if(info.pkid == null){
            return ''
        }

        console.log(info)
        const type = info.pktypes[0].type.name;
        const abilities = info.pkabilities;
        
        return(
            <div className='Pokemon'>
                <figure className='Pokemon__img'>
                    <img src={info.pksprites.front_default} alt={info.pkname}/>
                </figure>
                <div className='Pokemon__description'>
                    <ul className='Pokemon__atributtes'>
                        <li className='Pokemon__atributte'>Id = {info.pkid}</li>
                        <li className='Pokemon__atributte'>Name = {info.pkname}</li>
                        <div className='Type__group'>
                            <li className='Pokemon__atributte'>Type = </li>
                            <div className={'Pokemon__type '+type}>
                                {type}
                            </div>
                        </div>
                        <div className='Ability-group'>
                            <li className='Pokemon__atributte'>Abilities = </li>
                            <li className='Pkmn__ability-group'>{
                                    Object.keys(abilities).map( key =>{
                                        return(
                                            <span className='Pokemon__ability' key={key}>{abilities[key].ability.name}</span>
                                        )
                                    })
                                }
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}
