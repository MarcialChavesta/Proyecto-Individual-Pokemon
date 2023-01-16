import React from 'react'
import style from "./TypesPokemonDetail.module.css"

const TypesPokemon =({ types }) => {
	return (
		<div >
		<ul className={style.cardTypes}>
			{types?.map((type) => {
				if(typeof types[0]==="object"){
					return <li key={type.name} className={style.type} value={type.name} >
					{type.name.charAt(0).toUpperCase() + type.name.slice(1)}
				</li>
				} else{
			return <li key={type} className={style.type} value={type} >
			{type.charAt(0).toUpperCase() + type.slice(1)}
		</li>
				}			               
			})}
		</ul>
		</div>
	);
};

export default TypesPokemon

