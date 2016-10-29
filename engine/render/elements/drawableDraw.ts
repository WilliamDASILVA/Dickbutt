module Render{

	export module DrawableDraw{

		export function render(element, context, position, size){
			if(element.getData()){
				if(!element.isSprite()){
					let data = element.getData();
					let cropArea = {
						x : 0,
						y : 0,
						width : data.width,
						height : data.height
					};

					if(element.isCropped()){
						cropArea = element.getCrop();
					}

					context.drawImage(data, cropArea.x, cropArea.y, cropArea.width, cropArea.height, position.x, position.y, size.width, size.height);
				}
			}
		}

		export function dispatch(element, context){
			if(element){
				let position = element.getPosition();
				let size = element.getSize ? element.getSize() : { width : 1, height : 1 };
				let screen = Global.getScreenSize();

				// Apply element's position change made by the camera
				let tempPos = { x: position.x, y: position.y };
				if(!element.isFixed()){
					let cameraPosition = Render.getCamera().getPosition();
					tempPos.x = position.x + ((screen.width / 2) - cameraPosition.x);
					tempPos.y = position.y + ((screen.height / 2) - cameraPosition.y);
				}

				// Check for boundaries
				//console.log(tempPos, size, screen);
				if(tempPos.x >= -size.width && tempPos.x <= screen.width
				&& tempPos.y >= -size.height && tempPos.y <= screen.height){
					context.save();

					// flipped
					if (element.isFlipped(null)) {
						context.scale(-1, 1);
		                position.x = -position.x - size.width;
					}

					// element opacity
					context.globalAlpha = element.getOpacity();

					// smooth
					if(!element.isSmooth()){
						context.mozImageSmoothingEnabled = false;
						context.imageSmoothingEnabled = false;
					}
					// rotation
		            let rotationPoint = element.getRotationPoint();
		            if (element.fixedToCenter) {
		                rotationPoint.x = tempPos.x + (size.width / 2);
		                rotationPoint.y = tempPos.y + (size.height / 2);
		            }

					if (element.getRotation() != 0) {
						context.translate(rotationPoint.x, rotationPoint.y);
						context.rotate(element.getRotation() * (Math.PI / 180));
						context.translate(-rotationPoint.x, -rotationPoint.y);
					}


					// Do calculations for AABB in screen
					switch(element.getType()){
						case "draw":
							Render.DrawDraw.dispatch(element, context, tempPos, size);
							break;
						case "drawable":
							if(element.isSprite()){
								Render.SpriteDraw.render(element, context, tempPos, size);
							}
							else{
								Render.DrawableDraw.render(element, context, tempPos, size);
							}
							break;
					}

					context.restore();
				}

			}
		}

	}

}