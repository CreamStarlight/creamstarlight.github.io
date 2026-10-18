var sb_width="250px";

const specialDays_sol={
	[1.01]:{
		day: "New Year",
		bc: "Happy New Year, everyone!"
	},
	[2.14]:{
		day: "Valentine's Day",
		bc: "It's Valentine's Day already? Well... I wish on every couple you can have a great life together!"
	},
	[3.08]:{
		day: "International Women's Day",
		bc: "It's International Women's Day. Please don't exert yourselves too much, fellow girls."
	},
	[4]:{
		day: "April Fools",
		bc: "Happy April Fools! Don't play those jokes on me though, I'm not exactly a great person in sensing jokes."
	},
	[4.10]:{
		day: "Cream's birthday",
		bc: "If you happen to see this message, it must be that my birthday has come. Sooo... You got anything you wanna say to me? :P"
	},
	[5.01]:{
		day: "International Worker's Day",
		bc: "Yo, Worker's Day coming? Well, please remember that labor is a kind of glory! (But no please don't overexert yourselves)"
	},
	[5.04]:{
		day: "International Youth Day",
		bc: "Youth Day. ...Of course. We carry the power of changing the world. Use it the right way and we can make the future brighter."
	},
	[6.01]:{
		day: "International Children's Day",
		bc: "Woah, Children's Day already? Well, I hope you can have some great fun today, and don't forget to be a good kid!"
	},
	[7.01]:{
		day: "CPC Founding Day",
		bc: "Fellow Chinese. ...Please remember how we've come all the way to now."
	},
	[8.01]:{
		day: "PLA Day",
		bc: "Salute to our soldiers, fellow Chinese! Things wouldn't be so peaceful for us if they don't exist."
	},
	[9.10]:{
		day: "[Chinese] Teacher's Day",
		bc: "Hmm... It's Teacher's Day. Maybe give your teachers a few flowers? Or at least express your gratitude or something? Y'know, they've done all the education stuff for you."
	},
	[10.01]:{
		day: "China's National Day",
		bc: "\"Arise! ye who refuse to be bond slaves! With our very flesh and blood, let us build our new Great Wall!\" - March of the Volunteers"
	},
	[10.31]:{
		day: "Halloween",
		bc: "Booo! Trick or Treat! ...Kidding. Happy Halloween! Have a great day booing others (positively), and be a spooky nicey!!!"
	},
	[12.13]:{
		day: "Nanjing Massacre Memorial Day",
		bc: "Today is the Nanjing Massacre Memorial Day. Please remember the history, and never forget the past. We will NOT allow it to happen again.",
		grayscale: true
	},
	[12.25]:{
		day: "Christmas",
		bc: "Merry Christmas everyone! Jingle bells... Oh, and reminder: Noelle Holiday might be having fun somewhere with Kris, Susie etc."
	},
	[12.31]:{
		day: "New Year's Eve",
		bc: "The one brand new year is about to come. Are you ready for it? Let's start it fresh, in a way we will not regret."
	}
}

const specialDays_lun={
	[1.01]:{
		day: "Spring Festival / Lunar New Year",
		bc: "Heya there, it's the Spring Festival! Well, you should totally have some dumplings here."
	},
	[1.15]:{
		day: "Lantern Festival",
		bc: "Hmm, I wonder if those of your neighborhood actually, like, hang lanterns for this. Also, enjoy the riddles!"
	},
	[5.05]:{
		day: "Dragon Boat Festival",
		bc: "Dragon Boat Coming In Hot-!! Get yourself some zongzi as they're quite popular out here at this time."
	},
	[7.07]:{
		day: "Double Seventh Festival",
		bc: "Double Seventh? More like China's Valentines Day. Have a great day with your loved ones, and don't forget to express your love!"
	},
	[7.15]:{
		day: "Ghost Festival",
		bc: "Heard ghosts out ther- wait, even if there are, they won't spook you. In China, we usually do something for our deceased loved ones. Dunno what you'd do though... suppose regions differ."
	},
	[8.15]:{
		day: "Mid-Autumn Festival",
		bc: "The moon shines unbelievably bright today. You should go out and have a look. And maybe, if you've got some moon cakes, you can enjoy them!"
	},
	[9.09]:{
		day: "Double Ninth Festival",
		bc: "Oh, it's Double Ninth already? I heard that chrysanthemums might be popular for this day. Maybe you can make tea out of them?"
	},
	[12.08]:{
		day: "Laba Festival",
		bc: "...Um, no, I dislike these... weird-looking porridge. It seems you might be interested in them though. ...After all, it's Laba."
	},
	[12.30]:{
		day: "Lunar New Year's Eve",
		bc: "I. REQUIRE. DUMPLINGS. /j Also, the Lunar New Year's getting near. I hope you don't mind some of those dumplings!"
	}
}

const normalDays={
	[0]:"Sun",
	[1]:"Mon",
	[2]:"Tue",
	[3]:"Wed",
	[4]:"Thu",
	[5]:"Fri",
	[6]:"Sat"
}

//---//---//---//---//

