/*	--------------------------------------------------- *\
		Global functions
\*	--------------------------------------------------- */
module Global{

	const _VERSION = "1.0.0";

	/*    --------------------------------------------------- *\
			[function] getVersion()
	
			* Return the current Dickbutt's version *
	
			Return: version
	\*    --------------------------------------------------- */
	export function getVersion():string{
		return _VERSION;
	}

	/*    --------------------------------------------------- *\
			[function] getScreenSize()
	
			* Return the screen size *
	
			Return: screenX, screenY
	\*    --------------------------------------------------- */
	export function getScreenSize(){
		var size = {
			height : null,
			width : null
		};
		if(typeof document.body != "undefined"){
			size = { width: document.body.offsetWidth, height: document.body.offsetHeight };
		}
		else{
			size = { width: window.innerWidth, height: window.innerHeight };
		}
		return size;
	}

	/*	--------------------------------------------------- *\
			[function] getDistanceBetween2Points(xA (pointA), xB (pointB), yA, yB)
	
			* Retourne la distance entre deux points *
	
			Return: distance
	\*	--------------------------------------------------- */
	export function getDistanceBetween2Points(aX : any, aY : any, bX? : number, bY? : number):number{
		if(isNaN(aX) && aX.constructor == Point && isNaN(aY) && aY.constructor == Point){
			return Math.sqrt(Math.pow((aY.x - aX.x), 2) + Math.pow((aY.y - aX.y), 2));
		}
		else{
			return Math.sqrt(Math.pow((bY - aY), 2) + Math.pow((bX - aX), 2));
		}
	}

	/*    --------------------------------------------------- *\
			[function] getPositionFromScreen(screeX, screenY, cam)
	
			* Retourne une position dans le world selon la position sur l'écran *
	
			Return: position
	\*    --------------------------------------------------- */
	export function getPositionFromScreen(screenX, screenY, cam):Point{
		var position = cam.getOrigin();
		var depth = cam.getDepth();

		var actual = { x: (position.x + screenX) / depth, y: (position.y + screenY) / depth };
		return new Point(actual.x, actual.y);
	}

	/*    --------------------------------------------------- *\
			[function] getPositionFromWorld(worldX, worldY, cam)
	
			* Retourne une position dans le screen selon la position sur le world *
	
			Return: position
	\*    --------------------------------------------------- */
	export function getPositionFromWorld(worldX, worldY, cam):Point{
		var position = cam.getOrigin();
		var depth = cam.getDepth();

		var actual = {x : (worldX - position.x) * depth, y : (worldY - position.y) * depth};
		return new Point(actual.x, actual.y);
	}

	/*    --------------------------------------------------- *\
			[function] findRotation(x (pointA), y (pointB), x, y)
	
			* Find the rotation between two points *
	
			Return: rotation
	\*    --------------------------------------------------- */
	export function findRotation(x1 : any,y1 : any, x2? : number,y2? : number): number{
		if(x1 instanceof Point && y1 instanceof Point){
			var t = -(Math.atan2(y1.x - x1.y, y1.y-x1.y) * (180/Math.PI));
		}
		else{
			var t = -(Math.atan2(x2 - x1, y2 - y1) * (180/Math.PI));

		}
		if(t < 0){
			t += 360;
		}

		return t;
	}

	/*    --------------------------------------------------- *\
			[function] getRandom(min, max)
	
			* Retourne un nombre random entre min & max *
	
			Return: number
	\*    --------------------------------------------------- */
	export function getRandom(min : number, max : number):number{
		return Math.random() * (max - min) + min;
	}

	/*    --------------------------------------------------- *\
			[function] getTrunc(x)
	
			* Retourne une valeur tronqué d'un nombre décimal *
	
			Return: number
	\*    --------------------------------------------------- */
	export function getTrunc(x : number):number {
		return x < 0 ? Math.ceil(x) : Math.floor(x);
	}

	/*    --------------------------------------------------- *\
			[function] isAndroid()
	
			* Check si on tourne sous Android ou non *
	
			Return: true, false
	\*    --------------------------------------------------- */
	export function isAndroid():boolean{
		// Using Cordova element instead
		if(window.hasOwnProperty("cordova")){
			if(window['cordova'].platformId == "android"){
				return true;
			}
			else{
				return false;
			}
		}
		else{
			return false;
		}
	} 

	/*    --------------------------------------------------- *\
			[class] XHR()
	
			* Crée une request XHR *
	
	\*    --------------------------------------------------- */
	export function XHR(target : string, ...parameters : any[]){
		return new window['Promise']((resolve, reject) => {
			let request;
			try{
				request = new XMLHttpRequest();
			}
			catch(e){
				try{
					request = new ActiveXObject("Msxml2.XMLHTTP");
				}
				catch(e){
					try{
						request = new ActiveXObject("Microsoft.XMLHTTP");
					}
					catch(e){
						reject(e);
					}
				}
			}

			let requestType = "GET";
			if(parameters[0]){
				requestType = parameters[0];
			}

			request.open(requestType, target, true);            
			if(parameters[1]){
				request.responseType = parameters[1];
			}

			request.send(null);
			request.addEventListener("readystatechange", (response) => {
				if(response.target.status == 200){
					resolve(response.target);
				}
				else{
					reject(response.target);
				}
			});
		});
	}
}
