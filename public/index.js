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
                                    <h5>✔️Core Backend:</h5>
                                    <p>Node.js, Express.js,pring Boot</p>
                                </div>
                                <div class="two">
                                    <h5>✔️API & System Design:</h5>
                                    <p> Building scalable REST APIs, implementing business logic, and designing secure, role-based systems.</p>
                                </div>
                                <div class="three">
                                    <h5>✔️Database Management:</h5>
                                    <p>PostgreSQL, MySQL, MongoDB</p>
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
                <h4>*️⃣Part-time Teacher (Math & English) | May 2024 - December 2025</h4>
                <p>Bashundhara Public School and College | Dhaka, Bangladesh</p>
            </div>
        <div class="one">
                <h4>*️⃣Backend Development Intern| January 2026 - May 2026</h4>
                <p>Smart Software Ltd | Dhaka, Bangladesh</p>
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
                <h4>✅Bachelor of Science in Computer Science (Completed) | September 2021 - July 2026</h4>
                <p>Independent University, Bangladesh (IUB) | Dhaka, Bangladesh</p>
            </div>
            <div class="two">
                <h4>✅Alim(Higher Secondary Certificate/HSC Equivalent) – Science Group | July 2018 – January 2021</h4>
                <p>Tamirul Millat Kamil Madrasah | Dhaka, Bangladesh</p>
            </div>
            <div class="two">
                <h4>✅Dakhil(Secondary School Certificate/SSC Equivalent) – Science Group | January 2016 – May 2018</h4>
                <p>Tamirul Millat Kamil Madrasah | Dhaka, Bangladesh</p>
            </div>
            </div> 
            `})
    ///////////////// skilles,exp: edu: endt//////////////////////////////////