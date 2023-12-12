import React, { useContext } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"
import { userTracker } from '../context/userTracker'

const Login = () => {
    
    //user tracker
    const {currentUser,login} = useContext(userTracker)
    console.log(currentUser)

    //useState for the inputs for register page
    const [inputs,setInputs] = useState({
        username:"",
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

    const handleSubmit = async e => {
        e.preventDefault()
        console.log("click")
        //api call
        try{
            //when call goes through
            await login(inputs)
            navigate("/")
        }catch(err)
        {
            //when theres an error
            console.log(err)
        }
        }
        


    return(
        <div className='auth'>
            <h1>Login</h1>
            <form>
                <input type = "text" placeholder='username' name='username' onChange={handleChange}/>
                <input type = "password" placeholder='password' name='password' onChange={handleChange}/>
                <button onClick={handleSubmit}>Login</button>
                <span>Don't have an account? <Link to="/register">Register</Link>
                </span>
            </form>
        </div>
    )
}

export default Login