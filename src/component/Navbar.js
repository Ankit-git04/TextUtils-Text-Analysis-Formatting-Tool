import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {

  

  return (
   <div className='NavBar'>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
<div className="container-fluid">
  <Link className="navbar-brand" to="/tex-tutil">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
  <Link className="nav-link active" aria-current="page" to="/home">{props.HomeText}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/About">{props.AboutText}</Link>
      </li>
    </ul>
   
<div className="themeButton">
 <strong>Theme Button</strong>
<button type="button" onClick={()=>{props.changeTheme('success')}} className="btn btn-success mx-1 my-1">Green</button>
<button type="button" onClick={()=>{props.changeTheme('danger')}} className="btn btn-danger mx-1 my-1">Red</button>
<button type="button" onClick={()=>{props.changeTheme('warning')}} className="btn btn-warning mx- my-11">Yellow</button>
<button type="button" onClick={()=>{props.changeTheme('info')}} className="btn btn-info mx-1 my-1">Blue</button>
</div>






    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success mx-2 my-1" type="submit">Search</button>
    </form>

    <div className={`form-check form-switch text-${props.mode==='light'? 'dark' : 'light'}`}>
    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode </label>
</div>

  </div>
</div>
</nav>
    </div>

 
  )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    AboutText: PropTypes.string.isRequired
}

// Navbar.defaultProps = {
//     title: 'Set title here',
//     AboutText: 'About text here'
// };

