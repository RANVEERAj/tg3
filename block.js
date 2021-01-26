class Block{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :0.0,
          //isStatic:true
         
      }
      this.visibility = 225;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
    }
   
    display(){
      fill ("green")
    //  console.log(this.body.speed);
      if(this.body.speed <6){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }else{
    push();
      this.visibility = this.visibility -5;
      pop();
      World.remove(world, this.body);
      console.log(this.visibility)
      
    }
  }
  score() {
    if(this.visibility < 0 && this.visibility > -105){
        score++;
    }
  }
}