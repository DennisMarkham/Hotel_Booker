
		function validateForm() {
  let email = document.forms["booking"]["email"].value;
  let phone = document.forms["booking"]["phone"].value;
  let rooms = document.forms["booking"]["rooms"].value;
  let guests = document.forms["booking"]["guests"].value;
   let start = document.forms["booking"]["start"].value;
   let end = document.forms["booking"]["end"].value;

  console.log(start);
  var startYear = start.slice(0,4);
  console.log(parseInt(startYear));
  var startMonth = start.slice(5,7);
  console.log(parseInt(startMonth) - 1);
  
  //do days start at zero too?  Not sure.
  var startDay = start.slice(8,10);
  console.log(parseInt(startDay));
 

  
  console.log(end);
  var endYear = end.slice(0,4);
  console.log(parseInt(endYear));
  var endMonth = end.slice(5,7);
  console.log(parseInt(endMonth) - 1);
  
  //do days start at zero too?  Not sure.
  var endDay = end.slice(8,10);
  console.log(parseInt(endDay));
  
  //yes, the reverse order is counter-intuitive but its what you do
 var days = moment([endYear, endMonth, endDay]).diff(moment([startYear, startMonth, startDay]), 'days');
  
  console.log(days);

  if (email == "" && phone == "") {
    alert("email or phone number must be filled out");
    return false;
  }
  else if (rooms > guests)
  {
  	alert("There must be at least one guest per room");
  	return false;
  }
   else if (guests/rooms > 4)
  {
    alert("Too many guests, may only have 4 guests per room");
    return false;
  }
  else if (days <= 0)
  {
  	alert("End day must be after start day");
  	return false;
  }

}
