window.onload = function() {
    let toggle = document.getElementById("toggle");
    if (window.innerWidth > 715) {
        toggle.checked = true;
        document.getElementById('side-nav-header').style.visibility='visible';
    }
    let side_nav = document.getElementById('side-nav');
    let container = document.getElementById('container');    

    window.addEventListener('resize', function () { 
        window.location.reload(); 
    });
    inViewport = function(div){
        var bounding = div.getBoundingClientRect();
        return(
            bounding.top <= (window.innerHeight || document.documentElement.clientHeight)-100 &&
            bounding.left >= 0 &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };
    animateRight = function(elem){
        if (inViewport(elem)) {
            elem.setAttribute("style", "visibility: visible;padding-left: 50px;transition: all 1s;");
        } else {
            elem.setAttribute("style", "visibility: hidden;padding-left: 0px;transition: all 1s;opacity:0;");
        }
    };
    animateUp = function(elem){
        if(inViewport(elem)){
            elem.setAttribute("style", "visibility: visible;padding-top: 0px;transition: all 1s;");
        }
        else{
            elem.setAttribute("style", "visibility: hidden;padding-top: 50px;transition: all 1s;opacity:0;");
        }
    }
    window.addEventListener('scroll', function () {
        animRht = document.querySelectorAll('.animateRight');
        for(var i=0;i<animRht.length;i++){
            animateRight(animRht[i])
        }
        animUp = document.querySelectorAll('.animateUp');
        for(var i=0;i<animUp.length;i++){
            animateUp(animUp[i])
        }
    });
}