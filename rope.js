class rope{
	constructor(body1,body2,pointA,pointB)
	{
		this.pointA = pointA;
		this.pointB = pointB;

	//create rope constraint here
		var options = ({
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA,y:this.pointB},
			length:200,
			stiffness:0.1
		});

		this.rope = Constraint.create(options);

		World.add(world,this.rope);
	}


    //create display() here 
	display(){
		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;

		strokeWeight(2);
		line(pointA.x,pointA.y,pointB.x+this.pointA,pointB.y+this.pointB);
	}
}
