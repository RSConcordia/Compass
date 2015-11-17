var app = {			
	
	};
	
	function start(){
		var watchID = navigator.compass.watchHeading(onSuccess, onError);
	}	
	
	function onSuccess(heading) {
		var element = document.getElementById('status');
		element.innerHTML = 'Heading: ' + heading.magneticHeading;
	};

	function onError(compassError) {
		alert('Compass error: ' + compassError.code);
	};

