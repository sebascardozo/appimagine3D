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

            {/* <a href="https://www.instagram.com/inepiazzalonga/"><img src="./img/whatsapp.png" alt="" class="icon"></a>
            <a href="https://github.com/inepiazzalonga"><img src="./img/github.png" alt="" class="icon"></a>
            <a href="https://www.linkedin.com/in/sebastian-cardozo-51027021b/"><img src="./img/linkedin.png" alt="" class="icon"></a> */}
            
        </div>
        <p className="pFooter" >Copyright ©️ Sebastian Cardozo <br /> Proyecto final ReactJs</p>
    </footer>
  )
}