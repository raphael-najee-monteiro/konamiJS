function KonamiCode(win_func){
	var self = this;
	//storing all the inputs
	this.input = [];

	//the correct sequence of inputs (up: 38, down: 40, left: 37, right: 39, b: 66, a: 65, enter: 13)
	this.ok = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];	//DA KONAMI CODE

	//function that compares both arrays
	this.check = function(a, b){
		//var for counting the numbers of correct sequences
		var c = 0;

		//looping trough the array
		for (var i in a) {
			if (a[i] === b[c]) {
				//if all values are the same return true
				if (c === (b.length - 1)) {

					//reset input array
					a.length = 0;

					return true;
				}
				c++;
			}
			//else input sequence does not correspond to konami sequence
			else{c = 0;}
		}

		//if array to big with incorrect sequence
		/*
		if(self.input.length >= self.ok.length){
			self.input = [];
		}
		*/

	};

	//the event listener
	this.keyListener = function(){
		window.onkeydown = function (e) {
			//push the key pressed into the input array
			self.input.push(e.keyCode);

			//call check function which returns true if both arrays are the same
			if (self.check(self.input, self.ok)) {
				self.input = [];
				self.win();
			}
		};
	};

	//launching the custom function
	this.win = function(){
		win_func();
	};

	//init the listener
	return self.keyListener();
}
