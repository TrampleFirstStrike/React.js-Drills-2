import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToK4JlA_Lhx7jNWUY1HfAtT9t25bsccGVhStfc6INoH8tPw8Hp" } />
      </div>
    );
  }
}

export default App;