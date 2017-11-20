import React, { Component } from 'react';
import './App.css';

var Rune = require('rune.js');
var json = require('../src/loginData.json')

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  // GetLocationData() {
  //   fetch("http://jsonplaceholder.typicode.com/albums", {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   })
  //     .then((response) => {
        
  //       return response.json()
  //     })
  //     .then((json) => {
  //       return json;
  //     });
  //   };

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

    var fontSze = 16;
    var xPos = 0;
    var yPos = 0;
  
    var backgroundColor = r.rect(0, 0, r.width, r.height)
    .fill(240)
    .stroke(false)

    var group = r.group(50, 50) //group position setup

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
    
    for (var i = 0; i < json.length; i++) {
      var inputline1 = json[i].input1;
      var inputline2 = json[i].input2;
      var inputline3 = json[i].input3;

      var v = r.rect(xPos, yPos, inputline1.length, 5)
        .fill(200)
      var v2 = r.rect(xPos, yPos + 10, inputline2.length, 5)
        .fill(200)
      var v3 = r.rect(xPos, yPos + 20, inputline3.length, 5)
        .fill(200)

      if (i < grid.state.columns) {
        grid.add(v, (i + 1) % 11, 0)
        grid.add(v2, (i + 1) % 11, 0)
        grid.add(v3, (i + 1) % 11, 0)
      } else if (i < (grid.state.columns + 10)) {
        grid.add(v, (i + 2) % 11, 2)
        grid.add(v2, (i + 2) % 11, 2)
        grid.add(v3, (i + 2) % 11, 2)
      } else if (i < (grid.state.columns + 20)) {
        grid.add(v, (i + 3) % 11, 3)
        grid.add(v2, (i + 3) % 11, 3)
        grid.add(v3, (i + 3) % 11, 3)
      } else if (i < (grid.state.columns + 30)) {
        grid.add(v, (i + 4) % 11, 4)
        grid.add(v2, (i + 4) % 11, 4)
        grid.add(v3, (i + 4) % 11, 4)
      }
    }
    
    var texttest = r.text("The Black Codes", 330, 450)
      .fontSize(fontSze).stroke(false)
      .letterSpacing(false)


    // var txt = document.getElementsByTagName("text");

    // var txtWdth = 40;
    // var txtWdth2 = 40;
    // var txtWdth3 = 40;
    // var txtHght = 40 / 4;

    // var path1 = r.path(xPos, yPos, group)
    //   .lineTo(txtWdth, 0)
    //   .lineTo(txtWdth, txtHght)
    //   .lineTo(0, txtHght)
    //   .closePath()
    //   .stroke(false)


    // var path2 = r.path(xPos, yPos + 20, group)
    //   .lineTo(txtWdth2, 0)
    //   .lineTo(txtWdth2, txtHght)
    //   .lineTo(0, txtHght)
    //   .closePath()
    //   .stroke(false)

    // var path3 = r.path(xPos, yPos + 40, group)
    //   .lineTo(txtWdth3, 0)
    //   .lineTo(txtWdth3, txtHght)
    //   .lineTo(0, txtHght)
    //   .closePath()
    //   .stroke(false)

    // var gridX = 50;
    // var gridY = 50;

    // var grid = r.grid({
    //   x: gridX,
    //   y: gridY,
    //   width: r.width - gridX * 2,
    //   height: r.height - gridY * 2,
    //   gutter: 8,
    //   columns: 10,
    //   rows: 10
    // });
    // console.log(grid)
    // -----------------End Grid----------------

    
  }
    
  runeDraw = (r) => {
    r.draw();
  }

  componentDidMount(){
    var r = this.runeInit();
    this.runeSet(r);
    this.runeDraw(r);

    // this.GetLocationData();
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
