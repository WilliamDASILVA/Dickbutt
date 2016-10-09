module Render{
	export module Draw{

		export module PolygonDraw{

			export function render(element, context, position, size){
				context.beginPath();
				for (var i = 0; i < element.getVertices().length; ++i) {
					var vertice = element.getVertices()[i];								
					if(i == 0){
						context.moveTo(vertice.x + position.x, vertice.y + position.y);
					}
					else{
						context.lineTo(vertice.x + position.x, vertice.y + position.y);
					}
				}
				context.closePath();
			}
		}
	}
}