class tile{
  /*
  loaded image to reference
  rectangle portion of the image
  */
  constructor(img, portion)
  {
      this.img = img;
      this.r = portion;
  }
  get x() {return this.r.x;}
  get y() {return this.r.y;}
  get w() {return this.r.w;}
  get h() {return this.r.h;}
  
}