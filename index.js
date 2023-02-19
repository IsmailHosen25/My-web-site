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


   ///////////////// skilles,exp: edu: start//////////////////////////////////
   const skills=document.getElementById("Skills")
   const exp=document.getElementById("exp")
   const edu=document.getElementById("edu")
   const skexedadded=document.getElementById("sed-add");
      
  skills.addEventListener("click",()=>{
    skills.classList.toggle('active')
    exp.classList.remove('active')
    edu.classList.remove('active')
    skills.style.breakAfter.endsWith="80%"
    skexedadded.innerHTML=` 
    <div class="allabout">
    <div class="one">
        <h5>Web Develoment</h5>
        <p>Frontend web develoment</p>
    </div>
    <div class="two">
        <h5>Digital marketing</h5>
        <p>social media markiting,content markiting and online advertising</p>
    </div>
    <div class="three">
        <h5>Photography</h5>
        <p>Macro photography, Travel photography</p>
     </div>
 </div> 
    `})
    exp.addEventListener("click",()=>{
        exp.classList.toggle('active')
        edu.classList.remove('active')
        skills.classList.remove('active')
        skexedadded.innerHTML=` 
        <div class="allabout">
        <div class="one">
           <h5>2023-Current</h5>
           <p>Web devlopment traning at WEB-D</p>
        </div>
        <div class="two">
          <h5>2022 - 2023</h5>
          <p>Worked for GMM</p>
        </div>
       </div> 
        `})
        edu.addEventListener("click",()=>{
            edu.classList.toggle('active')
            exp.classList.remove('active')
            skills.classList.remove('active')
            skexedadded.innerHTML=` 
            <div class="allabout">
            <div class="one">
                <h5>2023-Current</h5>
                <p>Studing B.sc in cse at IUB</p>
            </div>
            <div class="two">
                <h5>2023-Current</h5>
                <p>Digital marketing at ABCL IT</p>
            </div>
            </div> 
            `})
    ///////////////// skilles,exp: edu: endt//////////////////////////////////