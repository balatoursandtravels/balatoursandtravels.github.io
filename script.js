document.addEventListener("DOMContentLoaded",()=>{
const $=s=>document.querySelector(s), wa=m=>`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(m)}`;
$("#location-list").innerHTML=SITE.locations.map(x=>`<option value="${x}"></option>`).join("");
$("#brand").textContent=SITE.brand;$("#tagline").textContent=SITE.tagline;$("#kicker").textContent=SITE.heroKicker;
$("#hero-title").textContent=SITE.heroTitle;$("#hero-text").textContent=SITE.heroText;
$("#top-phone").textContent=SITE.phone.join(" / ");$("#top-email").textContent=SITE.email;$("#top-address").textContent=SITE.address;
const highlights=[
 ["🚕","Local & Outstation Taxi","Comfortable rides for local and long-distance travel."],
 ["🏔️","Himachal Tour Packages","Plan memorable trips across Himachal Pradesh."],
 ["📞","24/7 Booking Support","Easy booking assistance whenever you need it."],
 ["💰","Transparent Pricing","Clear trip details with no confusing charges."],
 ["🗺️","Custom Trip Planning","Pickup, drop and itinerary tailored to your journey."],
 ["👨‍✈️","Experienced Local Drivers","Drivers familiar with Himachal routes and hill roads."]
];
$("#highlights").innerHTML=highlights.map(x=>`<div class="highlight"><b>${x[0]} ${x[1]}</b><span>${x[2]}</span></div>`).join("");
$("#nav").innerHTML=SITE.nav.map(x=>`<a href="${x[1]}">${x[0]}</a>`).join("");
const icons=["🚕","🏔️","📍","✈️","🚆","🌄"];
$("#services-grid").innerHTML=SITE.services.map((x,i)=>`<article class="card"><div class="icon">${icons[i]}</div><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("");
const fleetImages=["amaze.jpg","dzire.jpg","innova.jpg","fortuner.jpg","tempo.jpg","tempo.jpg","amaze.jpg","dzire.jpg"];
$("#fleet-grid").innerHTML=SITE.fleets.map((x,i)=>`<article class="vehicle"><div class="vehicleimg"><img src="${fleetImages[i]}" alt="${x[0]} - Bala Tours & Travels" loading="lazy"></div><div class="vehiclebody"><h3>${x[0]}</h3><p>${x[1]}</p><div class="vehiclebottom"><span>${x[2]} seats<br>${x[3]}</span><a target="_blank" href="${wa("Hi Bala Tours & Travels, I want to book a "+x[0]+".")}">WhatsApp</a></div></div></article>`).join("");
const destinationImages=["manali.jpg","shimla.jpg","kasol.jpg","dharamshala.jpg","kullu.jpg","spiti.jpg","hero-mountains.jpg","images/about-road.jpg"];
const templeImages=["manali.jpg","dharamshala.jpg","shimla.jpg","kullu.jpg","about-road.jpg","spiti.jpg","kasol.jpg","hero-mountains.jpg"];
const renderPlaces=(arr,target,images)=>$(target).innerHTML=arr.map((x,i)=>`<article class="place" style="background-image:linear-gradient(0deg,#000b,transparent 65%),url('${images[i]}')"><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join("");
renderPlaces(SITE.destinations,"#destinations-grid",destinationImages);renderPlaces(SITE.temples,"#temples-grid",templeImages);
$("#phones").textContent=SITE.phone.join(" / ");$("#email").textContent=SITE.email;$("#address").textContent=SITE.address;
$("#fbrand").textContent=SITE.brand;$("#fphone").textContent=SITE.phone.join(" / ");$("#femail").textContent=SITE.email;$("#faddress").textContent=SITE.address;
$("#wa-link").href=wa("Hello Bala Tours & Travels, I want to enquire about taxi/tour services.");$("#whatsapp").href=wa("Hello Bala Tours & Travels, I want to enquire about taxi/tour services.");$("#call").href="tel:"+SITE.phone[0];
$("#booking").addEventListener("submit",e=>{
 e.preventDefault();
 const pickup=$("#pickup").value.trim(), drop=$("#drop").value.trim(), vehicle=$("#vehicle").value.trim(), date=$("#date").value;
 if(!pickup || !drop || pickup==="Select pickup" || drop==="Select destination" || !date){
   alert("Please select Pickup, Drop and Date first.");
   return;
 }
 const formattedDate=new Date(date+"T00:00:00").toLocaleDateString("en-IN",{day:"2-digit",month:"long",year:"numeric"});
 $("#result-title").textContent=`${pickup} → ${drop}`;
 $("#result-details").textContent=`${formattedDate} • ${vehicle || "Vehicle to be confirmed"} • Bala Tours & Travels`;
 $("#result-wa").href=wa(`New Ride Enquiry
Pickup: ${pickup}
Drop: ${drop}
Vehicle: ${vehicle || "Any suitable vehicle"}
Date: ${formattedDate}`);
 $("#ride-result").hidden=false;
 $("#ride-result").scrollIntoView({behavior:"smooth",block:"nearest"});
});
$("#inq").addEventListener("submit",e=>{e.preventDefault();window.open(wa(`New Website Enquiry\nName: ${$("#name").value}\nPhone: ${$("#inqphone").value}\nMessage: ${$("#message").value}`),"_blank")});
$("#menu").onclick=()=>{const n=$("#nav");n.style.display=n.style.display==="flex"?"none":"flex"};
$("#year").textContent=new Date().getFullYear();
});
