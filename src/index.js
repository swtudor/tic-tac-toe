import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.js';
import Home from './components/home.js';
import Footer from './components/footer.js';

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }

}



// ========================================

ReactDOM.render( <App/>, document.getElementById('root')
);
