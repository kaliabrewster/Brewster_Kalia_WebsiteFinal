$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideDown("slow");
    });
    $("#close").click(function(){
        $("#panel").slideUp("slow");
  });
});
