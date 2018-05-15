// JavaScript Document

var score = 0;
var difficulty = 1;
var qNumber = 1;

window.onload = function() {
	
//LOAD COOKIES HERE
	
	randomQ();
};

function myFunction( ) {
	var txt;
	if (confirm("Is california a state? ok for yes cancel for no")) {
	 txt= "you are correct!";
	} else {
		txt= "you are incorrect:(";
	}
	document.getElementById("demo").innerHTML = txt;
}


function randomQ() {
	qNumber++;
	
	document.getElementById("a1").removeEventListener("click", wrongAnswer);
	document.getElementById("a2").removeEventListener("click", wrongAnswer);
	document.getElementById("a3").removeEventListener("click", wrongAnswer);
	document.getElementById("a4").removeEventListener("click", wrongAnswer);
	document.getElementById("a1").removeEventListener("click", rightAnswer);
	document.getElementById("a2").removeEventListener("click", rightAnswer);
	document.getElementById("a3").removeEventListener("click", rightAnswer);
	document.getElementById("a4").removeEventListener("click", rightAnswer);
	
	var n;
	
	if(difficulty === 1) {
		n = Math.floor(Math.random() * 7);
		switch(n) {
			case 0:
				// question 1
				document.getElementById("demo").innerHTML = "4+(5+3)/8";
				// answers
				document.getElementById("a1").innerHTML = "5";
				document.getElementById("a1").addEventListener("click", rightAnswer);
				document.getElementById("a2").innerHTML = "4";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "10";
				document.getElementById("a3").addEventListener("click", wrongAnswer);
				document.getElementById("a4").innerHTML = "2";
				document.getElementById("a4").addEventListener("click", wrongAnswer);
				break;
				
			case 1:
				// question 2	
				document.getElementById("demo").innerHTML = "Who was the First President of the United States?";
				// answers
				document.getElementById("a1").innerHTML = "George Washington";
				document.getElementById("a1").addEventListener("click", rightAnswer);
				document.getElementById("a2").innerHTML = "Donald Trump";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "Tom Brady";
				document.getElementById("a3").addEventListener("click", wrongAnswer);
				document.getElementById("a4").innerHTML = "John Adams";
				document.getElementById("a4").addEventListener("click", wrongAnswer);
				break;
				
			case 2:
				// question 3
				document.getElementById("demo").innerHTML = "Who was the first U.S. volleyball player to win three Olympic medals? ";
				// answers
				document.getElementById("a1").innerHTML = "Matt Anderson";
				document.getElementById("a1").addEventListener("click", wrongAnswer);
				document.getElementById("a2").innerHTML = "Logan Tom";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "Karch Kirally";
				document.getElementById("a3").addEventListener("click", rightAnswer);
				document.getElementById("a4").innerHTML = "Gabrielle Reece";
				document.getElementById("a4").addEventListener("click", wrongAnswer);
				break;
	
			case 3:
				// question 4
				document.getElementById("demo").innerHTML = "What is the largest three integer prime number?";
				// answers
				document.getElementById("a1").innerHTML = "882";
				document.getElementById("a1").addEventListener("click", wrongAnswer);
				document.getElementById("a2").innerHTML = "997";
				document.getElementById("a2").addEventListener("click", rightAnswer);
				document.getElementById("a3").innerHTML = "743";
				document.getElementById("a3").addEventListener("click", wrongAnswer);
				document.getElementById("a4").innerHTML = "721";
				document.getElementById("a4").addEventListener("click", wrongAnswer);
				break;
			case 4:
				// question 5
				document.getElementById("demo").innerHTML = "If you flip a coin three times, what is the probability of getting at least one tail?";
				// answers
				document.getElementById("a1").innerHTML = "7/8";
				document.getElementById("a1").addEventListener("click", rightAnswer);
				document.getElementById("a2").innerHTML = "4/5";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "3/2";
				document.getElementById("a3").addEventListener("click", wrongAnswer);
				document.getElementById("a4").innerHTML = "1/2";
				document.getElementById("a4").addEventListener("click", wrongAnswer);
				break;
			
			case 5:
				// question 6
				document.getElementById("demo").innerHTML = "What is the term for a solid figure with flat faces that are polygons?";
				// answers
				document.getElementById("a1").innerHTML = "Paragons";
				document.getElementById("a1").addEventListener("click", wrongAnswer);
				document.getElementById("a2").innerHTML = "Aragon";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "Polyhedron";
				document.getElementById("a3").addEventListener("click", rightAnswer);
				document.getElementById("a4").innerHTML = "Ugh-hedron";
				document.getElementById("a4").addEventListener("click", wrongAnswer);
				break;
				
			case 6:
				// question 7
				document.getElementById("demo").innerHTML = "One ton contains how many pounds?";
				// answers
				document.getElementById("a1").innerHTML = "2000";
				document.getElementById("a1").addEventListener("click", rightAnswer);
				document.getElementById("a2").innerHTML = "3";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "450";
				document.getElementById("a3").addEventListener("click", wrongAnswer);
				document.getElementById("a4").innerHTML = "875";
				document.getElementById("a4").addEventListener("click", wrongAnswer);
				break;
	
		}
	}
	
	
	if(difficulty ===2) {
	n = Math.floor(Math.random() * 7);
		switch(n) {
			case 0:
				// question 1
				document.getElementById("demo").innerHTML = "What is the largest fresh water lake in North America?";
				// answers
				document.getElementById("a1").innerHTML = "Lake Huron";
				document.getElementById("a1").addEventListener("click", wrongAnswer);
				document.getElementById("a2").innerHTML = "Lake Erie";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "Lake Superior";
				document.getElementById("a3").addEventListener("click", rightAnswer);
				document.getElementById("a4").innerHTML = "Lake Ontario";
				document.getElementById("a4").addEventListener("click", wrongAnswer);
				break;
				
				case 1:
				// question 2
				document.getElementById("demo").innerHTML = "What is made using soda, lime, and silica?";
				// answers
				document.getElementById("a1").innerHTML = "Rubber";
				document.getElementById("a1").addEventListener("click", wrongAnswer);
				document.getElementById("a2").innerHTML = "Sparkling Water";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "Sprite";
				document.getElementById("a3").addEventListener("click", wrongAnswer);
				document.getElementById("a4").innerHTML = "Glass";
				document.getElementById("a4").addEventListener("click", rightAnswer);
				break;
				
			   case 2:
				// question 3
				document.getElementById("demo").innerHTML = "What is the speed limit on a German Motorway?";
				// answers
				document.getElementById("a1").innerHTML = "No Limit";
				document.getElementById("a1").addEventListener("click", rightAnswer);
				document.getElementById("a2").innerHTML = "120mph";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "70mph";
				document.getElementById("a3").addEventListener("click", wrongAnswer);
				document.getElementById("a4").innerHTML = "15mph";
				document.getElementById("a4").addEventListener("click", wrongAnswer);
				break;
				
				 case 3:
				// question 4
				document.getElementById("demo").innerHTML = "What is the highest mountain that is not in a mountain range?";
				// answers
				document.getElementById("a1").innerHTML = "Mount Everest";
				document.getElementById("a1").addEventListener("click", wrongAnswer);
				document.getElementById("a2").innerHTML = "Mount Shasta";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "Mount Kilimanjaro";
				document.getElementById("a3").addEventListener("click", rightAnswer);
				document.getElementById("a4").innerHTML = "Mount Whitney";
				document.getElementById("a4").addEventListener("click", wrongAnswer);
				break;
				
				 case 4:
				// question 5
				document.getElementById("demo").innerHTML = "Which South American country hosted the 2014 FIFA World Cup ?";
				// answers
				document.getElementById("a1").innerHTML = "Brazil";
				document.getElementById("a1").addEventListener("click", rightAnswer);
				document.getElementById("a2").innerHTML = "Argentina";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "Venezuela";
				document.getElementById("a3").addEventListener("click", wrongAnswer);
				document.getElementById("a4").innerHTML = "Peru";
				document.getElementById("a4").addEventListener("click", wrongAnswer);
				break;
				
				case 5:
				// question 6
				document.getElementById("demo").innerHTML = "To which country does the territory of Christmas Island belong?";
				// answers
				document.getElementById("a1").innerHTML = " North America";
				document.getElementById("a1").addEventListener("click", wrongAnswer);
				document.getElementById("a2").innerHTML = "Brazil";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "Australia";
				document.getElementById("a3").addEventListener("click", rightAnswer);
				document.getElementById("a4").innerHTML = "Europe";
				document.getElementById("a4").addEventListener("click", wrongAnswer);
				break;
				
				case 6:
				//question 7
				document.getElementById("demo").innerHTML = "Which film featured a parrot called Polynesia?";
				// answers
				document.getElementById("a1").innerHTML = "Back to the Future";
				document.getElementById("a1").addEventListener("click", wrongAnswer);
				document.getElementById("a2").innerHTML = "Harry Potter";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "Doctor Doolittle";
				document.getElementById("a3").addEventListener("click", rightAnswer);
				document.getElementById("a4").innerHTML = "The Office";
				document.getElementById("a4").addEventListener("click", wrongAnswer);
				break
		}
	}	
	
	if(difficulty ===3) {
	n = Math.floor(Math.random() * 7);
		switch(n) {
						
			case 0:
				// question 1
				document.getElementById("demo").innerHTML = "Which is the only U.S state to produce coffee?";
				// answers
				document.getElementById("a1").innerHTML = "Michigan";
				document.getElementById("a1").addEventListener("click", wrongAnswer);
				document.getElementById("a2").innerHTML = "New York";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "California";
				document.getElementById("a3").addEventListener("click", wrongAnswer);
				document.getElementById("a4").innerHTML = "Hawaii";
				document.getElementById("a4").addEventListener("click", rightAnswer);
				break;
				
			case 1:
				// question 2
				document.getElementById("demo").innerHTML = "In which decade was the University of MIami founded?";
				// answers
				document.getElementById("a1").innerHTML = "2000s";
				document.getElementById("a1").addEventListener("click", wrongAnswer);
				document.getElementById("a2").innerHTML = "1920s";
				document.getElementById("a2").addEventListener("click", rightAnswer);
				document.getElementById("a3").innerHTML = "1850s";
				document.getElementById("a3").addEventListener("click", wrongAnswer);
				document.getElementById("a4").innerHTML = "1900s";
				document.getElementById("a4").addEventListener("click", wrongAnswer);
				break;
				
			case 2:
				// question 3
				document.getElementById("demo").innerHTML = "Mel Fisher was noted for searching for what?";
				// answers
				document.getElementById("a1").innerHTML = "Fish";
				document.getElementById("a1").addEventListener("click", wrongAnswer);
				document.getElementById("a2").innerHTML = "Sunken Ship";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "The Bible";
				document.getElementById("a3").addEventListener("click", wrongAnswer);
				document.getElementById("a4").innerHTML = "Sunken Treasure";
				document.getElementById("a4").addEventListener("click", rightAnswer);
				break;
				
			case 3:
				// question 4
				document.getElementById("demo").innerHTML = "In which year was Grace Kelly born?";
				// answers		
				document.getElementById("a1").innerHTML = "1929";
				document.getElementById("a1").addEventListener("click", rightAnswer);
				document.getElementById("a2").innerHTML = "1949";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "2016";
				document.getElementById("a3").addEventListener("click", wrongAnswer);
				document.getElementById("a4").innerHTML = "1905";
				document.getElementById("a4").addEventListener("click", wrongAnswer);
				break;
				
			case 4:
				// question 5
				document.getElementById("demo").innerHTML = "How many planets in our solar system have moons";
				// answers
				document.getElementById("a1").innerHTML = "2";
				document.getElementById("a1").addEventListener("click", wrongAnswer);
				document.getElementById("a2").innerHTML = "6";
				document.getElementById("a2").addEventListener("click", rightAnswer);
				document.getElementById("a3").innerHTML = "3";
				document.getElementById("a3").addEventListener("click", wrongAnswer);
				document.getElementById("a4").innerHTML = "4";
				document.getElementById("a4").addEventListener("click", wrongAnswer);
				break;
				
				case 5:
				// question 6
				document.getElementById("demo").innerHTML = "How many hydrogen atoms are in the molecule of water?";
				// answers
				document.getElementById("a1").innerHTML = "Two";
				document.getElementById("a1").addEventListener("click", rightAnswer);
				document.getElementById("a2").innerHTML = "One";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "Seven";
				document.getElementById("a3").addEventListener("click", wrongAnswer);
				document.getElementById("a4").innerHTML = "Three";
				document.getElementById("a4").addEventListener("click", wrongAnswer);
				break;
			
			case 6:
				// question 7
				document.getElementById("demo").innerHTML = "Which bone is the longest bone in the human body?";
				// answers
				document.getElementById("a1").innerHTML = "Ribs";
				document.getElementById("a1").addEventListener("click", wrongAnswer);
				document.getElementById("a2").innerHTML = "Clavicle";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "Femur";
				document.getElementById("a3").addEventListener("click", rightAnswer);
				document.getElementById("a4").innerHTML = "Scapula";
				document.getElementById("a4").addEventListener("click", wrongAnswer);
				break;		
				}
	}
	
	if(difficulty===4) {
	var n = Math.floor(Math.random() * 1);
		switch(n) {
			case 0:
				// question 1
				document.getElementById("demo").innerHTML = "What is the most common element in the earth's atmosphere?";
				// answers
				document.getElementById("a1").innerHTML = "Nitrogen";
				document.getElementById("a1").addEventListener("click", rightAnswer);
				document.getElementById("a2").innerHTML = "Argon";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "Carbon Dioxide";
				document.getElementById("a3").addEventListener("click", wrongAnswer);
				document.getElementById("a4").innerHTML = "Oxygen";
				document.getElementById("a4").addEventListener("click", wrongAnswer);
				break;
				
				case 1:
				// question 2
				document.getElementById("demo").innerHTML = "What were the earliest forms of contraceptive made from?";
				// answers
				document.getElementById("a1").innerHTML = "Goat Bladders";
				document.getElementById("a1").addEventListener("click", wrongAnswer);
				document.getElementById("a2").innerHTML = "Leather";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "Milk";
				document.getElementById("a3").addEventListener("click", wrongAnswer);
				document.getElementById("a4").innerHTML = "Crocodile Dung";
				document.getElementById("a4").addEventListener("click", rightAnswer);
				break;
				
			   case 2:
				// question 3
				document.getElementById("demo").innerHTML = "What are people with Alektorophobia afraid of?";
				// answers
				document.getElementById("a1").innerHTML = "Chickens";
				document.getElementById("a1").addEventListener("click", rightAnswer);
				document.getElementById("a2").innerHTML = "Wizards";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "Pugs";
				document.getElementById("a3").addEventListener("click", wrongAnswer);
				document.getElementById("a4").innerHTML = "Birds";
				document.getElementById("a4").addEventListener("click", wrongAnswer);
				break;
				
				 case 3:
				// question 4
				document.getElementById("demo").innerHTML = "What is the correct term for a group of hippos?";
				// answers
				document.getElementById("a1").innerHTML = "A shoal of hippos";
				document.getElementById("a1").addEventListener("click", wrongAnswer);
				document.getElementById("a2").innerHTML = "A convocation of hippos";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "A bloat of hippos";
				document.getElementById("a3").addEventListener("click", rightAnswer);
				document.getElementById("a4").innerHTML = "A herd of hippos";
				document.getElementById("a4").addEventListener("click", wrongAnswer);
				break;
				
				 case 4:
				// question 5
				document.getElementById("demo").innerHTML = "How has the Statue of Liberty changed since it was built?";
				// answers
				document.getElementById("a1").innerHTML = "Color";
				document.getElementById("a1").addEventListener("click", rightAnswer);
				document.getElementById("a2").innerHTML = "Position";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "Didn't change";
				document.getElementById("a3").addEventListener("click", wrongAnswer);
				document.getElementById("a4").innerHTML = "Added Torch";
				document.getElementById("a4").addEventListener("click", wrongAnswer);
				break;
				
				case 5:
				// question 6
				document.getElementById("demo").innerHTML = "What does space smell like?";
				// answers
				document.getElementById("a1").innerHTML = "Nothing";
				document.getElementById("a1").addEventListener("click", wrongAnswer);
				document.getElementById("a2").innerHTML = "Lemon";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "Burnt Steak and Hot Metal";
				document.getElementById("a3").addEventListener("click", rightAnswer);
				document.getElementById("a4").innerHTML = "Garbage";
				document.getElementById("a4").addEventListener("click", wrongAnswer);
				break;
				
				case 6:
				//question 7
				document.getElementById("demo").innerHTML = "Why did Christopher Columbus set sail in 1492?";
				// answers
				document.getElementById("a1").innerHTML = "Prove the Earth was round";
				document.getElementById("a1").addEventListener("click", wrongAnswer);
				document.getElementById("a2").innerHTML = "Looking for America";
				document.getElementById("a2").addEventListener("click", wrongAnswer);
				document.getElementById("a3").innerHTML = "Looking for a route to Asia";
				document.getElementById("a3").addEventListener("click", rightAnswer);
				document.getElementById("a4").innerHTML = "To travel the circumference of the earth";
				document.getElementById("a4").addEventListener("click", wrongAnswer);
				break
		}
	
	}

}

