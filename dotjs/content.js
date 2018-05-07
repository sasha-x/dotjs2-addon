//var src = "http://localhost:8000/default.js";		//https://localhost/default.js

function getOsName(){
	var OSName="Unknown OS";
	
	console.log(navigator);
	if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
	if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
	if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
	if (navigator.platform.indexOf("Linux")!=-1) OSName="Linux";
	return OSName;
}

function addJs(src){
	var s = document.createElement( 'script' );
	s.src = src;
	s.onerror = function() {
	  console.log( "Error on script load: " + this.src );
	  return;
	};
	//s.setAttribute( 'defer', defer );
	s.async = false;
	document.body.appendChild( s );
	
	return s;
}

function addJQueryTag(){
	var src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js';
	var script = document.createElement("script");
	var scriptId = 'jqueryTestAndAppend';
	script.id = scriptId;
	script.type = "text/javascript";
	script.innerHTML = 'if (typeof jQuery == "undefined") {'+
		'console.log("Need jquery load");'+
		'var script = document.createElement("script");'+
		'script.type = "text/javascript";'+
		'script.async = false;'+
		'document.head.appendChild(script);'+
		//'document.body.insertBefore(script, document.getElementById("'+scriptId+'").nextSibling);'+
		'script.onload = function() {console.log("jquery loaded");};'+
		'script.src = "'+ src +'";'+
	'}';
	
	
	
	console.log(script);
	document.body.appendChild(script);
	console.log('appended');
}

var OSName = getOsName(); 
console.log(OSName);

var srcDir = "";

/*if(OSName == 'Windows'){
	srcDir = "file:///C://js//";
}else if(OSName == 'Linux'){
	//not tested yet
	srcDir = "file:///~//js//";
}else{
	//unknown src dir
	throw new Error("OS unknown");
}*/

addJQueryTag();

var baseUrl = "http://127.0.0.1:8000/";

var domain = document.domain;
console.log(domain);

var prefix = "www.";
if(domain.indexOf(prefix) === 0){
	domain = domain.substring(4);
}

var files = ['default'];

var dot,
	lvl = domain.split(".").length - 1;

for (var i = 0; i < lvl; i++) {
      files.push(domain);
      dot = domain.indexOf('.');
      domain = domain.substring(dot + 1);
}

files.forEach(function(file) {
	addJs(baseUrl + file + ".js");
});
