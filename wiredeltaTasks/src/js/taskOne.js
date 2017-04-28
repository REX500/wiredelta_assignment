// calling the functions
calculateAge();
lifetimeSupply();
calcCircumfrence(5);
calcArea(4);
celsiusToFahrenheit(13);
fahrenheitToCelsius(100);

// jquery code bellow to select the html elements


// first task
$("#taskOneButton").click(function(){
  var iBirthYear = $("#taskOneAgeInput").val();
  console.log("Selected value is: "+iBirthYear);

  var iResult = calculateAge(iBirthYear);

  $("#taskOneAgeResultLabel").html(iResult);
});

// second task
$("#taskTwoButton").click(function(){
  console.log("Click words");
  var iAge =  $("#taskTwoAgeInput").val();
  var dSnack = $("#taskTwoSnackInput").val();

  var iResult = lifetimeSupply(iAge, dSnack);
  console.log(iResult);

  $("#lifetimeResultLabel").html(iResult);
});

// third task - part 1
$("#taskthreeCircumfrenceButton").click(function(){
  var iCircumfrenceRadius = $("#taskThreeCircumfrenceInput").val();
  console.log(iCircumfrenceRadius);
  var iResult = calcCircumfrence(iCircumfrenceRadius);
  // puting a result into a label
  $("#taskThreeResultLabel").html(iResult);
});

// third task - part 2
$("#taskthreeAreaButton").click(function(){
  var iAreaRadius = $("#taskThreeAreaInput").val();
  console.log(iAreaRadius);
  var iResult = calcArea(iAreaRadius);
  // puting a result into a label
  $("#taskThreeResultLabel").html(iResult);
});

// forth task - part 1
$("#taskFourCelsiusButton").click(function(){
  var iCelsiusValue = $("#taskFourCelsiusInput").val();
  console.log(iCelsiusValue);
  var iResult = celsiusToFahrenheit(iCelsiusValue);
  // insert a result into a label
  $("#taskFourCelsiusResultLabel").html(iResult);
});

// forth task - part 2
$("#taskFourFahrenheitButton").click(function(){
  var iFValue = $("#taskFourFahrenheitinput").val();
  console.log(iFValue);
  var iResult = fahrenheitToCelsius(iFValue);
  // insert a result into a label
  $("#taskFourFahrenheitResultLabel").html(iResult);
});



// first task - age calculator
function calculateAge(iBirthYear){
  // getting current year with a Date object
  var iCurrentYear = new Date().getFullYear();

  var iResultAge = iCurrentYear - iBirthYear;
  var iResult = "You are either"+iResultAge+" or"+(iResultAge-1);
  return iResult;
}

// second task life supply
function lifetimeSupply(iAge, dAmountPerDay){
  // year = 365 days
  var iAmountPerYear = dAmountPerDay*365;
  // assuming that a person lives until he is 80 years old
  var iYearsLeft = 80- iAge;
  var iLifetimeSupply = iYearsLeft*iAmountPerYear;

  var iResult = "You will need "+Math.round(iLifetimeSupply)+" to last you until you rip old age of 80";
  return iResult;
}

// third task cicrucfrence calculator
function calcCircumfrence(iRadius){
  // C = 2*pi*r
  var dCircumfrence = 2*3.14*iRadius;
  // iResult as a number with max 2 decimals
  var iResult = "The circumfrence is "+(Math.round(dCircumfrence * 100) / 100);
  return iResult;
}

// third task area calculator
function calcArea(iRadius){
// area = pi* radius*radius
var dArea = 3.14*iRadius*iRadius;
var iResult = "The area is "+(Math.round(dArea*100)/100);
return iResult;
}

// forth task - C to F
function celsiusToFahrenheit(iCelsiusValue){
  // converting a celsius value to a fahrenheit value
  var iNewFValue = (iCelsiusValue*9/5)+32;
  var iResult = iCelsiusValue+"C is "+Math.round(iNewFValue)+"F";
  return iResult;
}

// forth task - F to C
function fahrenheitToCelsius(iFahrenheitValue){
  // converting a F value to a C value
  var iNewCValue = (iFahrenheitValue-32)*5/9;
  var iResult = iFahrenheitValue+"F is "+Math.round(iNewCValue)+"C";
  return iResult;
}

// smooth scrool
/* smooth scrool logic */
$('a[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
var target = $(this.hash);
target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
if (target.length) {
  $('html, body').animate({
    scrollTop: target.offset().top
  }, 1000);
  return false;
}
}
});
