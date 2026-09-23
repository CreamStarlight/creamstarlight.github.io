const sb_width="250px"

function sbShow() {
    document.getElementById("sidebar").style.width = sb_width;
    document.getElementById("sidebar").style.borderRight = "2px solid white";
}

function sbHide() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("sidebar").style.borderRight = "none";
}