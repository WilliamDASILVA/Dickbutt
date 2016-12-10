class Point{

    public x: number;
    public y: number;

	constructor(x? : any, y? : any){
        this.x = x || 0;
        this.y = y || 0;
	}

	set(x : number, y : number):void{
        this.x = x;
        this.y = y;
	}

	setX(x : number):void{
		this.x = x;
	}

	getX():number{
        return this.x;
	}

	setY(y : number):void{
		this.y = y;
	}

	getY():number{
        return this.y;
	}

	add(point : Point){
		return new Point(this.x + point.x, this.y + point.y);
	}

	diff(point : Point){
		return new Point(this.x - point.x, this.y - point.y);
	}

	remplace(point : Point){
		this.x = point.x;
		this.y = point.y;
	}

	addX(x : number){
        this.x += x;
	}

	addY(y : number){
        this.y += y;
	}
}
