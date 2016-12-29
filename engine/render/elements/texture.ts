module Render {
	
	const image_prefix = "./";
	const textures = {};

	/*	--------------------------------------------------- *\
			[class] Texture()
	
			* Create an image element *
	
	\*	--------------------------------------------------- */
	export class Texture {
		private src : string;
		private data: any;

		/*	--------------------------------------------------- *\
				[function] constructor()
		
				* Quand on crée une texture *
		
				Return: nil
		\*	--------------------------------------------------- */
		constructor(src: string) {
			this.src = image_prefix + src;
			this.data = new Image();
			this.data.src = image_prefix + src;
		}

		/*	--------------------------------------------------- *\
				[function] getData()
		
				* Retourne l'image *
		
				Return: data
		\*	--------------------------------------------------- */
		getData() {
			if (this.data) {
				return this.data;
			}
			else {
				return false;
			}
		}

		/*	--------------------------------------------------- *\
				[function] setSrc(src)
		
				* Set une nouvelle src pour la texture *
		
				Return: nil
		\*	--------------------------------------------------- */
		setSrc(src: string) {
			this.data.src = image_prefix + src;
			this.src = image_prefix + src;
		}

		/*	--------------------------------------------------- *\
				[event] onLoad()
		
				* Quand la texture est chargé *
		
		\*	--------------------------------------------------- */
		onLoad(functionToCall: any) {
            var func = functionToCall;
            var texture = this;
            this.getData().addEventListener("load", function() {
                func(texture);
            });
		}
	}

	/*	--------------------------------------------------- *\
			[function] createTexture(name, path)
	
			* Create a texture and save it *
	
	\*	--------------------------------------------------- */
	export function createTexture(textureName : string, texturePath : string){
		if(textureName && texturePath){
			let texture = new Render.Texture(texturePath);
			textures[textureName] = texture;
		}
	}

	/*	--------------------------------------------------- *\
			[function] getTexture(name)
	
			* Return the associated texture *
	
	\*	--------------------------------------------------- */
	export function getTexture(textureName){
		if(textureName){
			return textures[textureName];
		}
	}
}