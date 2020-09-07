class Box{
    constructor(){
        var options={
         isStatic: true
        }
        
    this.image=loadImage("dustbingreen.png");
    this.bodybottom=Bodies.rectangle(1000,615,200,20,options);
    this.width=width;
    this.height=height;

    this.bodyleft=Bodies.rectangle(910,610,20,100,options);
    this.width1=width;
    this.height1=height;

    this.bodyright=Bodies.rectangle(1090,610,20,100,options);
    this.width2=width;
    this.height2=height;

   World.add(world,this.bodybottom);
   World.add(world,this.bodyleft);
   World.add(world,this.bodyright);
    }
    display(){
      
        push();
    var bottom=this.bodybottom.position;
    var left=this.bodyleft.position;
    var right=this.bodyright.position;

   
    imageMode(CENTER);
    fill(255);
    image(this.image,bottom.x,bottom.y,200,100);
    rect(left.x,left.y,20,100);
    rect(right.x,right.y,20,100,)
    pop();
    }
}