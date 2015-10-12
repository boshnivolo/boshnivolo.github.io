## HOW TO MAKE YOUR CHESSBOARD RESPONSIVE! 

Hello world! Can't get your chessboard to move? Then just make it responsive instead! Make it's beautiful square structure retain its proportions no matter how small the screen! How, you ask? LET ME SHOW YOU!

### Step 1

Make that shit first. Set up your table with HTML! 

``` 
<table class="board">
    <caption><h1>Wizard Chess</h1></caption>
    <thead>
      <tr>
        <th></th>
        <th class="numbers">1</th>
        <th class="numbers">2</th>
        <th class="numbers">3</th>
        <th class="numbers">4</th>
        <th class="numbers">5</th>
        <th class="numbers">6</th>
        <th class="numbers">7</th>
        <th class="numbers">8</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>A</th>
        <td class="aqua wR"></td>
        <td class="sky wN"></td>
        <td class="aqua wB"></td>
        <td class="sky wQ"></td>
        <td class="aqua wK"></td>
        <td class="sky wB"></td>
        <td class="aqua wN"></td>
        <td class="sky wR"></td>
        <th>A</th>
      </tr>
      <tr>
        <th>B</th>
        <td class="sky wP"></td>
        <td class="aqua wP"></td>
        <td class="sky wP"></td>
        <td class="aqua wP"></td>
        <td class="sky wP"></td>
        <td class="aqua wP"></td>
        <td class="sky wP"></td>
        <td class="aqua wP"></td>
        <th>B</th>
      </tr>
```

Set it up with some classes describing the colors so you can change it in CSS later. 

### Step 2

Shit made. LOCK IT. Get into your CSS and set the `position`! 

```
table {
  width:100%;
  border-collapse: collapse;
}
.numbers {
  padding-bottom: 10px;
  padding-top: 10px;
}
.board {
    border-collapse:collapse;
    padding:5px;
}
.wR::before {
  content: "\2656";
  position: absolute;
}
.wN::before {
  content: "\2658";
  position: absolute;
}
.wB::before {
  content: "\2657";
  position: absolute;
}
.wQ::before {
  content: "\2654";
  position: absolute;
}
.wK::before {
  content: "\2655";
  position: absolute;
}
.wP::before {
  content: "\2659";
  position: absolute;
}
.bR::before {
  content: "\265c";
  position: absolute;
}
.bN::before {
  content: "\265e";
  position: absolute;
}
.bB::before {
  content: "\265d";
  position: absolute;
}
.bK::before {
  content: "\265b";
  position: absolute;
}
.bQ::before {
  content: "\265a";
  position: absolute;
}
.bP::before {
  content: "\265f";
  position: absolute;
}
```

Making the position absolute prevents the squares from trying to stretch out later. 

### Step 3

Shit locked. ADD SOME SPACE. Throw some `padding` in there so your board's got some breathing room. 

```
td {
    border:0.1em solid darkgray;
    width:10%;
    padding-bottom: 10%;
}
.aqua {
 background-color: aquamarine;
 font-size: 5vw;
 padding-left: 1vw;
}
.sky {
 background-color: lightskyblue;
 font-size: 5vw;
 padding-left: 1vw;
} 
```

This keeps them from squishing as well.

### Step 4

Shit spaced. CHECK YOUR MARGINS BRO. `margin`s help keep things in shape. 

```
main.container {
  margin: 0 10%;
}
```

Setting the margins to 0 10% help to make the whole board resize itself according to the viewport. 
