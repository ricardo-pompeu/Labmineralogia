/*--------------------------*/

document.getElementById("openSidebar").onclick = function() {
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("overlay").style.display = "block";
};

document.getElementById("closeSidebar").onclick = function() {
    document.getElementById("sidebar").style.left = "-200px";
    document.getElementById("overlay").style.display = "none";
};

document.getElementById("overlay").onclick = function() {
    document.getElementById("sidebar").style.left = "-200px";
    document.getElementById("overlay").style.display = "none";
};





