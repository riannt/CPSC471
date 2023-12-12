import React from 'react'
import { useState } from 'react'
import axios from "axios"
import {Link,useNavigate} from 'react-router-dom'

const Register = () => {
    //useState for the inputs for register page
    const [inputs,setInputs] = useState({
        username:"",
        email:"",
        password:"",
    })

    //navigate fucntion
    const navigate = useNavigate()
    
    //function to handle change in input for register page
    const handleChange = e => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    //debugging purposes
    console.log(inputs)

    //function to handle register button when there are inputs
    const handleSubmit = async e => {
        e.preventDefault()
        
        //api call
        try{
            //when call goes through
            const res = await axios.post("http://localhost:8800/auth/register",inputs)
            console.log(res)
            navigate("/login")
        }catch(err)
        {
            //when theres an error
            console.log(err)
        }
        
    }

    //components for register page
    return(
        <div className='auth'>
            <h1>Register</h1>
            <form>
                <input required type = "text" placeholder='username' name='username' onChange={handleChange} />
                <input required type = "email" placeholder='email' name='email' onChange={handleChange}/>
                <input required type = "password" placeholder='password' name='password'onChange={handleChange}/>
                <button onClick={handleSubmit}>Register</button>
                <span>Already have an account? <Link to="/login">login</Link>
                </span>
            </form>
        </div>
    )
}

export default Register