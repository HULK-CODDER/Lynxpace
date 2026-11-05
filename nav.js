let nave= document.querySelector(".nav_elements")
let shipline = document.getElementById("ships")
let tracingss = document.getElementById("trace")
let terminal = document.getElementById("terminal")
let home = document.getElementById("home")
// shipline.backgrounColor="red"
let nav_e =nave.children

// nav_e[0].addEventListener("click",()=>{
//     home.scrollIntoView({
//         behavior: "smooth"
//     });

// });
nav_e[0].addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

nav_e[1].addEventListener("click",()=>{
    shipline.scrollIntoView({
        behavior: "smooth"
    });

});
nav_e[2].addEventListener("click",()=>{
    tracingss.scrollIntoView({
        behavior: "smooth"
    });

});
nav_e[3].addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // smooth scroll effect
    });
  });
nav_e[4].addEventListener("click",()=>{
    window.open("http://www.hutchtransportation.com/", "_blank");
});
