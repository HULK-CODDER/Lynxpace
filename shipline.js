let shipli = document.querySelector(".shipline")
// shipline.style.backgroundColor="red"
let schild = shipli.children
let btn0=document.getElementById("btn0")
let dialog = document.querySelector(".section")
// dialog.classList.toggle("cross")

schild[0].addEventListener("click",()=>{
   window.open("https://sites.google.com/one-line.com/empty-pickup-return", "_blank");
});
schild[1].addEventListener("click",()=>{
   window.open("https://www.msc.com/en/local-information/america/canada", "_blank");
});
schild[2].addEventListener("click",()=>{
   window.open("https://www.hapag-lloyd.com/en/services-information/offices-localinfo/north-america/canada.html", "_blank");
});
schild[3].addEventListener("click",()=>{
   window.open("https://apps.usa.cma-cgm.com/econtainer", "_blank");
});
schild[4].addEventListener("click",()=>{
   window.open("https://esvc.smlines.com/smline/CUP_HOM_3053.do", "_blank");
});
schild[5].addEventListener("click",()=>{
   window.open("https://www.maersk.com/local-information/north-america/canada/import", "_blank");
});
schild[6].addEventListener("click",()=>{
   window.open("https://n2c3-s.lines.coscoshipping.com/#/", "_blank");
});
schild[7].addEventListener("click",()=>{
   window.open("https://e-solution.yangming.com/LocalSite/Index_Local.aspx?localver=CA", "_blank");
});
schild[8].addEventListener("click",()=>{
   window.open("https://n2c3-s.home.oocl.com/#/", "_blank");
});
schild[9].addEventListener("click",()=>{
   window.open("https://www.evergreen-shipping.us/", "_blank");
});
schild[10].addEventListener("click",()=>{
   window.open("https://www.hmm21.com/company.do", "_blank");
});
schild[11].addEventListener("click",()=>{
   window.open("https://www.zim.com/tools/econtainer", "_blank");
});
schild[12].addEventListener("click",()=>{
   window.open("https://www.aclcargo.com/empty-return-locations", "_blank");
});
schild[13].addEventListener("click",()=>{
   dialog.classList.toggle("cross")
});
schild[14].addEventListener("click",()=>{
   dialog.classList.toggle("cross")
});

btn0.addEventListener("click",()=>{
        dialog.classList.toggle("cross")
});