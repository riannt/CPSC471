import React,{useContext,useEffect} from 'react'
import { userTracker } from '../context/userTracker'
import { useState } from 'react'
import axios from "axios"
import {Link,useNavigate} from 'react-router-dom'

const Home = () => {

    //user tracker
    const {currentUser,setCurrentUser} = useContext(userTracker)

    const [asses,setAsses] = useState([])

    const [classes,setClasses] = useState([])

    const [assesComplete,setAssesComplete] = useState([])

    useEffect( ()=>{
        const grabData = async () => {
            try{
                const res = await axios.get("http://localhost:8800/grab/grab-asses", {params: {userid:JSON.stringify(currentUser.userid)}})
                setAsses(res.data)
                const res1 = await axios.get("http://localhost:8800/grab/grab-classes", {params: {userid:JSON.stringify(currentUser.userid)}})
                setClasses(res1.data)
                const res2 = await axios.get("http://localhost:8800/grab/grab-asses-complete", {params: {userid:JSON.stringify(currentUser.userid)}})
                setAssesComplete(res2.data)
            }catch(err){
                console.log(err)
            }
        };
        grabData();

    }, [])
    
    //console.log(asses[0])
    //console.log(classes[0])
    //console.log(assesComplete[0])

    const dateTimeFormat = (x) => {
        return x.slice(0,10) +" "+ x.slice(11,16)
    }


    const handleComplete = async (id) => {
        //console.log({status:"1",assesid:id})
        try{
            const res = await axios.put("http://localhost:8800/edit/edit-complete",{status:"1",assesid:id})
            console.log(res)
            window.location.reload()
        }catch(err){
            console.log(err)
        }

    }

    const handleUncomplete = async (id) => {
        //console.log({status:"0",assesid:id})
        try{
            const res = await axios.put("http://localhost:8800/edit/edit-complete",{status:"0",assesid:id})
            console.log(res)
            window.location.reload()
        }catch(err){
            console.log(err)
        }

    }

    const handleRemove = async (id) => {
        console.log({assesid:id})
        try{
            const res = await axios.delete("http://localhost:8800/remove/remove-asses",{params:{assesid:id}})
            console.log(res)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    const handleDrop = async (id) => {
        console.log({classid:id})
        try{
            const res = await axios.delete("http://localhost:8800/remove/remove-class",{params:{classid:id}})
            console.log(res)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }
    
    return(
        <div className='schedule'>
            <div className='column uncompleted'>
                <h1>
                    Tasks
                </h1>
                {asses.map(asses=>(
                <div className='task' key={asses.assesID}>
                    <h3>{asses.title}</h3>
                    <h5>{dateTimeFormat(asses.startDateTime)}</h5>
                    <h5>{dateTimeFormat(asses.endDateTime)}</h5>
                    <p>{asses.description}</p>
                    <button onClick={()=>handleComplete(asses.assesID)}>complete</button>
                    <button onClick={()=>handleRemove(asses.assesID)}>Remove</button>
                </div>))}
            </div>

            <div className='column completed'>
                <h1>
                    Completed Tasks
                </h1>
                {assesComplete.map(assesComplete=>(
                <div className='task' key={assesComplete.assesID}>
                    <h3>{assesComplete.title}</h3>
                    <h5>{dateTimeFormat(assesComplete.startDateTime)}</h5>
                    <h5>{dateTimeFormat(assesComplete.endDateTime)}</h5>
                    <p>{assesComplete.description}</p>
                    <button onClick={()=>handleUncomplete(assesComplete.assesID)}>uncomplete</button>
                    <button onClick={()=>handleRemove(assesComplete.assesID)}>Remove</button>
                </div>))}
            </div>

            <div className='column enrolled'>
                <h1>
                    Enrolled Classes
                </h1>
                {classes.map(classes=>(
                <div className='class' key={classes.classid}>
                    <h3>{classes.className}</h3>
                    <h4>{classes.instructorName}</h4>
                    <p>{classes.description}</p>
                    <button onClick={()=>handleDrop(classes.classid)}>Drop</button>
                </div>))}
            </div>

        </div>
    )
}

export default Home