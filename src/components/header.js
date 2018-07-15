import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import fox from '../images/fox_favicon_trans.png';

class Header extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="home.html">
            <img src={fox} width="30" height="30" className="d-inline-block align-top" alt=""/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="home.html">Home<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Artist Profiles
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="artist-profile.html">Artist One Name</a>
                  <a className="dropdown-item" href="artist-profile.html">Artist Two Name</a>
                  <a className="dropdown-item" href="artist-profile.html">Artist Three Name</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup="true" aria-expanded="false">
                  Gallery
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="main_gallery.html">All Artists</a>
                  <div className="dropdown-divider"></div>
                  <h6 className="dropdown-header">By Artist Name</h6>
                  <a className="dropdown-item" href="individual_gallery.html">John Smith</a>
                  <a className="dropdown-item" href="individual_gallery.html">Jane Smith</a>
                  <a className="dropdown-item" href="individual_gallery.html">Joe Blow</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Contact
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="contact.html">Contact Us</a>
                  <a className="dropdown-item" href="membership.html">Become A Member</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cart</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }

}

export default Header;
