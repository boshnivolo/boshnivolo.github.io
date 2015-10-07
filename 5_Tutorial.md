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

### Step 3

Shit locked. ADD SOME SPACE. Throw some `padding` in there so your board's got some breathing room. Don't apply it to the `<td>`s though. They need to be buddy-buddy with their fellow cells.

### Step 4

Shit spaced. CHECK YOUR MARGINS BRO. `margin`s help keep things in shape. 
