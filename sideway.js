let extra_links_button = document.getElementById('side_way')
let extra_links_section=document.getElementById('extra_links_section')
let oocl_detention = document.getElementById('oocl_detention')
let sm_line_billing = document.getElementById('sm_line_billing')
let one_line_billing = document.getElementById('one_line_billing')
let one_line_detention = document.getElementById('one_line_detention')
let hmm_detention = document.getElementById('hmm_detention')
let hmm_detention2 = document.getElementById('hmm_detention2')
let sml_bl = document.getElementById('sml_bl')
let sml_detention = document.getElementById('sml_detention')


extra_links_button.addEventListener('click',()=>{
    extra_links_section.classList.toggle('side_ways_on')
})
 document.addEventListener("click", (e) => {
    if (!extra_links_section.contains(e.target) && !extra_links_button.contains(e.target)) {
        extra_links_section.classList.remove('side_ways_on')

    }

});



oocl_detention.addEventListener("click",()=>{
    window.open('https://www.oocl.com/canada/eng/Pages/default.aspx',"_blank")
})
sm_line_billing.addEventListener("click",()=>{
    window.open('https://partner.smlines.com/sppWeb/login/login.jsp',"_blank")
})
one_line_billing.addEventListener("click",()=>{
    window.open('https://ecomm.one-line.com/ecom/SPP_TRS_1120.do?menuId=TRS_100013&parentId=TRS_000001',"_blank")
})
one_line_detention.addEventListener("click",()=>{
    window.open('https://ecomm.one-line.com/ecom/SPP_TRS_1120.do?menuId=TRS_100013&parentId=TRS_000001',"_blank")
})
hmm_detention.addEventListener("click",()=>{
    window.open('https://www.hmm21.com/e-service/import/import/demdet/demdet.do',"_blank")
})
hmm_detention2.addEventListener("click",()=>{
    window.open('https://www.hmm21.com/e-service/import/smryInquiry/ImpSmryInqSimple.do',"_blank")
})
sml_bl.addEventListener("click",()=>{
    window.open('https://esvc.smlines.com/smline/CUP_HOM_3230.do?sessLocale=en',"_blank")
})
sml_detention.addEventListener("click",()=>{
    window.open('https://esvc.smlines.com/smline/CUP_HOM_3711.do?sessLocale=en',"_blank")
})

