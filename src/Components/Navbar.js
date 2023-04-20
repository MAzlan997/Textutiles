import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>         {/* ----Props Passing---- */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/">{props.abc}</Link>
                        <Link className="nav-link" to="/about">About</Link>
                    </div>

                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault ">{props.mode}Mode</label>
                </div>
            </div>
  
        </nav>
    );
}             
//-------------------------Declaring propTypes------------//
Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    abc:PropTypes.string
};
//-------------------------Declaring default props------------//
Navbar.defaultProps = {
    title: 'Set title here',
    abc:'working write here'
};
