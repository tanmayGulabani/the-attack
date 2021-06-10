class Shield extends BaseClass {
    constructor(x,y){
      super(x,y,70,height-500);
    //  Matter.Body.setStatic(this.body,true)
      this.body.label = 'shield'
      this.image = loadImage("sprites/shield1.png");
    }
  }