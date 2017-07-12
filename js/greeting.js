/*
   	 if the hour is greater that 18(6pm) then assign greeting Good evening!
   	 else if greater than 12 then assign greeting Good afternoon
   	 else if greater than 0(12am) then assign greeting Good morning
   	 else assign greeting Good morning
   	 */

/*Description: script to generate greeting based off time of day
and to get the time and date of users browser and display on webpage

*/

// background: #E6DADA; /* fallback for old browsers */
// background: -webkit-linear-gradient(to left, #E6DADA , #274046); /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to left, #E6DADA , #274046); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
       


var updateGreeting = function(hours)  {

	

	var greeting;

	if (hours >= 18) { // hour including 6pm or later
		greeting = 'Nights!';
		document.getElementById("container").style.backgroundColor = "black";
		document.getElementById("container").style.color = "white";
	} 
	else if (hours > 13) {
		document.getElementById("container").style.backgroundColor = "turquoise";
	    greeting = 'Noondays!';
	} 
	else if (hours > 0) {
	    greeting = 'Mornings!';
	    document.getElementById("container").style.backgroundColor = "orange";
	}
	 else {
		greeting = 'Welcome!';
	}   

	return greeting;

}

var updateClock = function() {
	var currentTime = new Date();

	var currentHours24 = currentTime.getHours(); // get hours from Date()
	//alert(currentHours24);

	var currentMinutes = currentTime.getMinutes();

	//console.log("minutes: ", currentMinutes);

	//console.log("hours: ", currentHours24); //console.log('hours '+current is string)

	var currentSeconds = currentTime.getSeconds();

	//if its less than 12 then AM if it's more than 12 pm
	var amOrPm = ( currentHours24 < 12) ? "AM" : "PM" ;


	//if the hour is more than 12 subtract 12 to convert 12 hour clock otherwise keep the time
	var currentHours12 = ( currentHours24 > 12 ) ? currentHours24-12 : currentHours12 ;


	currentHours12 = ( currentHours12 == 0 ) ? 12 : currentHours12

	// "0" == 0 true
	// "0" === 0 false

	var currentTimeString = "Current time is " + currentHours12 + " : " + currentMinutes + " : " + currentSeconds + " " + amOrPm;

	document.getElementById("greeting").innerHTML = updateGreeting(currentHours24);
	document.getElementById("clock").innerHTML = currentTimeString;

};