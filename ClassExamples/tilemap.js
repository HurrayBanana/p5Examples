class tilemap{

  world = false;
  scale;//= new vector2(0,0);
  off;// = new Vector2(0,0);
  tileset = [];
  angle = 0;
  #rows;
  #cols;
  #tw;
  #th;
  #drawmode;
  constructor(r,c, w, h, sketch)
  {
    this.dataMembers();
    this.sk = sketch;
    this.setEmptyMap(r, c, 0);
    //
    this.#rows = r;
    this.#cols = c;
    this.#tw = w;
    this.#th = h;
    
  }
  get cols() {return this.#cols;}
  get rows() {return this.#rows;}
  get tw() {return this.#tw}
  get th() {return this.#th}
  get width() {return this.#tw * this.#cols;}
  get height() {return this.#th * this.#rows;}
  // sets up the data members of the class
  dataMembers(){
    //this.tileset = [];
    this.off = new vector2(0,0);
    // this.scale = new vector2(1,1);
    // this.world = false;
    // this.angle = 1;
  }
  validTile(loc){
    return loc.x >=0 && loc.x < this.cols && loc.y >= 0 && loc.y < this.rows;
  }
  setcolourmap(colourrgba, active){
    this.usecolourmap = active;
    this.colourmap = [];
    for (let i = 0; i < this.rows; i++){
      let row = [];
      for (let j = 0; j < this.cols; j++) {
        //let colour = colourrgba;
        //row.push(colour);
        row.push(colourrgba);
      }
      this.colourmap.push(row);
    }    
  }
  
  setEmptyMap(r,c, tilenum){
    this.map = [];
    for (let i = 0; i < r; i++){
      let row = [];
      for (let j = 0; j < c; j++) {
        row.push(tilenum);
      }
      this.map.push(row);
    }
  }

  draw(){
    //rotation experiment
    //need to have a toggle to determine if state is pushed and popped
    this.sk.push();
    //apply view window offset
    //this.sk.translate(view);
    //assume rotation origin is centre of tilemap
    this.sk.translate(this.width / 2, this.height / 2);
    this.sk.rotate(this.angle);
    this.sk.translate(-this.width / 2, -this.height / 2);

    //this.sk.translate(this.width / 2, this.height / 2);
    //handle word co-ordinate view offsets
    if (this.world){
      //this.off = view;
    }
    for (let r = 0; r < this.rows; r++){
      for (let c = 0; c < this.cols; c++){
        let tt = this.tileset[this.map[r][c]];
        this.sk.image(tt.img,-this.off.x+c*this.tw,-this.off.y+r*this.th,this.tw,this.th,tt.x,tt.y,tt.w,tt.h);
      }
    }
    if (this.usecolourmap){
      this.sk.noStroke();
      for (let r = 0; r < this.rows; r++){
        for (let c = 0; c < this.cols; c++){
          this.sk.fill(this.colourmap[r][c]);
          this.sk.rect(-this.off.x+c*this.tw,-this.off.y+r*this.th,this.tw,this.th);
        }
      }
    }
    this.sk.pop();
  }

  
}