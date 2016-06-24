	
	function onSuccess(heading){
		document.getElementById('needle').style.transform = 'rotateZ('+parseInt(heading.magneticHeading)+'deg) translateX(0px)';
		document.getElementById('needle').style.webkitTransform  = 'rotateZ('+parseInt(heading.magneticHeading)+'deg) translateX(0px)';
		document.getElementById('circle').style.transform = 'rotateZ('+parseInt(heading.magneticHeading)+'deg) translateX(0px)';
		document.getElementById('circle').style.webkitTransform  = 'rotateZ('+parseInt(heading.magneticHeading)+'deg) translateX(0px)';
	};
	
	function onError(error){
		 alert('CompassError: ' + error.code);
	};

	for(i=0;i < 60;i++){
		var set = ((i%2) == 0) ? '-' : ' ';
		document.getElementById('circle').innerHTML += '<li style=" transform: rotateZ('+i*6+'deg) translateX(90px); -webkit-transform: rotateZ('+i*6+'deg) translateX(90px); position: absolute;transition: all .25s;width: 20px; height: 20px;transition: all .5s;color: #a1a1a1;transition: all .25s linear .25s;">'+set+'</li>';
	}
	
	document.addEventListener("deviceready", function(){
		var watchID = navigator.compass.watchHeading(onSuccess, onError, {frequency: 500});
	}, false);
