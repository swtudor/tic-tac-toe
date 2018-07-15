import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import img1 from '../images/placeholder-logo.png';
import img2 from '../images/placeholder2.png';
import img3 from '../images/placeholder3.png';
import img4 from '../images/placeholder1.png';
import img5 from '../images/placeholder7.png';
import img6 from '../images/placeholder9.png';

class HomeCarousel extends Component{
  constructor (props){
    super();
  }

  render(){
    return(
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        </ol>
        <div className="carousel-inner" style={{height:'500px'}}>
          <div className="carousel-item bg-dark active">
            <img className="d-block mx-auto mw-100" src={img1} alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img2} alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img3} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img4} alt="Fourth slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img5} alt="Fifth slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img6} alt="Sixth slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>);
  }
}
export default HomeCarousel;
