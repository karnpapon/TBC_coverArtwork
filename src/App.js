import React, { Component } from 'react';
import './App.css';

var Rune = require('rune.js');

class App extends Component {


  runeDraw = () => {
    var r = new Rune({
      container: "#canvas",
      width: 600,
      height: 600
    });

    var backgroundColor = r.rect(0, 0, r.width, r.height)
      .fill(100,20,0,200)
      .stroke(false)

    r.draw();
  }

  componentDidMount = () => {
    this.runeDraw();
    
  }


  render() {
    return (
      <div id="canvas">
      </div>
    );
  }
}

export default App;
