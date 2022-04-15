const mobileMenuButton = document.querySelector(".nav__name-mobile");
const menu =  document.querySelector(".nav__menu");
const nav = document.querySelector(".nav");


mobileMenuButton.addEventListener("click",function(){
    menu.classList.toggle("act");
    mobileMenuButton.classList.toggle("active")
})

window.addEventListener("scroll",function(){
    if(window.scrollY>0)
    {
        nav.classList.remove("color2");
        nav.classList.add("color"); 
    }
    else{
        nav.classList.remove("color");
        nav.classList.add("color2");
    }
})

const btns = [...document.querySelectorAll(".nav__menu-item--a")];

for(let i=0;i<btns.length;i++)
{
    btns[i].addEventListener("click",function(){
        menu.classList.remove("act");
        mobileMenuButton.classList.remove("active")
    })
}
