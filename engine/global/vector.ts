class Vector{

    public position: Point;

	constructor(position : Point){
        this.position = position;
	}

	getLength():number{
        return Math.sqrt(this.position.x * this.position.x + this.position.y * this.position.y);
	}

	getPosition():Point{
		return this.position;
	}

}