function navFunction() {
	var x = document.getElementById("Topnav");
	if (x.className === "navbar") {
		x.className += " responsive";
	} else {
		x.className = "navbar";
	}
}

function dropFunction() {
	document.getElementById("sub-menu").classList.toggle("show");
}

window.onclick = function(e) {
	if (!e.target.matches('.dropbtn')) {
		var subMenu = document.getElementById("sub-menu");
			if (subMenu.classList.contains('show')) {
				subMenu.classList.remove('show');
			}
	}
}