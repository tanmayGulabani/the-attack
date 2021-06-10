class Cannon2 extends BaseClass {
    constructor(x, y, width, height){ 
      super(x,y,width,height);
      Matter.Body.setStatic(this.body, true);
      this.image = loadImage("sprites/cannon3.png");
    }
}