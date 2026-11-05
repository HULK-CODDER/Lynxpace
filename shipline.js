document.addEventListener("DOMContentLoaded", () => {
    const shipli = document.querySelector(".shipline");
    const btn0 = document.getElementById("btn0");
    const dialog = document.querySelector(".section");
    const dialogchange = document.getElementById("dialogchange");

    if (!shipline) {
        console.error("Element .shipline not found!");
        return;
    }

    const schild = shipli.children;

    const urls = [
        "https://sites.google.com/one-line.com/empty-pickup-return",
        "https://www.msc.com/en/local-information/america/canada",
        "https://www.hapag-lloyd.com/en/services-information/offices-localinfo/north-america/canada.html",
        "https://apps.usa.cma-cgm.com/econtainer",
        "https://esvc.smlines.com/smline/CUP_HOM_3053.do",
        "https://www.maersk.com/local-information/north-america/canada/import",
        "https://n2c3-s.lines.coscoshipping.com/#/",
        "https://e-solution.yangming.com/LocalSite/Index_Local.aspx?localver=CA",
        "https://n2c3-s.home.oocl.com/#/",
        "https://www.evergreen-shipping.us/",
        "https://www.hmm21.com/company.do",
        "https://www.zim.com/tools/econtainer",
        "https://www.aclcargo.com/empty-return-locations"
    ];

    // Loop through standard URL children safely
    urls.forEach((url, index) => {
        if (schild[index]) {
            schild[index].addEventListener("click", () => {
                window.open(url, "_blank");
            });
        }
    });

    // Special items 13 and 14
    if (schild[13] && dialog && dialogchange) {
        schild[13].addEventListener("click", () => {
            dialog.classList.toggle("cross");
            dialogchange.innerText = `we need to use the following email for thre return locations <br>"WB Canada Logistics" <na.canadalogistics@swireshipping.com>;\n"Abraham.Medina@swireshipping.com" <Abraham.Medina@swireshipping.com>`;
        });
    }

    if (schild[14] && dialog && dialogchange) {
        schild[14].addEventListener("click", () => {
            dialog.classList.toggle("cross");
            dialogchange.innerText = `we need to use the following email for thre return locations <br>"CA Import" <caimport@eimskip.com>;\n"Eimskip Canada Sales" <casales@eimskip.com>`;
        });
    }

    if (btn0 && dialog) {
        btn0.addEventListener("click", () => {
            dialog.classList.toggle("cross");
        });
    }
});
