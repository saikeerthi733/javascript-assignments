function roundPlaces(num, n) 
	{
		return Math.round(num * Math.pow(10,n))/Math.pow(10,n);//function for rounding the floating point numbers 
	}	


function AddData(values)//function for inserting data in to cells
{
	row = table.insertRow(-1);
	cell0 = row.insertCell(0);
	cell1 = row.insertCell(1);
	cell2 = row.insertCell(2);
	cell3 = row.insertCell(3);
	cell4 = row.insertCell(4);
	cell0.innerHTML = values[0];
	cell1.innerHTML = values[1];
	cell2.innerHTML = "$" + values[2];
	cell3.innerHTML = values[3];
	cell4.innerHTML = values[4];
}
function getData(data)
{
	var Totalsum=0;
	objects=data.getElementsByTagName("item");//stores the data in an array
	for (i=0; i< objects.length; i++) 
	{
		table = document.getElementById("table1");
		product_id = data.getElementsByTagName("item").item(i).attributes.getNamedItem("id").value;
		product_name = objects[i].getElementsByTagName("product_name")[0].firstChild.nodeValue;
		unit_price = objects[i].getElementsByTagName("unit_price")[0].firstChild.nodeValue;
		quantity = objects[i].getElementsByTagName("quantity")[0].firstChild.nodeValue;
		total = parseFloat(unit_price * quantity);
		total1 = roundPlaces(total,2);
		Totalsum += total1;
	var values = [product_id, product_name, unit_price, quantity,total1];
		AddData(values);
	}
	document.getElementById("Grandtotal").innerHTML= "<p>GRAND TOTAL for this order:$" +roundPlaces(Totalsum,2)+ "</p>"//displaying grand total
}
window.onload=function()
{
	obj=document.getElementById("getdata");
	obj.onclick=function(){
	    doAjax("cart.xml","","getData","GET",1);//calling ajax library functions and inserting the cart.xml url for getting the product details 
	}
}