window.onload = function() {
    toggle = document.getElementById("toggle");
    document.querySelector('.popup').setAttribute("style","transform: translateX(0px);opacity:1;");
    //balloons = document.querySelector('.balloons');
    //balloons.style.top= window.innerHeight - 190 + "px";
    //setTimeout(()=>{balloons.setAttribute("style","top:-160px;visibility:hidden;opacity:0;transition:5s ease-in-out;transition-property:opacity,top,visibility;");},5000)
    if (window.innerWidth > 715) {
        toggle.checked = true;
    }
    //loading = document.querySelector('.loading');
    //loading_text = document.querySelectorAll('.loading span');
    //document.querySelector('.loading img').setAttribute("style", "visibility: visible;opacity:1;width:200px;transition: all 0.5s;");
    //setTimeout(function() {loading_text[0].setAttribute("style", "visibility: visible;opacity:1;font-size: 1.5rem;transition: all 1s;");},1000);
    //setTimeout(function() {loading_text[1].setAttribute("style", "visibility: visible;opacity:1;font-size: 1.5rem;transition: all 1s;");},1500);
    //setTimeout(function() {loading_text[2].setAttribute("style", "visibility: visible;opacity:1;font-size: 1.5rem;transition: all 1s;");},2000);
    //main_container = document.querySelector('.flex-container');
    //setTimeout(function(){
    //    main_container.setAttribute("style", "display:block;");
    //},4000);
    window.addEventListener('resize', function () {
        //balloons.style.top= window.innerHeight - 190 + "px"; 
        if (window.innerWidth > 715) {
            toggle.checked = true;
        }
        else{
            toggle.checked = false;
        }
    });
    inViewport = function(div){
        var bounding = div.getBoundingClientRect();
        return(
            bounding.top <= (window.innerHeight || document.documentElement.clientHeight)-100 &&
            bounding.bottom >50
        );
    };
    ScreenOutDown = function(div){
        var bounding = div.getBoundingClientRect();
        return(
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    };
    ScreenOutUp = function(div){
        var bounding = div.getBoundingClientRect();
        return(
            bounding.top > 0
        );
    };
    animateRight = function(elem){
        if (inViewport(elem)) {
            elem.setAttribute("style", "visibility: visible;transform: translateX(0px);transition: 1s;transition-property:visibility,opacity,transform;");
        } else {
            elem.setAttribute("style", "visibility: hidden;transform: translateX(-50px);transition: 1s;opacity:0;transition-property:visibility,opacity,transform;");
        }
    };
    animateUp = function(elem){
        if(inViewport(elem)){
            elem.setAttribute("style", "visibility: visible;transform: translateY(0px);transition: 1s;transition-property:visibility,opacity,transform;");
        }
        else {
            elem.setAttribute("style", "visibility: hidden;transform: translateY(40px);transition: 1s;opacity:0;transition-property:visibility,opacity,transform;");
        }
        
    }
    animateBar = function(elem,width){
        if(inViewport(elem)){
            elem.setAttribute("style", `overflow:visible;width: ${width};transition: 1s;opacity:1;transition-property:width,opacity;`);
        }
        else{
            elem.setAttribute("style", `overflow:hidden;width: 10%;transition: 1s;opacity:0;transition-property:width,opacity;`);
        }
    }
    animateLeft = function(elem){
        if (inViewport(elem)) {
            elem.setAttribute("style", "visibility: visible;transform: translateX(0px);transition: 1s;transition-property:opacity,transform;");
        } else {
            elem.setAttribute("style", "visibility: hidden;transform: translateX(50px);transition: 1s;opacity:0;transition-property:opacity,transform;");
        }
    };
    animateDown = function(elem){
        if(inViewport(elem)){
            elem.setAttribute("style", "visibility: visible;transform: translateY(0px);transition: 1s;opacity:1;transition-property:opacity,transform;");
        }
        else {
            elem.setAttribute("style", "visibility: hidden;transform: translateY(-40px);transition: 1s;opacity:0;transition-property:opacity,transform;");
        }
        
    }
    animateFade = function(elem){
        if(inViewport(elem)){
            elem.setAttribute("style", "visibility: visible;opacity:1;transition: 1s;transition-property:opacity;");
        }
        else {
            elem.setAttribute("style", "visibility: hidden;opacity:0;transition: 1s;transition-property:opacity;");
        }
    }
    
    function animate(){
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
        animLft = document.querySelectorAll('.animateLeft');
        for(var i=0;i<animLft.length;i++){
            animateLeft(animLft[i])
        }
        animDown = document.querySelectorAll('.animateDown');
        for(var i=0;i<animDown.length;i++){
            animateDown(animDown[i])
        }
        fade = document.querySelectorAll('.fade');
        for(var i=0;i<fade.length;i++){
            animateFade(fade[i])
        }
    }
    function pageSlider(e){
        fullPage = document.querySelectorAll('.container-body');
        var scrollHeight = window.innerHeight;
        if (e.deltaY>0) {
            for (let i = 0; i < fullPage.length-1; i++) {
                const element = fullPage[i];
                if (ScreenOutDown(fullPage[i])) {
                    var height = fullPage[i+1].getBoundingClientRect().top;
                    window.scrollBy({top: height, behavior: 'smooth'});
                }
                else{
                    window.scrollBy({top:20, behavior: 'smooth'});
                }
            }
        }
        else{
            for (let i = fullPage.length-1; i > 0 ; i--) {
                const element = fullPage[i];
                if (ScreenOutUp(fullPage[i])) {
                    var height = fullPage[i-1].getBoundingClientRect().top;
                    window.scrollBy({top: height, behavior: 'smooth'});
                    
                }
            }
        }
    }
    window.addEventListener('scroll', animate);
    //window.addEventListener('wheel', function(e){
        //pageSlider(e);
    //});
    var edu = document.querySelectorAll(".collapse");
        for(var i = 0;i<edu.length;i++){
        edu[i].addEventListener("click", function(){
            this.classList.toggle("active");
            var container = this.nextElementSibling;
            container.classList.toggle("active");
            
        });
    }
    projects = document.querySelectorAll('.slide-pannel');
    slide_title = document.querySelectorAll('.slide-title');
    slide_body = document.querySelectorAll('.slide-body');
    slide_foot = document.querySelectorAll('.slide-footer');
    for (let i = 0; i < projects.length; i++) {
        const title = slide_title[i];
        const body = slide_body[i];
        const footer = slide_foot[i];
        const element = projects[i];
        element.addEventListener('mouseover', function(){
            this.setAttribute("style", `background: ${element.getAttribute('aria-src')} no-repeat;background-size:0 0;background-position: center;background-color:#000;opacity:1;transition: all 1s;`);
            title.setAttribute("style","visibility: visible;opacity: 1;transform: translateY(0px);transition: 1s;transition-property:visibility,opacity,transform;");
            body.setAttribute("style","visibility: visible;opacity: 1;transform: translateY(0px);transition: 1s;transition-property:visibility,opacity,transform;");
            footer.setAttribute("style","visibility: visible;opacity: 1;transform: translateX(0px);transition: 1s;transition-property:visibility,opacity,transform;");
            
        });
        element.addEventListener('mouseleave',function(){
            this.setAttribute("style", `background: ${element.getAttribute('aria-src')} no-repeat;background-size:${element.offsetWidth}px ${element.offsetHeight}px;background-position: center;opacity:1;transition: all 1s;`);
            title.setAttribute("style","visibility: hidden;opacity: 0;transform: translateY(-20px);transition: 1s;transition-property:visibility,opacity,transform;");
            body.setAttribute("style","visibility: hidden;opacity: 0;transform: translateY(20px);transition: 1s;transition-property:visibility,opacity,transform;");
            footer.setAttribute("style","visibility: hidden;opacity: 0;transform: translateX(-30px);transition: 1s;transition-property:visibility,opacity,transform;");
        });
    }
}
let closePop = document.querySelector('.close-popup');
let popup = document.querySelector('.popup');
closePop.addEventListener('click',()=>{
    popup.setAttribute("style","opacity:0;transform: translateX(350px);");
})
let mouseCursor = document.querySelector('.mouse-block');
    window.addEventListener('mousemove', function(e){
        mouseCursor.classList.remove('mouse-click');
        mouseCursor.setAttribute("style",`visibility: visible;opacity: 1;top:${e.pageY - 10}px;left:${e.pageX - 10}px;`);
    });
document.addEventListener('click',()=>{
    mouseCursor.classList.add('mouse-click');
    //balloons.setAttribute("style","top:-160px;visibility:hidden;opacity:0;transition:5s ease-in-out;transition-property:opacity,top,visibility;");
});