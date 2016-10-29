/*    --------------------------------------------------- *\
		Render
\*    --------------------------------------------------- */
module Render{

	var settings = {
		debug : {
			active : false,
			type : 'AABB'
		}
	};

	var vars = {
		camera : null,
		world : null,
		elementsOnScreen : 0
	};

	/*    --------------------------------------------------- *\
	        [function] setCamera(camera)
	
	        * Set the used camera *
	
	        Return: nil
	\*    --------------------------------------------------- */
	export function setCamera(camera : Camera){
		vars.camera = camera;
	}

	/*    --------------------------------------------------- *\
	        [function] setBackgroundColor(hex)
	
	        * Set default background color *
	
	        Return: nil
	\*    --------------------------------------------------- */
	export function setBackgroundColor(color : string){
		let body = document.body;
		if(body){
			body.style.backgroundColor = color;
		}
	}

	/*    --------------------------------------------------- *\
	        [function] getCamera()
	
	        * Return the used camera *
	
	        Return: camera
	\*    --------------------------------------------------- */
	export function getCamera():Camera{
		return vars.camera;
	}

	/*    --------------------------------------------------- *\
	        [function] setWorld(world)
	
	        * Set the used physics world *
	
	        Return: nil
	\*    --------------------------------------------------- */
	export function setWorld(world){
		vars.world = world;
	}

	/*    --------------------------------------------------- *\
	        [function] getWorld()
	
	        * Return the physics world used *
	
	        Return: world
	\*    --------------------------------------------------- */
	export function getWorld(){
		return vars.world;
	}

	/*    --------------------------------------------------- *\
	        [function] setDebugMode(value)
	
	        * Set the render's debug mode *
	
	        Return: nil
	\*    --------------------------------------------------- */
	export function setDebugMode(value : boolean){
		settings.debug.active = value;
	}


}