let tracing = document.querySelector(".tracing");
let tchilds=tracing.children;
const trackingLinks = [
  "https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking",
  "https://www.msc.com/en/track-a-shipment",
  "https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html",
  "https://www.cma-cgm.com/eBusiness/Tracking",
  "https://esvc.smlines.com/smline/CUP_HOM_3301.do",
  "https://www.maersk.com/tracking/",
  "https://elines.coscoshipping.com/ebusiness/cargoTracking",
  "https://www.yangming.com/en/esolution/cargo_tracking",
  "https://www.oocl.com/eng/ourservices/eservices/cargotracking/Pages/CargoTracking.aspx",
  "https://www.shipmentlink.com/",
  "https://www.hmm21.com/e-service/general/trackNTrace/TrackNTrace.do",
  "https://www.zim.com/tools/track-a-shipment",
  "https://www.aclcargo.com/track-trace/",
  "https://www.swireshipping.com/requestTrackShipment",
  "https://www.eimskip.com/find-shipment/"
];


for (let i = 0; i < tchilds.length; i++) {
   tchilds[i].addEventListener("click",()=>{
   window.open(`${trackingLinks[i]}`, "_blank");
});
    
}