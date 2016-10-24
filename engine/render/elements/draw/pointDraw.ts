module Render{
	export module Draw{

		export module PointDraw{

			export function render(element, context, position, size){
				context.beginPath();
				context.moveTo(position.x - 5, position.y);
				context.lineTo(position.x + 5, position.y);
				context.moveTo(position.x, position.y - 5);
				context.lineTo(position.x, position.y + 5);
				context.closePath();
			}
		}
	}
}