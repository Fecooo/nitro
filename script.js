var karakterek = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789"

function onLoadFunctions() {
	main();
}
window.onload = onLoadFunctions

function main() {
for (let i = 0; i < 1; i++) {
	let nitroURL = "https://discord.gift/";

	for (let j = 0; j < 16; j++) {
		let randomChar = Math.floor(Math.random() * karakterek.length);
		nitroURL += karakterek[randomChar];
	}
		document.getElementById("link").innerHTML = nitroURL;
	}
}

function copyToClipboard() {
	const str = document.getElementById('kodok').innerText
	const el = document.createElement('textarea')
	el.value = str
	el.setAttribute('readonly', '')
	el.style.position = 'absolute'
	el.style.left = '-9999px'
	document.body.appendChild(el)
	el.select()
	document.execCommand('copy')
	document.body.removeChild(el)
}

var timeleft = 30;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  document.getElementById("remain").innerHTML = timeleft-1;
  document.getElementById("progressBar").value = 31 - timeleft;
  timeleft -= 1;
  if (timeleft == 0) {
    	timeleft = 30;
		main();
  }
}, 1000);
