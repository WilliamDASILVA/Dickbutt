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
		world : null
	};


	/*    --------------------------------------------------- *\
	        [function] setCamera(camera)
	
	        * Set the used camera *
	
	        Return: nil
	\*    --------------------------------------------------- */
	export function setCamera(camera){
		vars.camera = camera;
	}

	/*    --------------------------------------------------- *\
	        [function] getCamera()
	
	        * Return the used camera *
	
	        Return: camera
	\*    --------------------------------------------------- */
	export function getCamera(){
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