module Render{

	export module SpriteDraw{

		export function render(element, context, position, size){
			if(element.isSprite()) {
				let currentFrame = element.getCurrentFrame();
				let frameSize = element.getFrameSize();
				let frameLine = element.getFrameLine();

				let data = element.getData();

				context.drawImage(data, Math.ceil(frameSize.width * currentFrame), Math.ceil(frameSize.height * frameLine), Math.ceil(frameSize.width), Math.ceil(frameSize.height), Math.ceil(position.x), Math.ceil(position.y), Math.ceil(size.width), Math.ceil(size.height));
			}
		}
	}
}