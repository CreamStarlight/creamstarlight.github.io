const sb_width="250px"

function sbShow() {
    document.getElementById("sidebar").style.width = sb_width;
    document.getElementById("sidebar").style.borderRight = "2px solid white";
}

function sbHide() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("sidebar").style.borderRight = "none";
}

//This function might not have many uses as of now.
function startTime(){
	var today=new Date();

    var yr=today.getFullYear();
    var mo=today.getMonth()+1;
    var da=today.getDate();

	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();

    h=checkTime(h);
	m=checkTime(m);
	s=checkTime(s);

	document.getElementById('dnt').innerHTML=yr+"/"+mo+"/"+da+" "+h+":"+m+":"+s;
	t=setTimeout(function(){startTime()},500);
}
function checkTime(i){
	if (i<10){
		i="0" + i;
	}
	return i;
}

function secretpage_darkmode(){
	var bg = document.body;
	var cont = document.getElementsByClassName("content")[0];
	if (document.getElementById('l/d').innerHTML=="☀️"){
		bg.style.backgroundColor = "#211b3e";
		cont.style.color="#ffffff";
		document.getElementById('l/d').innerHTML="🌙";
	}else{
		bg.style.backgroundColor = "#ecd8c3";
		cont.style.color="#000000";
		document.getElementById('l/d').innerHTML="☀️";
	}
	return;
}