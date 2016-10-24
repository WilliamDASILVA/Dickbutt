module Render{

	export module DrawDraw{

		export function dispatch(element, context, position, size){
			if(element){
				let mod = null;

				// shadow
				if(element.isShadowEnabled()){
					let shadowPosition = element.getShadowPosition();

					context.shadowColor = element.getShadowColor();
					context.shadowBlur = element.getShadowBlur();
					context.shadowOffsetX = shadowPosition.x;
					context.shadowOffsetY = shadowPosition.y;
				}

				switch(element.getShape()){
					case "circle":
						mod = 'CircleDraw';
						break;
					case "line":
						mod = 'LineDraw';
						break;
					case "point":
						mod = 'PointDraw';
						break;
					case "polygon":
						mod = 'PolygonDraw';
						break;
					case "rectangle":
						mod = 'RectangleDraw';
						break;
					case "text":
						mod = 'TextDraw';
						break;
				}

				if(mod){
					Render.Draw[mod].render(element, context, position, size);
				}

				// Fill
				context.fillStyle = element.getColor();
				if(mod != "TextDraw"){
					context.fill();
				}

				// Stroke
				if (element.getStrokeSize() != 0) {
					context.lineWidth = element.getStrokeSize();
					context.strokeStyle = element.getStrokeColor();
					context.stroke();
				}
			}
		}

	}
}