import React from 'react'
import style from "./TypesPokemonDetail.module.css"

const TypesPokemon =({ types }) => {
	return (
		<ul className={style.cardTypes}>
			{types?.map((type) => (
				<li key={type} className={style.type} value={type}>
					{type.charAt(0).toUpperCase() + type.slice(1)}
				</li>
			))}
		</ul>
	);
};

export default TypesPokemon