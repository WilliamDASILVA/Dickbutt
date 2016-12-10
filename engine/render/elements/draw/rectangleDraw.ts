module Render{
	export module Draw{

		export module RectangleDraw{

			export function render(element, context, position, size){
				context.beginPath();
				context.rect(position.x, position.y, size.width, size.height);
				context.closePath();
			}
		}
	}
}