
function o(){
	const e=document.getElementById("DESULTORYSIGNALS");
	if(!e){return 1;}
	const p=Math.floor(Math.random()*10+15);
	var s="";
	for(var i=1;i<=p;i++){
		s=s+String.fromCharCode(Math.floor(Math.random()*93.999)+33);
	}
	e.textContent=s;
    return 0;
}

setInterval(o, 200);