window.onload = function() {
    let toggle = document.getElementById("toggle");
    if (window.innerWidth > 715) {
        toggle.checked = true;
        document.getElementById('side-nav-header').style.visibility='visible';
    }
    let side_nav = document.getElementById('side-nav');
    let container = document.getElementById('container');
}
window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
});