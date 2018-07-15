import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import HomeCarousel from './home-carousel';


class Home extends Component{
  constructor (props){
    super();
  }

  render(){
    return(
      <div>
        <HomeCarousel />

        <div className="jumbotron jumbotron-fluid bg-light">
          <div className='container text-center'>
            <h1 className="display-2">Wyllie Arts Collective</h1>
            <p className="lead text-muted">An artists collective run by artists for artists.</p>
            <p className='text-muted'>View galleries, read the biographies or purchase artwork. Or any other simple welcome message to put here. No more than three or four sentences.</p>
            <p className="lead">
              <a className="btn btn-secondary btn-lg" href="main_gallery.html" role="button">View Collective Gallery</a>
            </p>
          </div>
        </div>
      </div>);
  }
}

export default Home;
