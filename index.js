///////////////// Nav start//////////////////////////////////


const navManu = document.getElementById("nav-manu");
const navOpen=document.getElementById("nav-open");
const navClose=document.getElementById("nav-close");

navOpen.addEventListener('click',()=>{
        navManu.classList.toggle("Show-manu");
})
navClose.addEventListener("click", ()=>{
    navManu.classList.remove("Show-manu");
})
const navLink=document.querySelectorAll(".nav-link");
function navLinkactive(){
    navManu.classList.remove("Show-manu");
}
 navLink.forEach(n=> n.addEventListener("click",navLinkactive));


 ///////////////// Nav start//////////////////////////////////

 ///////////////// Dark Them start//////////////////////////////////

const darkthembtn=document.getElementById("them-chinging");
const darkThem="dark-theme";
const iconThem="uil-sun"

const selectedTheme=localStorage.getItem("selected-theme");
const selectedIcon=localStorage.getItem("selected-icon");

const getCurrentTheme=()=>{document.body.classList.contains(darkThem)? "dark":"light"}
const getCurrentIcon=()=>{document.body.classList.contains(iconThem)? "uil-moon":"uil-sun"}

// if(selectedTheme){
//     document.body.classList[selectedTheme==="dark"? "add":"Remove"](darkThem);
//     darkthembtn.classList[selectedIcon==="uil-moon"? "add":"Remove"](iconThem);
// }

darkthembtn.addEventListener("click",()=>{
    document.body.classList.toggle(darkThem)
    darkthembtn.classList.toggle(iconThem)
    localStorage.setItem("selected-theme",getCurrentTheme())
    localStorage.setItem("selected-icon",getCurrentIcon())
})
  ///////////////// Dark Them end//////////////////////////////////
