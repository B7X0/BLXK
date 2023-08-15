const param = window.location.search;
const urlpa = new URLSearchParams(param);
if (urlpa.has('k')) {
	const usr = urlpa.get('k');
	document.getElementById("kn").value = usr;
}
else{
	window.location.replace("https://x.bitlight.cc");
}

function copy() {
    var vale = document.getElementById("kn");
    if (vale.value === "") {
        alert("No key here '-'");
    }else{
        vale.select(); 
        vale.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(vale.value);
        alert("Key copied to clipboard!");
    }    
}
