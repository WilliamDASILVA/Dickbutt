module Render{
	export module Draw{

		export module TextDraw{

			export function render(element, context, position, size){

				context.fillStyle = element.getColor();
				context.font = element.getFontStyle() + " " + element.getFontSize() + "px " + element.getFont();
				context.textBaseline = element.getBaseline();

				if(element.getStrokeSize() != 0){
					context.strokeText(element.getValue(), position.x, position.y);
				}

				let myText = new String(element.getValue());
				let length = element.getValue().length;
				let lineHeight = element.getFontSize();
				let lineWidth = length * lineHeight;

				let numberLines = Math.ceil(lineWidth / size.width);
				let numberOfCharacterInOneLine = Math.floor(size.width / lineHeight)*1.8;
				let lines = [];
				if(lineWidth > size.width){
					numberLines = numberLines -1;
				}

				for (let i = 0; i < numberLines; i++) {
					lines[i] = [];
				};

				let currentLetter = 0;
				let currentLine = 0;
				for (let letter = 0; letter < myText.length; letter++) {								
					if(currentLetter < numberOfCharacterInOneLine){
						lines[currentLine].push(myText[letter]);
						currentLetter++;
					}
					else{
						currentLetter = 0;									
						currentLine++;
						if(!lines[currentLine]){
							lines[currentLine] = [];
						}
						lines[currentLine].push(myText[letter]);
					}
				};

				let align = element.getAlign();
				let verticalAlign = element.getVerticalAlign();
				context.textAlign = align;

				let linesHeight = lineHeight * lines.length;
				let offsetPosition = {x : 0, y : 0};

				for (let i = 0; i < lines.length; i++) {
					let myString = "";
					for (let k = 0; k < lines[i].length; k++) {
						myString = myString + lines[i][k];
					};

					if(verticalAlign == "middle"){
						offsetPosition.y = offsetPosition.y + lineHeight;									
					}														

					if(align == "center"){
						offsetPosition.x = (size.width /2);
					}

					context.fillText(myString, position.x + offsetPosition.x, position.y + offsetPosition.y);
				};

			}
		}
	}
}