function __introduction__(){
	/*
	console.log("%cWelcome to the Starry Stop!","color: #57D9FF");
	console.log("I'm glad you actually bumped in to check how this site is doing, how'd I construct this site etc.");
	console.log("It's... kind of a surprise seeing you not doing this on its GitHub page though. Maybe you're simply messing around with the F12 developer tool stuff?");
	console.log("I wouldn't know. ¯\\_ (ツ)_/¯");
	console.log("Anyway, hello! Have a look around. :)");
	console.log(" - %cCream Starlight","color: #FFFF66");
	*/

	console.log(`%cWelcome to the Starry Stop!%c

I'm glad you actually bumped in to check how this site is doing, how'd I construct this site etc.
It's... kind of a surprise seeing you not doing this on its GitHub page though. Maybe you're simply messing around with the F12 developer tool stuff?
I wouldn't know. ¯\\_ (ツ)_/¯
Anyway, hello! Have a look around. :)

 - %cCream Starlight`,"color: #57D9FF","","color: #FFFF66");
	
	//lol
	return;
}

//---//---//---//---//

function widthCompat(){
	if (window.innerWidth <= 768) {
		return "100%";
	} else{
		return sb_width;
	}
}

function sdShow() {
	var today=new Date();
	var val=today.getMonth()+1+today.getDate()/100;
	var spec=false;

	var indexpage=(window.location.pathname.includes("index"));
	var cal=document.getElementById("calendarBox");

	//sanity check
	var sc=specialDays_sol[10+31/100];
	if(!sc){
		console.log("Sanity Check: Oct31 failed. sdShow might not work - automatically cancelled.");
	}else{
		console.log("Sanity Check: Response for Oct 31 (Should be Halloween) detected.");
		console.log(sc.bc);
	}

	sc=specialDays_sol[9+10/100];
	if(!sc){
		console.log("Sanity Check: Sep10 failed. sdShow might not work - automatically cancelled.");
	}else{
		console.log("Sanity Check: Response for Sep 10 (Should be Chn. Teacher's Day) detected.");
		console.log(sc.bc);
	}
	//run on dev environ., works well
	
	if(indexpage){
		console.log("Here be Index Page.");
	}

	if(specialDays_sol[val] && specialDays_sol[val].grayscale){
		if(indexpage){
			document.body.style.filter = "grayscale(100%)";
			document.getElementsByClassName("content")[0].innerHTML+=`
				<p>Also, um...</p>
				<p>Sorry for the grayscale.</p>
				<p>Today is a big mourning day for some people.</p>
			`
		}else{
			document.getElementById("topbar").style.filter="grayscale(100%)";
		}
		console.log("%cToday is "+specialDays_sol[val].day+". Lunar calendar is automatically disabled as this is of more importance.","color: #ff6666, background-color: #660000");
		return; //purposedly highlights the event
	}

	var lunar;
	try{
		lunar=calendar.solar2lunar();
	}catch(e){
		console.log("Caughtcha-! Error: "+e);
	}
	if(!lunar){
		
		console.log("...Whoops! No lunar calendar for you.");
		if(cal){
			cal.innerHTML+="<div style=\"text-align: center;\">"+today.getFullYear()+"/"+(today.getMonth()+1)+"/"+today.getDate()+" ~ "+normalDays[today.getDay()]+"</div>";
		}
		if (specialDays_sol[val]){
			document.getElementById("pageTitle").innerHTML += " ~ "+specialDays_sol[val].day;
			spec=true;
			if(cal){
				cal.innerHTML+="Today is "+specialDays_sol[val].day+"<br/>";
				cal.innerHTML+=specialDays_sol[val].bc+"<br/>";
			}
		}else{
			if(cal){
				cal.innerHTML+="Seems like nothing particularly interesting is happening today... Have a good day nonetheless!";
			}
		}
		return;
	}

	var lval=lunar.lMonth+lunar.lDay/100;

	var leap="";
	if(lunar.isLeap){leap="l";}

	if(cal){
		cal.innerHTML+="<div style=\"text-align: center;\">"+today.getFullYear()+"/"+(today.getMonth()+1)+"/"+today.getDate()+" ~ "+normalDays[today.getDay()]+" ~ L. "+lunar.lMonth+leap+"/"+lunar.lDay+"</div>";
	}

	if (specialDays_sol[val]){
		document.getElementById("pageTitle").innerHTML += " ~ "+specialDays_sol[val].day;
		spec=true;
		if(cal){
			cal.innerHTML+="Today is "+specialDays_sol[val].day+"<br/>";
			cal.innerHTML+=specialDays_sol[val].bc+"<br/>";
		}
	}
	if (specialDays_lun[lval] && !lunar.isLeap){
		document.getElementById("pageTitle").innerHTML += " ~ "+specialDays_lun[lval].day;
		spec=true;
		if(cal){
			cal.innerHTML+="Today is "+specialDays_lun[lval].day+".<br/>";
			cal.innerHTML+=specialDays_lun[lval].bc+"<br/>";
		}
	}

	if(cal && !spec){
		cal.innerHTML+="Seems like nothing particularly interesting is happening today... Have a good day nonetheless!";
	}
}

function sbShow() {
    document.getElementById("sidebar").style.width = widthCompat();
    document.getElementById("sidebar").style.borderRight = "2px solid white";
}

function sbHide() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("sidebar").style.borderRight = "none";
}

//This function might not have many uses as of now.
function startTime(){

	const tmr=document.getElementById("time");
	if(!tmr){
		console.log("Time module not found...");
		return 1;
	}

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

	tmr.textContent=yr+"/"+mo+"/"+da+" "+h+":"+m+":"+s;
	return 0;
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

//---//---//---//---//

document.addEventListener('DOMContentLoaded', sdShow);
if(startTime()==0){
	setInterval(startTime, 500);
}

__introduction__();

