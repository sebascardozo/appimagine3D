import React, { useState } from 'react'

export const LogIn = () => {
const [user, setUser]=useState({
    name: '',
    email: '',
    password: ''
})

function register(e){
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
    localStorage.setItem("user", JSON.stringify(user))
    console.log(user)
}

console.log(user.name)
function logIn(){
    const userLog = localStorage.getItem("user")
    if(userLog.name === user.name && userLog.email === user.email && userLog.password === user.password){
        alert("Bienvenido " + userLog.name)
    }
    

}


  return (
    <>
    <div>
        <h2>Iniciar sesión</h2>
        <input type="text" name="name" placeholder='Nombre' />
        <input type="email" name="email" placeholder='Mail' />
        <input type="password" name="password" placeholder='Contraseña' />
        <div>
            <button onClick={logIn}>Iniciar sesión</button>
            <button onClick={register}>Registrarse</button>
        </div>
    </div>
    </>
  )
}