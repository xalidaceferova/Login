import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
const Login = () => {
  const history=useNavigate()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    async function submit(e){
        e.preventDefault()

        try{
            await axios.post("http://localhost:8080/",{
              email,password
            })
            .then(res=>{
              if(res.data=="exist"){
                history("/home",{state:{id:email}})
              }
              else if(res.data=="notexist"){
                alert("User have not sign up")
              }
            })
            .catch(e=>{
              alert("wrong detail")
              console.log(e)
            })
        }
        catch(e){
            console.log(e)
        }
    }
  return (
    <div>

    <h1>Login</h1>
      <form action="POST">
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
         <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
         
         <input type="submit" onClick={submit} />
      </form>
          <br />
          <p>Or</p>
          <br />
          <Link to="/signup">Sign up</Link>
    </div>
  )
}

export default Login