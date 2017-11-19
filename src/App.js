import React, { Component } from 'react';
import './App.css';

var Rune = require('rune.js');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tlength: [],
    }
  }


  runeInit = () => {
    var r = new Rune({
      container: "#canvas",
      width: 500,
      height: 500,
      debug: true
    });
    return r
  }

  runeSet = (r) => {

    console.log(r)

    var fontSze = 16;
    var xPos = 0;
    var yPos = 0;

    // -------------------------------------------
    // --------------Start Background-------------
  
    
    var backgroundColor = r.rect(0, 0, r.width, r.height)
    .fill(240)
    .stroke(false)

    // ---------------End Background--------------
    // -------------------------------------------
    // -----------------Start Text----------------

    var group = r.group(50, 50) //group position setup


    var texttest = r.text("testinput", xPos, yPos, group)
      .fontSize(fontSze).stroke(false)
      .letterSpacing(false)

    var texttest2 = r.text("line2", xPos, yPos + 20, group)
      .fontSize(fontSze).stroke(false)
      .letterSpacing(false)

    var texttest3 = r.text("line3", xPos, yPos + 40, group)
      .fontSize(fontSze).stroke(false)
      .letterSpacing(false)

    // -----------------End Text-----------------
    // ------------------------------------------
    // ----------Start Get-text-length-----------


    var txt = document.getElementsByTagName("text");
    
    this.setState( ()  => {
      var txtlen1 = txt[0].textLength.baseVal.value
      var txtlen2 = txt[1].textLength.baseVal.value
      var txtlen3 = txt[2].textLength.baseVal.value
      this.state.tlength = [txtlen1, txtlen2, txtlen3]   
      console.log(this.state.tlength)
      }
    )

    console.log(this.state.tlength)

    // -------------End Get-text-length-----------
    // -------------------------------------------
    // -----------------Start แถบดำ---------------

    var txtWdth = 40;
    var txtWdth2 = 40;
    var txtWdth3 = 40;
    var txtHght = 40 / 4;

    var path1 = r.path(xPos, yPos, group)
      .lineTo(txtWdth, 0)
      .lineTo(txtWdth, txtHght)
      .lineTo(0, txtHght)
      .closePath()
      .stroke(false)


    var path2 = r.path(xPos, yPos + 20, group)
      .lineTo(txtWdth2, 0)
      .lineTo(txtWdth2, txtHght)
      .lineTo(0, txtHght)
      .closePath()
      .stroke(false)

    var path3 = r.path(xPos, yPos + 40, group)
      .lineTo(txtWdth3, 0)
      .lineTo(txtWdth3, txtHght)
      .lineTo(0, txtHght)
      .closePath()
      .stroke(false)

    // -----------------End แถบดำ-----------------
    // -------------------------------------------
    // -----------------Start Grid----------------

    var gridX = 50;
    var gridY = 50;

    var grid = r.grid({
      x: gridX,
      y: gridY,
      width: r.width - gridX * 2,
      height: r.height - gridY * 2,
      gutter: 8,
      columns: 10,
      rows: 10
    });

    // -----------------End Grid----------------

  }
    
  runeDraw = (r) => {
    r.draw();
  }

  componentDidMount(){
    var r = this.runeInit();
    this.runeSet(r);
    this.runeDraw(r);
  }

  

  render() {
    const {tlength} = this.state;
    return (
      <div id="canvas">
      </div>
    );
  }
}

export default App;
