//when the jQuery Mobile page is initialised
$(document).on('pageinit', function() {
	
	//set up listener for button click
	$('#getLocationButton').on('click', StartgetPosition);
	
	$('#stopGettingLocationButton').on('click', StopGetPosition);
	
	//change time box to show message
	$('#time').val("Press the button to get location data");
	
});


//Call this function when you want to get the current position
function StartgetPosition() {
	console.log("HELLO, this should activate button");
	//change time box to show updated message
	$('#time').val("Getting data...");
	
	//instruct location service to get position with appropriate callbacks
	//navigator.geolocation.getCurrentPosition(successPosition, failPosition);
	//the below code assumes it is a global variable due to not being defined.
	watchID = navigator.geolocation.watchPosition(successPosition, failPosition);
}

function StopGetPosition() {

		navigator.geolocation.clearWatch(watchID);
}
//called when the position is successfully determined
function successPosition(position) {
	
	//You can find out more details about what the position object contains here:
	// http://www.w3schools.com/html/html5_geolocation.asp
	

	//lets get some stuff out of the position object
	var time = new Date(position.timestamp);
	var date = time.toGMTString();
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	//OK. Now we want to update the display with the correct values
	$('#time').val("Received data at " + date);
	$('#lattext').val(latitude);
	$('#longtext').val(longitude);
}

//called if the position is not obtained correctly
function failPosition(error) {
	//change time box to show updated message
	$('#time').val("Error getting data: " + error);
	
}