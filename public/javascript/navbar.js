window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("social1").style.fontSize="14px";
        document.getElementById("social2").style.fontSize="14px";
        document.getElementById("social3").style.fontSize="14px";
        document.getElementById("storeyLogo").style.height="50px";
        document.getElementById("storeyLogo").style.width="50px";
    }
    else {
        document.getElementById("social1").style.fontSize="22px";
        document.getElementById("social2").style.fontSize="22px";
        document.getElementById("social3").style.fontSize="22px";
        document.getElementById("storeyLogo").style.height="95px";
        document.getElementById("storeyLogo").style.width="95px";
    }
}