import React,{useContext} from 'react'
import { userTracker } from '../context/userTracker'
import { useState } from 'react'
import axios from "axios"


const EditProfile = () => {

    //user tracker
    const {currentUser} = useContext(userTracker)

    const [inputs,setInputs] = useState({
        username:"",
        fname:"",
        lname:"",
        school:"",
        userid:JSON.stringify(currentUser.userid)
    })

    console.log(inputs)

    //function to handle change in input
    const handleChange = e => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    

    const handleApply = async e => {
        try{
            //when call goes through
            const res = await axios.put("http://localhost:8800/edit/"+ e.target.name,inputs)
            console.log(res)
        }catch(err)
        {
            //when theres an error
            console.log(err)
        }
    }
    
    return(
        <div className='edit'>
            <h1>
                Edit Profile
            </h1>
            <div className='inputs'>
                <h3>
                    user
                </h3>
                <input type = "text" placeholder='username' name='username' onChange={handleChange}/>
                <button name='edituser' onClick={handleApply}>
                    apply
                </button>
                <h3>
                    first name
                </h3>
                <input type = "text" placeholder='first name' name='fname' onChange={handleChange}/>
                <button name='editfname' onClick={handleApply}>
                    apply
                </button>
                <h3>
                    last name
                </h3>
                <input type = "text" placeholder='last name' name='lname' onChange={handleChange}/>
                <button name='editlanme' onClick={handleApply}>
                    apply
                </button>
                <h3>
                    school
                </h3>
                <input type = "text" placeholder='school' name='school' onChange={handleChange}/>
                <button name='editschool' onClick={handleApply}>
                    apply
                </button>
            </div>
            

        </div>
    )
}

export default EditProfile