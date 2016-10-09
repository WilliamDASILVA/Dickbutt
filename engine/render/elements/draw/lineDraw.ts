module Render{
	export module Draw{

		export module LineDraw{

			export function render(element, context, position, size){
				let target = element.getTarget();

				context.beginPath();
				context.moveTo(position.x, position.y);
				context.lineTo(target.x, target.y);
				context.closePath();
			}
		}
	}
}