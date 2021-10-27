class backtilemap extends tilemap{
  
 
  constructor(sketch, tex){
    super(9,9,32,32,sketch);
    this.tex = tex;
    
    this.createtiles();
    this.sel = new vector2(-1,-1);
    this.setcolourmap('rgba(255,255,255,0.0)', true);
    this.#genmap();
  }
  draw(){
    super.draw();
    //console.log(this.sel);
    this.highlightTile();
    this.sk.fill(0);
    this.sk.text('X:' + this.off.x + ' Y:' + this.off.y, 10, 380);
  }
  highlightTile(){
    if (this.sel.x != -1){
      this.sk.fill(barry); //access global value barry (in sketch.js)
      //this.sk.fill('rgba(255,255,0,0.3)');
      this.sk.rect(-this.off.x + this.sel.x*this.tw,-this.off.y + this.sel.y*this.th,this.tw,this.th);
      //console.log(this.off);
    }
  }
  //accepts a vector2 position and a bool
  selecttile(coord, clicked){
    //offset might need to be subtracted
    let loc = new vector2(this.sk.floor((this.off.x+coord.x)/this.tw),this.sk.floor((this.off.y+coord.y)/this.th));
    if (this.validTile(loc)){
      this.sel = loc;
      if (clicked){
        this.colourmap[this.sel.y][this.sel.x] = 'rgba(255,0,0,0.3)';
      }
    }
    else
      this.sel.x = -1; //deselect outside map
      
    //console.log(this.sel);
  }
  #genmap(){
  
    this.map[0] = [5,6,6,6,6,6,6,6,7];
    this.map[1] = [19,20,20,20,20,20,20,20,21];
    this.map[2] = [19,20,20,20,20,20,20,20,21];
    this.map[3] = [19,20,20,20,20,20,20,20,21];
    this.map[4] = [19,20,20,20,20,20,20,20,21];
    this.map[5] = [19,20,20,20,20,20,20,20,21];
    this.map[6] = [19,20,20,20,20,20,20,20,21]
    this.map[7] = [19,20,20,20,20,20,20,20,21]
    this.map[8] = [33,34,34,34,34,34,34,34,35];

  }
  /*
  Converts the 5x14 tilemap into a tile list
  */
  createtiles() {
    for (let r = 0; r < 5; r++){
      for (let c = 0; c < 14; c++) {
        let rect = new rectangle(c*32,r*32,32,32);
        this.tileset.push(new tile(scifitiles, rect));
        //this.tileset.push(new tile(this.tex, rect));
      }
    }
  }
  
}