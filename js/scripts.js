// cooking conversion business logic begins here

var cupsOz = function(cups) {
  return cups*8;
};
var cupsMl = function(cups) {
  var ml = cups*236.58;
  return ml.toFixed(2);
};
var cupsTbsp = function(cups) {
  return cups*16;
};
var celsius = function(fahrenheit) {
  return (fahrenheit - 32)*.556;
};
var ozGrams = function(ounces) {
  return ounces*28.35;
};
var gallonsToLiters = function(gallons) {
  var liters = gallons * 3.78541;
  return liters.toFixed(2);
};

// cooking conversions business logic ends here

$(document).ready (function() {
  $("form#cupsConversion").submit (function(event){
    event.preventDefault();
    var userCups = parseFloat($("input[name=cups]").val());
    var userOz = cupsOz(userCups);
    var userMl = cupsMl(userCups);
    var userTbsp = cupsTbsp(userCups);
    $("span#oz").text(userOz+" oz");
    $("span#ml").text(userMl+" ml");
    $("span#tb").text(userTbsp+" Tbsp");
    $("span.unit1").hide();
  });

  $("form#tempConversion").submit (function(event){
    event.preventDefault();
    var userFahrenheit = parseFloat($("input[name=fahrenheit]").val());
    var userCelsius = celsius(userFahrenheit);
    var celsiusRound = Math.round(userCelsius);
    $("span#celsius").text(celsiusRound+" ° Celsius");
    $("span.unit2").hide();
  });

  $("form#ozConversion").submit (function(event){
    event.preventDefault();
    var userOz = parseFloat($("input[name=ounces]").val());
    var userGrams = ozGrams(userOz);
    var gramsRound = Math.ceil(userGrams);
    $("span#grams").text(gramsRound+" grams");
    $("span.unit3").hide();
  });

  $("form#liquidConversion").submit (function(event){
    event.preventDefault();
    var userGallon = parseFloat($("input[name=gallons]").val());
    var userLiters = gallonsToLiters(userGallon);
    // var gramsRound = Math.ceil(userGrams);
    $("span#liters").text(userLiters+" liters");
    $("span.unit4").hide();
  });

});
