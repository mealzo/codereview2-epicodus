//business logic could go up here. Could I define my variables outside of the ready function?

$(document).ready(function() {
  //submit event
  $(".questions").submit(function(event) {
    event.preventDefault(); //to prevent the default submit
    //I'm selecting all my questions and getting the value of each answer selected, parseInt is to change them from strings to number
    var accessoryAnswer = parseInt($("#accessory").val());
    var cuisineAnswer = parseInt($("#cuisine").val());
    var prankAnswer = parseInt($("#prank").val());
    var relaxAnswer = parseInt($("#relax").val());
    var liveAnswer = parseInt($("#live").val());
    //I add all the values together and store them in a new variable to use for comparisons
    var results = accessoryAnswer + cuisineAnswer + prankAnswer + relaxAnswer + liveAnswer
    //if statements are based on a scale where all my 'a' answers equals 1 and so on
    if (results >= 5 && results <= 8) {
      $("#pikachu").show();
      $(".questions").hide();
      $("body").addClass("pikachu");
    }
    else if(results >= 9 && results <= 13){
      $("#bulbasaur").show();
      $(".questions").hide();
      $("body").addClass("bulbasaur");
    }
    else if (results >= 14 && results <= 18){
      $("#squirtle").show();
      $(".questions").hide();
      $("body").addClass("squirtle");
    }
  });
});
