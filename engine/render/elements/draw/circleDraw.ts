module Render{
	export module Draw{

		export module CircleDraw{

			export function render(element, context, position, size){
				let radius = element.getRadius();

				context.beginPath();
				context.arc(position.x, position.y, radius, 0, 2 * Math.PI, false);
				context.closePath();
			}
		}
	}
}