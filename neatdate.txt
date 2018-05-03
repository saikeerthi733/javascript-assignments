
function NeatDate(date) {		
	var daysOfWeek = ["Sunday", "Monday", "Tuesday",
					"Wednesday", "Thursday",
				    "Friday", "Saturday"];
					
	var monthNames = ["January", "February", "March","April", "May",
						"June","July","August","September","October",
						"November", "December"];
						
	var string_Date = daysOfWeek[date.getDay()] + ", " + monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
	return string_Date;
} 
// NeatDate returns the name of the month and day of the week,of the specific year and date
