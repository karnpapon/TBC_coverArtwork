import React, { Component } from 'react';
import './App.css';

var Rune = require('rune.js');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textLength: 0
    }
  }

  getTextLen = () => {
    var txt = document.getElementsByTagName("text");
    var txtlen = txt[0].textLength.baseVal.value
    return txtlen
  }

  
  runeDraw = (txt) => {
   console.log(txt)
    var r = new Rune({
      container: "#canvas",
      width: 500,
      height: 500
    });

    var backgroundColor = r.rect(0, 0, r.width, r.height)
      .fill(200)
      .stroke(false)


    var texttest = r.text("testinput", 20, 300)
                .fontSize(50).stroke(false)
                .letterSpacing(false)
             
    var xPos = 20;
    var yPos = 300;
    var txtWdth = txt;
    var txtHght = 50;
    
    var path = r.path(xPos, yPos)
    .lineTo(txtWdth, 0)
    .lineTo(txtWdth, txtHght)
    .lineTo(0, txtHght)
    .closePath()
    .stroke(false)
                
                
    r.draw();
  }

  updateState = (txt) => {
    this.setState(() => {
      return { textLength: txt }
    })
  }

  componentDidMount = () => {  
    
    this.runeDraw();
    
    // stored return values(text lenght) from function
    var txtLength = this.getTextLen();
    this.runeDraw(txtLength);
    
    // this.updateState(txtLength)
    
  }

  // update rune onClick
  /*componentWillUpdate = () => {
    this.runeDraw(this.state.textLength);
  }*/
  

  render() {
    return (
      <div id="canvas">
        {/* <button onClick={this.updateState}>Click ME</button> */}
      </div>
    );
  }
}

export default App;