function nextQ() {
	if(qNumber <= 21) {
		randomQ();
	}
	
//SCORE AND PROGRESS BAR GOES UP
	document.getElementById("score").value = score;
	document.getElementById("progressBar").value = qNumber;
	
	checkScore();
}

function rightAnswer() {
//SCORE AND PROGRESS BAR GOES UP
	alert("Right answer!");
	score += 50;
	nextQ();
}

function wrongAnswer() {
//SCORE AND PROGRESS GOES DOWN
	alert("Wrong answer!");
	score -= 25;
	nextQ();
}

function checkScore() {
	if (score >= 1000 ) {
		confirm("You win! You can keep playing or play on a different difficulty. If yes, hit OK, if no, then hit CLOSE");
	}
}

//COOKIES

function setCookie (cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function changeDiff(level) {
	difficulty = Number(level);
	console.log("Setting difficulty to..." + difficulty);
	randomQ();
}



if(difficulty === 1) {

}
function changeCSS(cssFile, cssLinkIndex) {
	var oldlink = document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
	
	var newlink = document.createElement("link");
	newlink.setAttribute("rel", "stylesheet");
	newlink.setAttribute("type", "text/css");
	newlink.setAttribute("href", cssFile);
	
	document.getElementByTagName("head").item(0).replaceChild(newlink, oldlink);
}

//CREATE THEMES
function changeCSS(cssFile, cssLinkIndex) {
	var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
	
	var newlink = document.createElement("link");
	newlink.setAttribute("rel", "stylesheet");
	newlink.setAttribute("type", "text/css");
	newlink.setAttribute("href", cssFile);
	
	document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
	
}