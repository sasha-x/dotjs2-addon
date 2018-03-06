//alert(jQuery.fn.jquery);
//alert(document.domain);

//var src = "http://localhost/default.js";

function getOsName(){
	var OSName="Unknown OS";
	if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
	if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
	if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
	if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
	return OSName;
}

function addJs(src){
	var s = document.createElement( 'script' );
	s.setAttribute( 'src', src );
	s.onerror = function() {
	  //alert( "Ошибка: " + this.src );
	  return;
	};
	document.body.appendChild( s );
	
	return s;
}



var OSName = getOsName(); 
console.log(OSName);

var srcDir = "";

if(OSName == 'Windows'){
	srcDir = "file:///C://js//";
}else if(OSName == 'Linux'){
	//not tested yet
	srcDir = "file:///~//js//";
}else{
	//unknown src dir
	throw new Error("OS unknown");
}


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
	addJs(srcDir + file + ".js");
});
