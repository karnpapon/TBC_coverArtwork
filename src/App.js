import React, { Component } from 'react';
import './App.css';

var Rune = require('rune.js');
var json = require('../src/loginData2.json')

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  runeInit = () => {
    var r = new Rune({
      container: "#canvas",
      width: 500,
      height: 500,
      debug: false // toggle opening grid
    });
    return r
  }

  runeSet = (r, txtwdth) => {
    
    var backgroundColor = r.rect(0, 0, r.width, r.height)
    .fill(240)
    .stroke(false)

    var group = r.group(50, 50) //group position setup

    // setting up
    var fontSze = 16;
    var xPos = 0;
    var yPos = 0;
    var gridX = 50;
    var gridY = 50;
    var gridCol = 10;
    var gridRow = 10;
    var rectHeight = 6;
    

    var grid = r.grid({
      x: gridX,
      y: gridY,
      width: r.width - gridX * 2,
      height: r.height - gridY * 2,
      gutter: 8,
      columns: gridCol,
      rows: gridRow
    });

    for (var i = 0; i < json.length; i++) {

      var code1 = r.rect(xPos, yPos, txtwdth[0][i], rectHeight)
        .fill(0).stroke(240).strokeWidth(2)
      var code2 = r.rect(xPos, yPos + 10, txtwdth[1][i], rectHeight)
        .fill(0).stroke(240).strokeWidth(2)
      var code3 = r.rect(xPos, yPos + 20, txtwdth[2][i], rectHeight)
        .fill(0).stroke(240).strokeWidth(2)

      if (i < grid.state.columns) {
        grid.add(code1, (i + 1) % 11, 0)
        grid.add(code2, (i + 1) % 11, 0)
        grid.add(code3, (i + 1) % 11, 0)
      } else if (i < (grid.state.columns + 10)) {
        grid.add(code1, (i + 2) % 11, 2)
        grid.add(code2, (i + 2) % 11, 2)
        grid.add(code3, (i + 2) % 11, 2)
      } else if (i < (grid.state.columns + 20)) {
        grid.add(code1, (i + 3) % 11, 3)
        grid.add(code2, (i + 3) % 11, 3)
        grid.add(code3, (i + 3) % 11, 3)
      } else if (i < (grid.state.columns + 30)) {
        grid.add(code1, (i + 4) % 11, 4)
        grid.add(code2, (i + 4) % 11, 4)
        grid.add(code3, (i + 4) % 11, 4)
      } else if (i < (grid.state.columns + 40)) {
        grid.add(code1, (i + 5) % 11, 5)
        grid.add(code2, (i + 5) % 11, 5)
        grid.add(code3, (i + 5) % 11, 5)
      } else if (i < (grid.state.columns + 50)) {
        grid.add(code1, (i + 6) % 11, 6)
        grid.add(code2, (i + 6) % 11, 6)
        grid.add(code3, (i + 6) % 11, 6)
      } else if (i < (grid.state.columns + 60)) {
        grid.add(code1, (i + 7) % 11, 7)
        grid.add(code2, (i + 7) % 11, 7)
        grid.add(code3, (i + 7) % 11, 7)
      }
    }
    
    var texttest = r.text("The Black Codes", 330, 430)
      .fontSize(fontSze).stroke(false).fill(0)
      .letterSpacing(false)

    var texttest = r.text("Boring Original Nonsense", 270, 450)
      .fontSize(fontSze).stroke(false).fill(0)
      .letterSpacing(false)

  }
    
  runeDraw = (r) => {
    r.draw();
  }

  getTextWidth = (text, font) => {
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
  };

  componentDidMount(){
    var r = this.runeInit();
    
    // calc real text width(typography anatomy based)
    var txtwdthLine1 = []
    var txtwdthLine2 = []
    var txtwdthLine3 = []
    var txtwdth = []
    var calcFontSize = "bold 10pt Helvetica"

    for (var i = 0;i < json.length; i++ ) {
      txtwdthLine1.push(this.getTextWidth(json[i].input1, calcFontSize)); //measures text width
      txtwdthLine2.push(this.getTextWidth(json[i].input2, calcFontSize)); //measures text width
      txtwdthLine3.push(this.getTextWidth(json[i].input3, calcFontSize)); //measures text width
      txtwdth = [txtwdthLine1, txtwdthLine2, txtwdthLine3]
    }

    this.runeSet(r, txtwdth);
    this.runeDraw(r);
  }




  render() {
    return (
      <div id="canvas">
      </div>
    );
  }
}

export default App;
