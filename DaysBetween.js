//Function to calculate the sales person employment years
function daysBetween(dateOfHire) {
		var now = new Date();
		var dateOfJoin = new Date(dateOfHire);  
		var employerYears = (now.getTime() - dateOfJoin.getTime())/1000/3600/24/365; // calculating the years between join date and the current date.
		totalEmploymentYears += employerYears;   // adding each  salesperson employment years together. 
	}