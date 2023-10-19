$(document).ready(function(){
    $("#px").change(function(){
        var width1 =$("#px").val();
        $("#photo").attr("width",width1 + "px" );
    });
});
  $("#percentage").change(function(){
    var percent =$("#percentage").val();
    $("#photo").attr("width",percent + "%" );
  });
  $("#heightpx").change(function(){
    var height1 =$("#heightpx").val();
    $("#photo").attr("height", height1 + "px");
  });
  $("#heightpercentage").change(function(){
    var height2 =$("#heightpercentage").val();
    $("#photo").attr("height",height2 + "%" );
  });
  $("#link").change(function(){
    $("#photo").click(function(){
        var link =$("#link").val();
        if($("#check").is(":checked")){
            window.open(link,"_blank");
        }
        else{
            $("#atag").attr("href",link);
        }
    });
});