$(document).ready(function() {
  $(".questions").submit(function(event) {
    event.preventDefault();
    var seasonsAnswer = parseInt($("#season").val());
    var accessoryAnswer = parseInt($("#accessory").val());
    var cuisineAnswer = parseInt($("#cuisine").val());
    var prankAnswer = parseInt($("#prank").val());
    var relaxAnswer = parseInt($("#relax").val());
    var liveAnswer = parseInt($("#live").val());

    var results = seasonsAnswer + accessoryAnswer + cuisineAnswer + prankAnswer + relaxAnswer + liveAnswer

    if (results >= 6 && results <= 9) {
      $("#pikachu").show();
      $("body").addClass(".pikachuBackground");
    }
    else if(results >= 10 && results <= 14){
      $("#bulbasaur").show();
      $("body").addClass(".bulbasaurBackground");
    }
    else if (results >= 15 && results <= 18){
      $("#squirtle").show();
      $("body").addClass(".squirtleBackground");
    }
  });
});
