var box1,box2
function setup() 

{
  createCanvas(400, 400);
  box1= new Box(200,100,20,20,3,4)
  box2=new Box(100,200,40,40,2,3)
}

function draw() 
{
  background(220);
  box1.show()
  box1.move()
  box1.moveup()
  box2.show()
  box2.move()
  box2.moveup()

}

