
	var ball   = document.querySelector('.ball');
	var garden = document.querySelector('.garden');
	var output = document.querySelector('.output');

	var maxX = garden.clientWidth  - ball.clientWidth;
	var maxY = garden.clientHeight - ball.clientHeight;

	function handleOrientation(event) {
		var x = event.beta;  // In degree in the range [-180,180]
		var y = event.gamma; // In degree in the range [-90,90]

		output.innerHTML  = "</i style='color: #70010a;'>β</i>: " + x + "\n";
		output.innerHTML += "</i style='color: #70010a;'>γ</i>: " + y + "\n";

		if (x >  90) { x =  90};
		if (x < -90) { x = -90};

		x += 90;
		y += 90;

		ball.style.top  = (maxX*x/180 - 10) + "px";
		ball.style.left = (maxY*y/180 - 10) + "px";
	}

	function start(){
		window.addEventListener('deviceorientation', handleOrientation);
	}