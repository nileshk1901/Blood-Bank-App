import React from 'react';
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaCircleUser } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import {  useNavigate,useLocation,Link } from 'react-router-dom';



const Header = () => {
    const {user}=useSelector(state=> state.auth);
    const navigate=useNavigate();
    const location=useLocation();

    //logout
    const handleLogout=()=>{
        localStorage.clear()
        navigate('/login')
        alert('Logged out successfully')
    }
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
            <div className="navbar-brand">
                <BiSolidDonateHeart color='red'/>
                Blood Bank App
            </div>
            <ul className="navbar-nav flex-row">
                <li className="nav-item mx-3">
                    <p className='nav-link'> <FaCircleUser/>Welcome {" "} {user?.name || user?.hospital || user?.organization }{" "} &nbsp;
                    <span className='badge bg-secondary'>{user?.role} </span>
                    </p>

                </li>
                {
                  location.pathname==='/'||location.pathname==='/donor'||location.pathname==='/hospital'?(
                    <li className='nav-item mx-3'>
                      <Link to="/analytics" className='nav-link'>
                      Analytics
                      </Link>
                    </li>


                  ):(<li className='nav-item mx-3'>
                    <Link to="/" className='nav-link'>
                    Home
                    </Link>
                  </li>)
                }
                <li className="nav-item mx-3">
                    <button className='btn btn-danger' onClick={handleLogout}>Logout</button>

                </li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
