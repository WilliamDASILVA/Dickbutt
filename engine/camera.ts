/*	--------------------------------------------------- *\
		[class] Camera()

		* Crée une camera *

		Return: camera
\*	--------------------------------------------------- */
class Camera extends Scene{

	public position : Point;
	private parentScene : Scene;
	private depth: number;
	private depthPosition: Point;
	private angle: number;
	private rotationPoint: Point;
	private isCameraLock: boolean;
	private cameraLockOn: Elements;

	/*	--------------------------------------------------- *\
			[function] constructor()
	
			* Quand une camera est crée *
	
			Return: nil
	\*	--------------------------------------------------- */
	constructor(scene : Scene){
		super();
		this.parentScene = scene;
        this.position = new Point(0,0);
		this.depth = 1;
		this.depthPosition = new Point(0,0);

		this.rotationPoint = new Point(0,0);
		this.angle = 0;

		this.isCameraLock = false;
		this.cameraLockOn = null;
	}

	/*	--------------------------------------------------- *\
			[function] setPosition()
	
			* Set la position de la camera *
	
			Return: nil
	\*	--------------------------------------------------- */
	setPosition(position : any, y? : number){
		var originPoint = this.parentScene.getOrigin();

		if(position instanceof Point){
			this.position = position.add(originPoint);
		}
		else{
            this.position = new Point(position, y);
		}
	}


	/*	--------------------------------------------------- *\
			[function] getPosition()
	
			* Get la position de la camera *
	
			Return: position
	\*	--------------------------------------------------- */
	getPosition():Point{
		return this.position;
	}

	/*	--------------------------------------------------- *\
			[function] getDepth()
	
			* Return the depth of the camera *
	
			Return: depth
	\*	--------------------------------------------------- */
	getDepth():number{
		return this.depth;
	}

	/*	--------------------------------------------------- *\
			[function] setDepth(depth)
	
			* Set the depth of the camera *
	
			Return: nil
	\*	--------------------------------------------------- */
	setDepth(depth : number){
		this.depth = depth;
	}

	/*	--------------------------------------------------- *\
			[function] setDepthPosition(x, y)
	
			* Set the position of the depth change *
	
			Return: nil
	\*	--------------------------------------------------- */
	setDepthPosition(position : Point){
		this.depthPosition = position;
	}

	/*	--------------------------------------------------- *\
			[function] getDepthPosition()
	
			* Return the position of the depth *
	
			Return: depthPosition
	\*	--------------------------------------------------- */
	getDepthPosition():Point{
		return this.depthPosition;
	}

	/*	--------------------------------------------------- *\
			[function] setRotationPoint(x, y)
	
			* Set the point of rotation *
	
			Return: nil
	\*	--------------------------------------------------- */
	setRotationPoint(position : Point){
		this.rotationPoint = position;
	}

	/*	--------------------------------------------------- *\
			[function] getRotationPoint()
	
			* Return the point of rotation *
	
			Return: nil
	\*	--------------------------------------------------- */
	getRotationPoint():Point{
		return this.rotationPoint;
	}

	/*	--------------------------------------------------- *\
			[function] setRotation(angle in degres)
	
			* Set the rotation of the camera *
	
			Return: nil
	\*	--------------------------------------------------- */
	setRotation(angle : number){
		this.angle = (angle * Math.PI)/180;
	}

	/*	--------------------------------------------------- *\
			[function] getRotation()
	
			* Return the angle of the camera *
	
			Return: angle in radian
	\*	--------------------------------------------------- */
	getRotation():number{
		return this.angle;
	}

	/*	--------------------------------------------------- *\
			[function] getOrigin()
	
			* Retourne la position d'origine de la camera *
	
			Return: position
	\*	--------------------------------------------------- */
	getOrigin():Point{
        return new Point(this.position.x - (Global.getScreenSize().width / 2), this.position.y - (Global.getScreenSize().height / 2));
	}

	/*	--------------------------------------------------- *\
			[function] lockTo(element)
	
			* Lock the camera position to a specific element *
	
			Return: nil
	\*	--------------------------------------------------- */
	lockTo(element : Elements){
		this.isCameraLock = true;
		this.cameraLockOn = element;
	}

	/*	--------------------------------------------------- *\
			[function] unlock()
	
			* Unlock the camera position *
	
			Return: nil
	\*	--------------------------------------------------- */
	unlock(){
		this.isCameraLock = false;
		this.cameraLockOn = null;
	}

	/*	--------------------------------------------------- *\
			[function] getLockElement()
	
			* Return the camera's lock element *
	
			Return: Elements
	\*	--------------------------------------------------- */
	getLockElement(){
		return this.cameraLockOn;
	}

	/*	--------------------------------------------------- *\
			[function] isLock()
	
			* Check if the camera is lock or not *
	
			Return: true, false
	\*	--------------------------------------------------- */
	isLock():boolean{
		return this.isCameraLock;
	}

}