$(document).ready(function(){
	function displayTime(){

		var currentTime = new Date(); //Initializing current time
		var hours = currentTime.getHours(); //Initializing current hour
		var minutes = currentTime.getMinutes(); //Initializing current minute
		var seconds = currentTime.getSeconds(); //Initializing current seconds
		var meridiem = "AM"; //Set default value for meridiem

		//Set clock in 12 hour mode
		if(hours > 12)
		{
			hours = hours - 12;
			meridiem = "PM";
		}

		//Replace 0 with 12
		if(hours === 0)
		{
			hours = 12;
		}
		//Concat 0 value less than 10
		if(hours < 10)
		{
			hours = "0" + hours;
		}
		if(minutes < 10)
		{
			minutes = "0" + minutes;
		}
		if (seconds < 10) 
		{
			seconds = "0" + seconds;
		}

		var clockDiv = document.getElementById('clock');

		clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
	}

	//Calling function after every 1 second
	setInterval(displayTime, 1000);
});