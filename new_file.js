var caught = 0;

function mclick() {
	caught++;
	document.getElementById("count").innerHTML = caught;
}

function start() {
	interval = setInterval(RandomPositions, 750);
}

function stop() {
	clearInterval(interval);
}

function RandomPositions() {
	var mole1 = document.getElementById("mole");
	var M1x = Math.floor(Math.random() * 700);
	var M1y = Math.floor(Math.random() * 700);
	mole.style.left = M1x + 'px';
	mole.style.top = M1y + 'px';
}

