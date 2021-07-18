
const nav = document.querySelector(".nav");


window.addEventListener("scroll",fixedNav);



function fixedNav(){
   
    if(window.scrollY>nav.offsetHeight ){
        nav.classList.add("active")
    }

    if(window.scrollY < nav.offsetHeight ){
        nav.classList.remove("active")
       
    }
}