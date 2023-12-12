import React,{useContext} from 'react'
import { userTracker } from '../context/userTracker'
import { useState } from 'react'
import axios from "axios"
import {Link,useNavigate} from 'react-router-dom'

const AddAssesment = () => {

    //user tracker
    const {currentUser,setCurrentUser} = useContext(userTracker)

    //useState for the inputs for register page
    const [inputs,setInputs] = useState({
        assesName:"",
        startDateTime:"",
        endDateTime:"",
        desc:"",
        userid: JSON.stringify(currentUser.userid)
    })

    console.log(inputs)

    //function to handle change in input
    const handleChange = e => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleAdd = async e => {
        e.preventDefault()
        try{
            const res = await axios.post("http://localhost:8800/add/add-asses",inputs)
            console.log(res)
        }catch(err){
            console.log(err)
        }

    }
    
    return(
        <div className='addClass'>
             <h1>
                Add Assesment
            </h1>
            <div className='inputs'>
                <h3>
                    Assesment name
                </h3>
                <input type = "text" placeholder='class name' name='assesName' onChange={handleChange}/>
                <h3>
                    Start date time
                </h3>
                <input
                    type="datetime-local"
                    name="startDateTime"
                    onChange={handleChange}/>
                <h3>
                    End date time
                </h3>
                <input
                    type="datetime-local"
                    name="endDateTime"
                    onChange={handleChange}/>
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

export default AddAssesment