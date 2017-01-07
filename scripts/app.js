

function compile() {

	var html = document.getElementById("html");
	var css = document.getElementById("css");
	var js = document.getElementById("js"); 

	//contentWindow returns Window object generated from iframe element; can access document object and then any elements
	var code = document.getElementById("code").contentWindow.document; 

	document.body.onkeyup = function() {
		code.open(); 
		code.writeln(html.value + "<style>" + css.value + "</style>" + "<script>" + js.value + "</script>");
		code.close();
	};
};

compile();