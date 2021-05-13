class Box {
  constructor(x,y){
   var options={
     isStatic:false,
     restitution:0.8,
      friction:1.0,
      density:1.0
   }
   this.Visiblity = 225;
   this.body = Bodies.rectangle(x,y,30,40, options);
   this.image = loadImage("box.jpg");
   World.add(world, this.body);
  }

  
  
  display(){
    if(this.body.speed < 3){
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      fill("pink")
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,30,40);
      pop();
      }
      else
      {
          World.remove(world,this.body);
          push();
          this.Visiblity - this.Visiblity - 5;
          tint(255,this.Visiblity);
          //image(this.image,this.body.position.x,this.body.position.y,30,40);
          pop();
      }
  }

  score(){
    if(this.Visiblity < 0 && this.Visiblity >-105){
      score = score + 1;
    }
     }
     

  
};
