class rope{
	constructor(body1,body2,pointA,pointB)
	{

	this.pointA = pointA;
	this.pointB = pointB;
	

	this.options = {
		bodyA:body1,
		bodyB:body2,
		pointB:{x:this.pointA,y:this.pointB}
	};

		this.con = Matter.Constraint.create({
		bodyA:body1,
		bodyB:body2,
		length:200,
		stiffness:0.1
	});
	World.add(world,this.con);
	

	}


    //create display() here 
	display(){
		var pointA = this.bodyA;
		var pointB = this.bodyB;

		strokeWeight(2);
		line(this.con.bodyA.x,this.con.bodyA.y,this.con.bodyB.x,this.con.bodyB.y);
		
	}
}
