import React, { Component } from 'react';
import './main-page.css';
import Navigation from '../navigation';
import Footer from '../components/footer';

class App extends Component {

  render() {
    return (
        <div>
          <Navigation/>
          <Footer/>
        </div>
    );
  }
}

export default App;
