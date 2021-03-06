import React, { Component } from 'react';
import './App.css';

var Rune = require('rune.js');
var json = require('../src/logindata.json')

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

    var group = r.group(50, 50) //group position setup

    // setting up
    var fontSze = 16;
    var xPos = 0;
    var yPos = 0;
    var gridX = 50;
    var gridY = 50;
    var gridCol = 10;
    var gridRow = 10;
    var offsetCol = 0;
    var offsetY = 0;
    var rectHeight = 5.5;
    var offsetGrid = 0.05;
    var color = new Rune.Color
    var color2 = new Rune.Color
    color.rgb(0,0,0,1)
    color2.rgb(240,240,240,1)

    var backgroundColor = r.rect(0, 0, r.width, r.height)
      .fill(color2)
      .stroke(false)

    var grid = r.grid({
      x: gridX,
      y: gridY,
      width: r.width - gridX * 2,
      height: r.height - gridY * 2,
      gutter: 10,
      columns: gridCol,
      rows: gridRow
    });

    for (var i = 0; i < json.length; i++) {

      var code1 = r.rect(xPos, yPos, txtwdth[0][i], rectHeight)
        .fill(color).stroke(color2).strokeWidth(3)
      var code2 = r.rect(xPos, yPos + 10, txtwdth[1][i], rectHeight)
        .fill(color).stroke(color2).strokeWidth(3)
      var code3 = r.rect(xPos, yPos + 20, txtwdth[2][i], rectHeight)
        .fill(color).stroke(color2).strokeWidth(3)

      if (i % gridCol === 0){
        offsetCol += gridCol // "if" condition increments by "gridCol" every "gridCol" iterations.
        offsetY += 1 // grid.add Y axis increments by 1 every "gridCol" iterations.
      } 

      if (i < offsetCol) {
        grid.add(code1, (i + offsetY) % (gridCol+1), offsetY)
        grid.add(code2, (i + offsetY) % (gridCol+1), offsetY)
        grid.add(code3, (i + offsetY) % (gridCol+1), offsetY)
      } 
    }
    
    // var texttest = r.text("The Black Codes", 330, 430)
    //   .fontSize(fontSze).stroke(false).fill(0)
    //   .letterSpacing(false)

    // var texttest = r.text("Boring Original Nonsense", 270, 450)
    //   .fontSize(fontSze).stroke(false).fill(0)
    //   .letterSpacing(false)

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
    var calcFontSize = "bold 10pt Cordia"

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
