  $("#button").click(function () {
      if ($("#calc").val() <= "0.8%")
      {
      $("#ok").html("<p> YOU CAN DRIVE SAVE</p>");
    }else{
      $("#ok").html("<p>You can't drive for 4 hours</p>");
    }
  });
