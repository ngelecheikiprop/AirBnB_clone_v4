$(function(){
  var choosen_amenities = [];
  $("input:checkbox").on("click", function(){
   if ($(this).prop("checked") === true) {
      choosen_amenities.push($(this).data("name"));
    }
    else {
      choosen_amenities = choosen_amenities.filter(item => item !== $(this).data("name"));
    }
    console.log(choosen_amenities)
    $(".amenities h4").text(choosen_amenities);
  });
});
