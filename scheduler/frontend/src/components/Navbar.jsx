import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { userTracker } from '../context/userTracker'
import { useNavigate } from 'react-router-dom'



const Navbar = () => {

    //user tracker
    const {currentUser,setCurrentUser} = useContext(userTracker)

    const navigate = useNavigate()
    const logout = async e => {
        setCurrentUser(null);
        navigate("/login")
    }

    return (
        <div className='bar'>
            <div className='links'>
                <span className='username'>{currentUser.username}</span>
                <Link className='link'>
                    Home
                </Link>
                <Link className='link' to='/add-assesment'>
                    Add Assesment
                </Link>
                <Link className='link' to='/add-class'>
                    Add Class
                </Link>
                <Link className='link' to="/add-reserved-time">
                    Add Reserved Time
                </Link>
                <Link className='link' to="/edit-profile">
                    Edit Profile
                </Link>
                <button onClick={logout} className='logout'>
                    Logout
                </button>
            </div>
        </div>
    )
}

 export default Navbar