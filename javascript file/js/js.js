var pic = document.getElementById("photo");

var link = document.getElementById("atag");

var pxwidth = document.getElementById("px");

var percentagewidth = document.getElementById("percentage");

var pxheight = document.getElementById("heightpx");

var percentageheight = document.getElementById("heightpercentage");

var link1 = document.getElementById("link");

var checkbox = document.getElementById("check");

function fun(){

    photo.style.width = pxwidth.value + "px";
    photo.style.width = percentagewidth.value + "%";
    photo.style.height = pxheight.value + "px";
    photo.style.height = percentageheight.value + "%"
}
function imgpic(){
    if(checkbox.checked){
        window.open(paste.value,"_blank")
    }
    else{
        link.setAttribute("href",paste.value)
    }
}