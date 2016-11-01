/*    --------------------------------------------------- *\
		Render : Layer
\*    --------------------------------------------------- */
module Render{

	/*    --------------------------------------------------- *\
	        [function] orderElements(elements)
	
	        * Order elements by depth *
	
	        Return: elements
	\*    --------------------------------------------------- */
	function orderElements(elements){
		return elements.sort((a, b) => {
			a.depth = a.depth || 0;
			b.depth = b.depth || 0;

			if (a.depth < b.depth) {
				return -1;
			}
			else if (a.depth > b.depth) {
				return 1;
			}
			else{
				return 0;
			}
		});
	}

	/*    --------------------------------------------------- *\
	        [function] cameraTransformation(context)
	
	        * Do all the camera transformations *
	
	        Return: nil
	\*    --------------------------------------------------- */
	function cameraTransformation(context){
		let camera = Render.getCamera();
		let screen = Global.getScreenSize();

		// Scale
		context.translate(screen.width/2, screen.height/2);
		context.scale(camera.getDepth(), camera.getDepth());
		context.translate((-screen.width/2),(-screen.height/2));

		// Rotate
		context.translate(screen.width/2, screen.height/2);
		context.rotate((camera.getRotation() * Math.PI) / 180);
		context.translate(-screen.width/2, -screen.height/2);

		// Rotate the canvas
		if(camera.getRotation() != 0){
			let rotationPoint = camera.getRotationPoint();
			context.translate(rotationPoint.x, rotationPoint.y);
			context.rotate(camera.getRotation());
			context.translate(-rotationPoint.x, -rotationPoint.y);
		}
	}

	/*    --------------------------------------------------- *\
	        [function] update(layer)
	
	        * Dispatch render functions *
	
	        Return: nil
	\*    --------------------------------------------------- */
	export function update(layer : Render.Layer){

		let canvas = layer.getCanvas();
		let context = layer.getContext();
		let elements = layer.getElements();
		elements = orderElements(elements);

		let screen = Global.getScreenSize();
		let camera = Render.getCamera();

		if(context && canvas){
			context.clearRect(0,0, screen.width, screen.height);
			context.save();

			// Canvas smooth
			context.mozImageSmoothingEnabled = layer.isSmooth();
			context.msImageSmoothingEnabled = layer.isSmooth();
			context.imageSmoothingEnabled = layer.isSmooth();


			// Camera transformations
			if(layer.affectedByCamera){
				cameraTransformation(context);
			}


			// Dispatch each elements depending on the type
			for(let element of elements){
				if(element.getType() == "draw" || element.getType() == "drawable"){
					Render.DrawableDraw.dispatch(element, context);
				}
				else{
					let assignedDrawables = element.getAssignedDrawables();
					for(let el of assignedDrawables){
						Render.DrawableDraw.dispatch(el, context);
					}
				}
			}

			context.restore();
		}
	}

}