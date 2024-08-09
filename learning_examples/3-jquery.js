$(function(){
  var the_chosen = [];
  $("input:checkbox").on("click", function(){
    if ($(this).prop("checked") == true) {
      the_chosen.push($(this).data("id"));
    }
    else {
      console.log("in else");
      the_chosen = the_chosen.filter(item => item !== $(this).data("id"));
      console.log(the_chosen);
    }
    $("div").text(the_chosen);
  });
});
