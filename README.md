# konamiJS
Add some fancy Konami easter egg functionality to your site.
![Konamicode](https://github.com/raphii97/konamiJS/blob/master/img/the-code.jpg "spooks!")

##Usage

###Init
```js
var surprise = function(){
	alert("Spooky surprise!");
};

Konami(surprise);
```

###Stop the process
The Konami function contains a method that stops its event listener: Konami.stop()

####Inside the surprise function
```js
var surprise = function(){
	alert("Spooky surprise!");
	
	//stops the event listener after calling surprise one time
	this.stop();
};

Konami(surprise);
```

####Outside

```js
var surprise = function(){
	alert("Spooky surprise!");
};

var fun = Konami(surprise);

if(condition) {
	fun.stop();
}
```

###Custom code sequence
```js
var sequence = [38, 37, 38, 37, 40, 40];

//Pass sequence as second argument
Konami(surprise, sequence);
```
