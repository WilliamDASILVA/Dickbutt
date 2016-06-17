/*	--------------------------------------------------- *\
		[class] Scene()

		* Crée une scene *

\*	--------------------------------------------------- */
class Scene{
	
	origin: Point;

	/*	--------------------------------------------------- *\
			[function] constructor()
	
			* Quand une scene est crée *
	
			Return: nil
	\*	--------------------------------------------------- */
	constructor(){
		this.origin = new Point(0,0);
	}

	/*	--------------------------------------------------- *\
			[function] getOrigin()
	
			* Retourne l'origin *
	
			Return: origin
	\*	--------------------------------------------------- */
	getOrigin():Point{
		return this.origin;
	}


}