

function check()
{
  //okay, this here gets all the values to be used by the program
  //***************
  var guests = document.getElementById("guests").value;
  
  var rooms = document.getElementById("rooms").value;
  
  var hotel = document.getElementById("hotel").value;
 
  var start = document.getElementById("start").value;
  console.log(start);
  var startYear = start.slice(0,4);
  console.log(parseInt(startYear));
  var startMonth = start.slice(5,7);
  console.log(parseInt(startMonth) - 1);
  
  //do days start at zero too?  Not sure.
  var startDay = start.slice(8,10);
  console.log(parseInt(startDay));
 
  
var end = document.getElementById("end").value;
  
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

//*******************


/*
See, this seems to be where the validation starts, and there's a lot of things check for
let's make a list:
-if there will be empty rooms, in othewords if (guests < rooms) its invalid
-if there are too many rooms per guest, in otherwords if (guests/rooms > 4) its invalid
-if the first day is on or before the last day, in words if (days <= 0) its invalid
if none of this is true, you can do the price calc.  Hmmm, when you put it that way it 
seems simple
*/
   if(guests < rooms)
    {
      alert("empty room(s)");
    }
  else if (guests/rooms > 4)
  {
    alert("too many guests, may only have 4 guests per room");
  }
  else if (days <= 0)
  {
    alert("end day must be after start day")
  }
  else
  {
    priceCalc(hotel, rooms, days);
  }

}

function priceCalc(hotel, rooms, days)
{
  switch(hotel){
      case "val":
      alert($ + (rooms * 200 * days));
      break;
      case "mod":
      alert($ + (rooms * 400 * days));
      break;
      case "lux":
      alert($ + (rooms * 800 * days));
      break;
  }
}
