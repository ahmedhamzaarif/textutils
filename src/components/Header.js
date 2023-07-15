import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="position-fixed w-100 top-0">
        <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={props.theme==='light'? props.logoBlue:props.logoWhite}
                    alt={props.title} className='logo'/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-4 mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    </ul>
                    <label className="form-check form-switch theme-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="toggleSwitch" onClick={props.toggleMode}/>
                        <span className='slider'></span>
                    </label>
                </div>
            </div>
        </nav>
    </header>
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
Header.defaultProps = {
    title: "Set title or add image"
}