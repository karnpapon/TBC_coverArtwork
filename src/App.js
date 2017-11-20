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
      debug: false
    });
    return r
  }

  runeSet = (r) => {

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


    // console.log(json)

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
    
    var minArr = 0
    var maxArr = 10

    var inp1 = json.slice(0,10)
    var inp2 = json.slice(10,20)
    var inp3 = json.slice(20,30)
    var inp4 = json.slice(30,33)


    for (var i = 0; i < 10; i++) {

      var input1st = inp1[i].input1;
      var input2nd = inp2[i].input1;
      var input3rd = inp3[i].input1;

      var inputl1st = inp1[i].input2;
      var inputl2nd = inp2[i].input2;
      var inputl3rd = inp3[i].input2;

      var inputls1st = inp1[i].input3;
      var inputls2nd = inp2[i].input3;
      var inputls3rd = inp3[i].input3;

      var v = r.rect(xPos, yPos, input1st.length, 5,group)
        .fill(0).stroke(false)
      var v2 = r.rect(xPos, yPos, input2nd.length, 5, group)
        .fill(0).stroke(false)
      var v3 = r.rect(xPos, yPos, input3rd.length, 5, group)
        .fill(0).stroke(false)

      var vl1 = r.rect(xPos, yPos+ 7, inputl1st.length, 5, group)
        .fill(0).stroke(false)
      var vl2 = r.rect(xPos, yPos+ 7, inputl2nd.length, 5, group)
        .fill(0).stroke(false)
      var vl3 = r.rect(xPos, yPos+ 7, inputl3rd.length, 5, group)
        .fill(0).stroke(false)

      var vls1 = r.rect(xPos, yPos + 14, inputls1st.length, 5, group)
        .fill(0).stroke(false)
      var vls2 = r.rect(xPos, yPos + 14, inputls2nd.length, 5, group)
        .fill(0).stroke(false)
      var vls3 = r.rect(xPos, yPos + 14, inputls3rd.length, 5, group)
        .fill(0).stroke(false)
      
        grid.add(v, (i + 1) % 11, 1 )
        grid.add(v2, (i + 1) % 11, 2 )
        grid.add(v3, (i + 1) % 11, 3 )
        grid.add(vl1, (i + 1) % 11, 1)
        grid.add(vl2, (i + 1) % 11, 2)
        grid.add(vl3, (i + 1) % 11, 3)
        grid.add(vls1, (i + 1) % 11, 1)
        grid.add(vls2, (i + 1) % 11, 2)
        grid.add(vls3, (i + 1) % 11, 3)
      
        // var input2 = json[y].input2;
        // var v2 = r.rect(xPos, yPos, input2.length, 5).fill(180)
        // // x += input1.length;
        // grid.add(v2, 1, (y + 1) % 11)
      
    }

    
    var texttest = r.text("The Black Codes", 330, 450)
      .fontSize(fontSze).stroke(false)
      .letterSpacing(false)

    // var texttest2 = r.text("line2", xPos, yPos + 20, group)
    //   .fontSize(fontSze).stroke(false)
    //   .letterSpacing(false)

    // var texttest3 = r.text("line3", xPos, yPos + 40, group)
    //   .fontSize(fontSze).stroke(false)
    //   .letterSpacing(false)

    // -----------------End Text-----------------
    // ------------------------------------------
    // ----------Start Get-text-length-----------


    // var txt = document.getElementsByTagName("text");

    // -------------End Get-text-length-----------
    // -------------------------------------------
    // -----------------Start แถบดำ---------------

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

    // -----------------End แถบดำ-----------------
    // -------------------------------------------
    // -----------------Start Grid----------------

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
