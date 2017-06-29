$("#button").click(function ()
{
  //creating variables
  var drinkCount =Number( $("#calc").val());
  var weight = Number($("#weight").val());
  var sexType= $("#select-gender").val();
  var percSexType=0;

  if (sexType == "male"){
    percSexType=40;
  }else {
    percSexType=50;
  }

  //calculatig the percentage of alchohol
  var dangerPerc=((drinkCount*percSexType)/(weight*10)).toFixed(2);

  var limitOk=0.03;
  var limitMaybe=0.07;

//showing results
    if (dangerPerc <= limitOk)
    {
    $("show-message").addClass("green");
    // $("show-massage").html("<h1> Possibly</h1>");


  } else if(dangerPerc>limitOk && dangerPerc <= limitMaybe){
    $("show-message").addClass("yellow");
    // $("show-message").html("<h1> Impaired</h1>");
    // $("show-message").removeClass("green")

  }else{
      $("show-message").addClass("red");
      // $("show-message").html("<h1> Legally Intoxicated</h1>");
      // $("show-message").removeClass("green, yellow")


  }
});
