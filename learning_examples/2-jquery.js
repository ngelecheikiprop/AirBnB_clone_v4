$(function(){
  const the_chosen = [1, 2, 3, 4, 5];
  $("input:checkbox").on("click", function(){
    console.log($(this).data("id"));
    the_chosen.pop($(this).data("id"));
    console.log(the_chosen);
    $("div").text(the_chosen);
  });
});
