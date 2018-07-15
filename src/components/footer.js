import React, { Component } from 'react';
import fox from '../images/fox_favicon_trans.png';
//import ReactDOM from 'react-dom';

class Footer extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <footer className='footer'>
        <div className='text-center bg-dark'>
          <a className="navbar-brand" href="home.html">
            <img src={fox} width="30" height="30" className="d-inline-block align-top" alt=""/>
          </a>
          <h4 className='text-light'>Wyllie Arts Collective</h4>
          <h4 className='text-light'>St. Louis, MO</h4>
        </div>
      </footer>
    );
  }
}

export default Footer;
