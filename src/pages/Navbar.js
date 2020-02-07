import React, { Component } from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    //define state
    state = {
        isNavbarOpen: false
    }

    handleNavbar = () => {
        this.setState({
            isNavbarOpen: !this.state.isNavbarOpen
        })
    }
    render(){
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="mainlogo" style={{height: 65, width: 85}} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={this.handleNavbar}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={this.state.isNavbarOpen ?  "show-nav" : "collapse navbar-collapse"}  id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/">Home <span className="sr-only"  onClick={this.handleNavbar}>(current)</span></Link>
                        <Link className="nav-item nav-link" to="/about" onClick={this.handleNavbar}>About</Link>
                        <Link className="nav-item nav-link" to="/products"  onClick={this.handleNavbar}>Products</Link>
                        <Link className="nav-item nav-link" to="/team"  onClick={this.handleNavbar}>Teams</Link>
                        <Link className="nav-item nav-link" to="/contact"  onClick={this.handleNavbar}>Contact</Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
