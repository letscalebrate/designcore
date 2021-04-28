let hoverImages = document.querySelectorAll(".hoverImages");
console.log(hoverImages);

$(document).ready(function(){
  $(hoverImages).hover(function(){
      console.log($(this).data("static"));
      console.log($(this).data("anim"));
      let anim = $(this).data("anim");
      $(this).attr("src", anim);
    }, function(){
    //$(this).css("background-color", "pink");
      let static = $(this).data("static");
      $(this).attr("src", static);
  });
});