import React from 'react'
import { useSelector } from 'react-redux';
//import { userMenu } from './userMenu'
import { useLocation,Link } from 'react-router-dom';
import '../../../../styles/layout.css'


const Sidebar = () => {
  const {user}=useSelector(state=>state.auth)
    const location=useLocation();
    
  return (
    <div>
      <div className="sidebar">
        <div className="menu">
            {/* {userMenu.map((menu)=>{
                const isActive=location.pathname===menu.path;
                return (
                    <div className={`menu-item ${isActive && "active"}`}key={menu.name}>
                        <i className={menu.icon}></i>
                        <Link to={menu.path}>{menu.name}</Link>
                    </div>
                )

            })} */}
            {user?.role === "organisation" && (
            <>
              <div
                className={`menu-item ${location.pathname === "/" && "active"}`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/">Inventory</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/donor" && "active"
                }`}
              >
                <i className="fa-solid fa-hand-holding-medical"></i>
                <Link to="/donor">donor</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/hospital" && "active"
                }`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/hospital">Hospital</Link>
              </div>
            </>
          )}



            {(user?.role==='donor'||user?.role==='hospital')&&(
               <div className={`menu-item ${location.pathname==='/organisation'&&"active"}`}>
               <i className='fa-solid fa-building-ngo'></i>
               <Link to='/organisation'>Organisation</Link>
 
             </div>

            )}
            {user?.role==='hospital'&&(
              <div className={`menu-item ${location.pathname==='/consumer'&&"active"}`}>
              <i className='fa-solid fa-building-ngo'></i>
              <Link to='/consumer'>Consumer</Link>

            </div>

            )}
             {user?.role==='donor'&&(
              <div className={`menu-item ${location.pathname==='/donation'&&"active"}`}>
              <i className='fa-solid fa-building-ngo'></i>
              <Link to='/donation'>Donation</Link>

            </div>

            )}
            {user?.role === "admin" && (
            <>
              <div
                className={`menu-item ${location.pathname === "/donor-list" && "active"}`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/donor-list">Donors</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/hospital-list" && "active"
                }`}
              >
                <i className="fa-solid fa-hand-holding-medical"></i>
                <Link to="/hospital-list">Hospitals</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/org-list" && "active"
                }`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/org-list">Organisations</Link>
              </div>
            </>
          )}
            

            

        </div>
      </div>
    </div>
  )
}

export default Sidebar
