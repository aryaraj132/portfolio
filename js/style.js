window.onload = function() {
    toggle = document.getElementById("toggle");
    if (window.innerWidth > 715) {
        toggle.checked = true;
        document.getElementById('side-nav-header').style.visibility='visible';
    }
    let side_nav = document.getElementById('side-nav');
    let container = document.getElementById('container');
    window.addEventListener('resize', function () { 
        if (window.innerWidth > 715) {
            toggle.checked = true;
            document.getElementById('side-nav-header').style.visibility='visible';
        }
        else{
            toggle.checked = false;
            document.getElementById('side-nav-header').style.visibility='hidden';
        }
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
        if(toggle.checked)
        {
            if (inViewport(elem)) {
                elem.setAttribute("style", "visibility: visible;margin-left: 0px;transition: all 1s;");
            } else {
                elem.setAttribute("style", "visibility: hidden;margin-left: -50px;transition: all 1s;opacity:0;");
            }
        }
        else{
            if (inViewport(elem)) {
                elem.setAttribute("style", "visibility: visible;margin-left: 0px;transition: all 1s;");
            } else {
                elem.setAttribute("style", "visibility: hidden;margin-left: -20px;transition: all 1s;opacity:0;");
            }
        }
    };
    animateUp = function(elem){
        if(inViewport(elem)){
            elem.setAttribute("style", "visibility: visible;margin-top: 10px;transition: all 1s;");
        }
        else{
            elem.setAttribute("style", "visibility: hidden;margin-top: 50px;transition: all 1s;opacity:0;");
        }
    }
    animateBar = function(elem,width){
        if(inViewport(elem)){
            elem.setAttribute("style", `overflow:visible;width: ${width};transition: all 1s;opacity:1;`);
        }
        else{
            elem.setAttribute("style", `overflow:hidden;width: 10%;transition: all 1s;opacity:0;`);
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
        animBar = document.querySelectorAll('.animateBar');
        for(var i=0;i<animBar.length;i++){
            animateBar(animBar[i],animBar[i].getAttribute('aria-valuenow'))
        }
    });
    var edu = document.querySelectorAll(".collapse");
        for(var i = 0;i<edu.length;i++){
        edu[i].addEventListener("click", function(){
            this.classList.toggle("active");
            var container = this.nextElementSibling;
            container.classList.toggle("active");
            
        });
    }
    
}