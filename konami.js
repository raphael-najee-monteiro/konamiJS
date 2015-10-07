function Konami(surprise, sequence){

	//custom code sequence or default Konami code
	var code = sequence || [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
	var code_length = code.length - 1;

	//counter to iterate over code array
	var counter = 0;

	//checking if input corresponds to sequence
	var check = function(input){

		if(code[counter] == input.keyCode){

			//if sequence completed
			if(counter == code_length){
				//reset counter
				counter = 0;

				//launching the custom function
				surprise();
			}else{
				//go to next keycode in code array
				counter++;
			}
			
		}else{
			//reset counter
			counter = 0;
		}

	};

	//initiate input listener
	window.addEventListener('keydown', check);

	//remove listener
	this.stop = function(){
		window.removeEventListener('keydown', check);
	};

}