
	 
	document.getElementById('circle').innerHTML += '<li style=" right:85%; transform: rotateZ(270deg) translateX(125px); -webkit-transform: rotateZ(270deg) translateX(125px); position: absolute;transition: all .25s;width: 20px; height: 20px;transition: all .5s; font-size:42px;color: #F00;transition: all .25s linear .25s;">➢</li>';
	 
	for(i=0;i < 60;i++){	
		var set = ((i%2) == 0) ? '-' : ' ';
		document.getElementById('circle').innerHTML += '<li style=" transform: rotateZ('+i*6+'deg) translateX(90px); -webkit-transform: rotateZ('+i*6+'deg) translateX(105px); position: absolute;transition: all .25s;width: 20px; height: 20px;transition: all .5s;color: #a1a1a1;transition: all .25s linear .25s;">'+set+'</li>';
	}
	
 	document.addEventListener("deviceready", function(){
		var compass = navigator.compass.watchHeading(
			function onSuccess(heading){
				var a = parseInt(heading.magneticHeading) ;
				document.getElementById('rosadosventos').style.transform = 'rotateZ(-'+a+'deg) translateX(0px)';
				document.getElementById('rosadosventos').style.webkitTransform  = 'rotateZ(-'+a+'deg) translateX(0px)';
			},
			function error(e){
				document.getElementById('status').innerHTML = e.message; 
			});
	}, false);