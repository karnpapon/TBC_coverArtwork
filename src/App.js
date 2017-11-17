import React, { Component } from 'react';
import './App.css';

var Rune = require('rune.js');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tlength: 0
    }
  }

  getTextLen = () => {
    
    var txt = document.getElementsByTagName("text");
    var txtlen = txt[0].textLength.baseVal.value
    return txtlen
  }

  
  runeDraw = (txt) => {
    var r = new Rune({
      container: "#canvas",
      width: 500,
      height: 500,
      debug: true
    });
    
    var fontSze = 6;
    var xPos = 0;
    var yPos = 0;
    

    var backgroundColor = r.rect(0, 0, r.width, r.height)
    .fill(200)
    .stroke(false)

    var texttest = r.text("testinput", xPos, yPos, group)
                  .fontSize(fontSze).stroke(false)
                  .letterSpacing(false)

   
            
    var txtWdth = txt;
    var txtHght = txt/4;
    var group = r.group(50,50)
    
    var path = r.path(xPos, yPos, group)
    .lineTo(txtWdth, 0)
    .lineTo(txtWdth, txtHght)
    .lineTo(0, txtHght)
    .closePath()
    .stroke(false)

    var grid = r.grid({
      x: 50,
      y: 50,
      width: r.width - 100,
      height: r.height - 100,
      gutter: 8,
      columns: 10,
      rows: 10
    });
                
                
    r.draw();
  }

  updateState = (txt) => {
    this.setState(() => {
      return { tlength: txt }
    })
  }

  componentDidMount = () => {  
    
    this.runeDraw(txtLength);
    
    // stored return values(text lenght) from function
    var txtLength = this.getTextLen();
    this.runeDraw(txtLength);
    console.log(txtLength)
    
    // this.updateState(txtLength)
    
  }

  // update rune onClick
  /*componentWillUpdate = () => {
    this.runeDraw(this.state.textsLength);
  }*/
  

  render() {
    const {textsLength} = this.state
    return (
      <div id="canvas">
        {/* <button onClick={this.updateState}>Click ME</button> */}
      </div>
    );
  }
}

export default App;
