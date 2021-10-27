//global values
let delta_ms;


//create a sketch in instance mode
//the s parameter is how you then refer to any sketch methods 
//and properties
const sketch = (s) => {
  //storage member of the sketch
  let startValue;
  
  s.preload = () => {
	//things that need to be loaded before sketch starts
  }

  s.setup = () => {
    s.createCanvas(400, 400);
    s.frameRate(60);
	startValue = 405;
  };

  //create a separate function for logic
  s.logic = () => {
	//record delta time as a fraction of a second
    delta_ms = s.deltaTime * 0.001;

    
  }
  
  //complete drawing for the sketch
  s.draw = () => {
    s.logic();

    s.background(190);
    s.image(pg,0,0);
  };
};

//create instance of the sketch and assign to a div id'd p5sketch
let myp5 = new p5(sketch, 'p5sketch');
