module Render{

	export module ElementDraw{

		export function dispatch(element, context, position, size){
			let assignedDrawables = element.getAssignedDrawables();
			for(let el of assignedDrawables){
				if(el.isSprite()){
					Render.SpriteDraw.render(el, context, position, size);
				}
				else{
					Render.DrawableDraw.render(el, context, position, size);
				}
			}
		}

	}

}