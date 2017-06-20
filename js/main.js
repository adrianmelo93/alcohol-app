  $("#button").click(function () {
      if ($("#calc").val() <= "2")
      {
      $("#ok").html("<p> YOU CAN DRIVE SAVE</p>");
    }else{
      $("#ok").html("<p>Estas preso</p>");
    }
  });
