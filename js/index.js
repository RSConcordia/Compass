var app = {			
	
	};
	
	var contador = 0;	
	
	function start(){
		navigator.compass.getCurrentHeading(onSuccess, onError);
	}	
	
	function onSuccess(heading) {
		var compass = heading.magneticHeading;
		var compass = parseInt(compass); 
		
		if (contador < 5){
		document.getElementById('status').innerHTML += "<br> "+contador+" - "+compass;
		contador++;
		setTimeout(start, 800);
		}else
		{
		document.getElementById('status').innerHTML += "<br>--§--";
		}
	};

	function onError(compassError) {
		alert('Compass error: ' + compassError.code);
	};

