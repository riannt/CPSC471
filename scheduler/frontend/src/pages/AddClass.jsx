import React,{useContext} from 'react'
import { userTracker } from '../context/userTracker'
import { useState } from 'react'
import axios from "axios"
import {Link,useNavigate} from 'react-router-dom'

const AddClass = () => {

    //user tracker
    const {currentUser,setCurrentUser} = useContext(userTracker)

    //useState for the inputs for register page
    const [inputs,setInputs] = useState({
        className:"",
        inName:"",
        location:"",
        desc:"",
        userid: JSON.stringify(currentUser.userid)
    })

    //function to handle change in input
    const handleChange = e => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    console.log(inputs)

    const handleAdd = async e => {
        e.preventDefault()
        try{
            const res = await axios.post("http://localhost:8800/add/add-class",inputs)
            console.log(res)
        }catch(err){
            console.log(err)
        }

    }

    
    return(
        <div className='addClass'>
             <h1>
                Add Class
            </h1>
            <div className='inputs'>
                <h3>
                    Class Name
                </h3>
                <input type = "text" placeholder='class name' name='className' onChange={handleChange}/>
                <h3>
                    Instructor
                </h3>
                <input type = "text" placeholder='instructor name' name='inName' onChange={handleChange}/>
                <h3>
                    Location
                </h3>
                <input type = "text" placeholder='location' name='location'onChange={handleChange}/>
                <h3>
                    Description
                </h3>
                <input type = "text" placeholder='desc' name='desc' onChange={handleChange}/>
            </div>
            <button onClick={handleAdd}>
                    add
            </button>
        </div>
    )
}

export default AddClass