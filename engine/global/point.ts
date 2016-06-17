class Point{

    public x: number;
    public y: number;

	constructor(x? : any, y? : any){

		// If the two variables are points, we add both points to create a new one
		if(x instanceof Point && y instanceof Point){
            this.x = x.x + y.x;
            this.y = x.y + y.y;
		}

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

	add(x : number, y : number){
        this.x += x;
        this.y += y;
	}

	addX(x : number){
        this.x += x;
	}

	addY(y : number){
        this.y += y;
	}
}
