function getXMLHttpRequest() {
	// Creates an instance of an XMLHttpRequest
	// Technique depends upon browsers
	try {
		try {
			// For earlier versions of IE
			return new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e) {
			// For IE versions with a different XML parser
			return new ActiveXObject("Msxml2.XMLHTTP");
		}
	}
	catch(e) {
		// For Firefox, Opera, later versions of IE
		return new XMLHttpRequest();
	}
}

function requestGET(url, query, req) {
	// First arg: URL receiving request
	// Second arg: query string with parameters as name=value pairs
	// Third arg: request object making the call
	var myRandom = parseInt(Math.random()*99999999); //prevent caching
	if(query == '') {
		// If no query, random# must be appended after ?-mark
		var callUrl = url + '?rand=' + myRandom;
	} else {
		var callUrl = url + '?' +query + '&rand=' + myRandom;
	}
	// Prepare the request object for communication
	req.open("GET", callUrl, true);
	// For a GET request the request info is encoded in the URL
	// thus the null argument
	req.send(null);
}

function requestPOST(url, query, req) {
	// For POST requests, caching is not an issue; no need for random#
	req.open("POST", url, true);
	// Tell the server app the kind of data being sent
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	// In a POST request, the parameter data is passed as an argument in send()
	req.send(query);
}

function doAjax(url, query, callback, reqtype, getxml) {
	// Arg 1: Target URL
	// Arg 2: Encoded query string
	// Arg 3: The name of the callback function
	// Arg 4: Request type, either POST or GET
	// Arg 5: 1 to retrieve XML data, 0 for text data
	// myreq is the request object
	var myreq = getXMLHttpRequest();
	myreq.onreadystatechange = function() {
		// Check if request is complete
		if(myreq.readyState == 4) {
			// Check for successful response
			if(myreq.status == 200) {
				var item = myreq.responseText;
				if(getxml == 1) item = myreq.responseXML;
				// JavaScript takes the callback function name
				// executing it as a function, passing to it
				// the data returned (item) from the Ajax call
				eval(callback + '(item)');
			}
		}
	}
	// Call the appropriate function depending upon
	// whether the call is of type GET or POST
	if(reqtype.toUpperCase == "POST") {
		requestPOST(url, query, myreq);
	} else {
		requestGET(url, query, myreq);
	}
}