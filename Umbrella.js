class Umbrella{
    constructor(x,y)
    {
        var options = {
            'isStatic' : true
        }
        this.body = Bodies.circle(x,y,65,options);
        this.radius = 65;
        this.image = loadImage("walking_8.png")
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        imageMode(CORNER);
        fill("red");
        image(this.image, pos.x-100, pos.y+75, 400,400);
    }
}

