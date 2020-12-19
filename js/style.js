window.onload = function() {
    toggle = document.getElementById("toggle");
    if (window.innerWidth > 715) {
        toggle.checked = true;
        document.getElementById('side-nav-header').style.visibility='visible';
    }
    let side_nav = document.getElementById('side-nav');
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
            elem.setAttribute("style", "visibility: visible;transform: translateX(0px);transition: all 1s;");
        } else {
            elem.setAttribute("style", "visibility: hidden;transform: translateX(-50px);transition: all 1s;opacity:0;");
        }
    };
    animateUp = function(elem){
        if(inViewport(elem)){
            elem.setAttribute("style", "visibility: visible;transform: translateY(0px);transition: all 1s;");
        }
        else {
            elem.setAttribute("style", "visibility: hidden;transform: translateY(40px);transition: all 1s;opacity:0;");
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
    animateLeft = function(elem){
        if (inViewport(elem)) {
            elem.setAttribute("style", "visibility: visible;transform: translateX(0px);transition: all 1s;");
        } else {
            elem.setAttribute("style", "visibility: hidden;transform: translateX(50px);transition: all 1s;opacity:0;");
        }
    };
    animateDown = function(elem){
        if(inViewport(elem)){
            elem.setAttribute("style", "visibility: visible;transform: translateY(0px);transition: all 1s;opacity:1;");
        }
        else {
            elem.setAttribute("style", "visibility: hidden;transform: translateY(-40px);transition: all 1s;opacity:0;");
        }
        
    }
    animateFade = function(elem){
        if(inViewport(elem)){
            elem.setAttribute("style", "visibility: visible;opacity:1;transition: all 1s;");
        }
        else {
            elem.setAttribute("style", "visibility: hidden;opacity:0;transition: all 1s;");
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
            title.setAttribute("style","visibility: visible;opacity: 1;transform: translateY(0px);transition: all 1s;");
            body.setAttribute("style","visibility: visible;opacity: 1;transform: translateY(0px);transition: all 1s;");
            footer.setAttribute("style","visibility: visible;opacity: 1;transform: translateX(0px);transition: all 1s;");
        });
        element.addEventListener('mouseleave',function(){
            this.setAttribute("style", `background: ${element.getAttribute('aria-src')} no-repeat;background-size:${element.offsetWidth}px ${element.offsetHeight}px;background-position: center;opacity:1;transition: all 1s;`);
            title.setAttribute("style","visibility: hidden;opacity: 0;transform: translateY(-20px);transition: all 1s;");
            body.setAttribute("style","visibility: hidden;opacity: 0;transform: translateY(20px);transition: all 1s;");
            footer.setAttribute("style","visibility: hidden;opacity: 0;transform: translateX(-30px);transition: all 1s;");
        });
    }
}
let mouseCursor = document.querySelector('.mouse-block');
    window.addEventListener('mousemove', function(e){
        mouseCursor.setAttribute("style",`visibility: visible;opacity: 1;top:${e.pageY}px;left:${e.pageX}px;`);
    });
let a = document.getElementsByTagName('a');
let button = document.getElementsByTagName('button');
for(var i=0;i<a.length;i++) {
    const link = a[i];
    link.addEventListener('mouseover',() =>{
        mouseCursor.classList.add("mouse-hover");
    });   
    link.addEventListener('mouseleave',() =>{
        mouseCursor.classList.remove("mouse-hover");
    });     
};
for(var i=0;i<button.length;i++) {
    const link = button[i];
    link.addEventListener('mouseover',() =>{
        mouseCursor.classList.add("mouse-hover");
    });   
    link.addEventListener('mouseleave',() =>{
        mouseCursor.classList.remove("mouse-hover");
    });     
};
document.getElementById('open').addEventListener('mouseover',()=>{mouseCursor.classList.add("mouse-hover");});
document.getElementById('open').addEventListener('mouseleave',()=>{mouseCursor.classList.remove("mouse-hover");});
document.getElementById('cancel').addEventListener('mouseover',()=>{mouseCursor.classList.add("mouse-hover");});
document.getElementById('cancel').addEventListener('mouseleave',()=>{mouseCursor.classList.remove("mouse-hover");});
for (let i = 0; i < projects.length; i++) {
    const link = projects[i];
    link.addEventListener('mouseover',() =>{
        mouseCursor.classList.add("mouse-hover");
    });   
    link.addEventListener('mouseleave',() =>{
        mouseCursor.classList.remove("mouse-hover");
    });     
};