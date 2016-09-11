/*    --------------------------------------------------- *\
		Render : Download
\*    --------------------------------------------------- */
module Render{

	var vars = {
		files : [],
		imagePrefix : './'
	};


	/*    --------------------------------------------------- *\
			[function] add(filePath, blocker)
	
			* Add the current file to be downloaded, if blocker is passed
			then if the download fails for that file, it fails for everything *
	
			Return: nil
	\*    --------------------------------------------------- */
	export function add(filePath : string, blocker = false){
		var file = {
			path : filePath,
			downloaded : false,
			blocker : blocker
		};

		vars.files.push(file);
	}

	/*    --------------------------------------------------- *\
			[function] download()
	
			* Download all the files that has been added *
	
			Return: promise
	\*    --------------------------------------------------- */
	export function download(){
		var downloaded = 0;

		return new window['Promise']((resolve, reject) => {

			if(vars.files.length == 0){
				resolve(downloaded);
			}

			for(let file of vars.files){
				var obj = new Image();
				obj.src = vars.imagePrefix + file.path;
				var path = file.path;
				
				obj.addEventListener("error", (e) => {
					if(file.blocker){
						reject(e);
					}
					else{
						downloaded++;
					}
				});

				obj.addEventListener("load", () => {
					for(let file of vars.files){
						if(file.path == path){
							file.downloaded = true;
							downloaded++;
						}
					}
					
					// All the downloads are done
					if(downloaded == vars.files.length){
						resolve(downloaded);
					}
				});
			}
		});
	}

}