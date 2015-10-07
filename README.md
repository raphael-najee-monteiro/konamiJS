# konamiJS
Make your site more fun and interactive with a small framework that lets you add Konami code functionality easily.

##usage

```js
//easter egg
var surprise = function(){
	alert("Spooks!");

	//stop Konami process after being run one time
	this.stop();
};


//init Konami with default Konami sequence: 
//up, up, down, down, left, right, left, right, b, a
var fun = Konami(surprise);


//custom code sequence
var sequence = [38, 37, 38, 37, 40, 40];

//Pass custom sequence as second argument
var fun2 = Konami(surprise, sequence);
```
