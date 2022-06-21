import { Link } from 'react-router-dom'
import React from 'react'
import whatsapp from "../images/whatsapp.png"
import linkedin from "../images/linkedIn.jpeg"
import github from "../images/github.png"

//import login from "../../assets/iniciar-sesion.png"
import "../styles/Footer.css"

export const Footer = () => {
  return (
    <footer>
          <div className="redes">
            <Link to='wa.link/zequw7'>
              <img src={whatsapp}/> 
            </Link>
            <Link to='https://www.linkedin.com/in/sebastian-cardozo-51027021b/'>
              <img src={linkedin}/> 
            </Link>
            <Link to='https://github.com/sebascardozo'>
              <img src={github}/> 
            </Link>

            
        </div>
        <p className="pFooter" >Copyright ©️ Sebastian Cardozo <br /> Proyecto final ReactJs</p>
    </footer>
  )
}