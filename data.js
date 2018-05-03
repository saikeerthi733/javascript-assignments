//The Report Date
function DayName(date) {    // This function returns the name of the day of the week for a specific date.
	var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", 
					"Thursday", "Friday", "Saturday"];
return dayNames[date.getDay()];
}
function MonthName(date) {	// This function returns the name of the month for a specific date.
	var monthNames = ["January", "February", "March", "April", 
					"May","June","July","August","September",
					"October", "November", "December"];
return monthNames[date.getMonth()];
}
var today=new Date();
var firstName = prompt("What is your first name?", "Susan");
var lastName = prompt("What is your last name?", "Smith");
var cityName = prompt("What is your city name?", "Sacramento");
var zipCode = prompt("What is your 5-digit zip code?", "94235");
var poolDiameter = prompt("What is the pool's diameter in feet?", "25");
var poolDepth=prompt("What is the pool's depth in feet?","4.5");
var poolCubicFeet= Math.PI*Math.pow((poolDiameter/2),2)*poolDepth;		//calculating  volume of Cylinder by applying the formulae v=pi*radius^2*depth in Cubic feet where radius=diameter/2
var poolGallons = Math.round(poolCubicFeet * 7.48052);	// Calculating number of gallons
//Displaying the Customer Information
var customerCode = (firstName.substr(0,2) + lastName.substr(lastName.length - 2) + zipCode.substr(1,3) + cityName.substr(1,2));//Customer code  consists of the first two letter of the first name, followed by the last two letters of the last name, followed by the middle three digits of the 5-digit zipcode, followed by the second and third letters of the city name.
var customerData ="<br />" + DayName(today) + " , " + MonthName(today) + " " + today.getDate() + " , " + today.getFullYear() + "<br />";
customerData += "<br />Customer Code: " + customerCode.toUpperCase();	//Converting characters to Upper Case
customerData += "<br />Customer Name: " + firstName + " " + lastName;
customerData += "<br />City Name: " + cityName;
customerData += "<br />Zip code: " + zipCode;
var swimmingpoolData = "<br />CYCLINDRICAL SWIMMING POOLS:";
swimmingpoolData+= "<br />Diameter of Pool: " + poolDiameter + " feet";
swimmingpoolData += "<br />Depth of Pool: " + poolDepth + " feet";
swimmingpoolData += "<br />Volume of the Pool: " + poolGallons + " gallons";
var initialApplication = Math.round((32 * poolGallons) / 25000); //Calculating ounces of Algae Preventative needed for initial application
var weeklyDose = Math.round(poolGallons / 5000);	
var algaeData = "</br>ALGAE PREVENTATIVE:";
algaeData += "<br />Initial application: " + initialApplication + " ounces";
algaeData += "<br />Weekly dose: " + weeklyDose + " ounces";
algaeData+='<br/> <br /><input type="button" value="Another Calculation" onclick="location.reload()" />'; 
document.getElementById("customer information").innerHTML = customerData;
document.getElementById("cylindrical pooldata").innerHTML = swimmingpoolData;
document.getElementById("algae preventativedata").innerHTML = algaeData;