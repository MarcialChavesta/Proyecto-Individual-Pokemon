import React from 'react'
import style from "../About/About.module.css"
import contruction from "../../images/enConstruccion.jpg"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className={style.bgAbout}>
   
{/* 
            <h3>
            My name is Marcial Chavesta. This is my first project done for Henry, a project that I really enjoyed doing and which I will improve to be able to publish it.
            </h3>
            <h2>Tech Stack</h2>
            <h3>
              ReactJS - Redux - CSS puro - NodeJS - Express - Sequelize - PostegreSQL
            </h3> */}
            <Link to="/pokemons">
              <button alt="Regresar" title="Regresar" className={style.button}>VOLVER</button>
              
              </Link>
            <img src={contruction} className={style.aboutImg} alt="Regresar" title="Próximamente" />
            

  </div>
  )
}

export default About
