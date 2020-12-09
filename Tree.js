class Tree{
    constructor(x,y){
        var options = {
            isStatic: true,
            density: 1.2
        }
        this.body = Bodies.rectangle(x, y, 10, 10, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("tree.png");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 700, 700);
        pop();
    }
}