import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className='home'>Home</div>
        </header>
        <section className='blackBox'>
          <Nav/>
        </section>
      </div>
    );
  }
}

export default App;
