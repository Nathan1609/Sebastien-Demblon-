var EMAIL="contact@exemple.be";
document.getElementById("f").addEventListener("submit",function(e){e.preventDefault();
var d=new FormData(this),b="Nom : "+d.get("nom")+"\nTéléphone : "+d.get("tel")+"\n\n"+d.get("msg");
document.getElementById("ok").textContent="Votre application mail va s’ouvrir pour envoyer la demande.";
location.href="mailto:"+EMAIL+"?subject="+encodeURIComponent("Demande de devis – "+d.get("nom"))+"&body="+encodeURIComponent(b);});

(function(){
var d=document,r=d.documentElement;r.classList.add("js");
var h=d.querySelector("header");
function s(){h.classList.toggle("scrolled",window.scrollY>8)}s();window.addEventListener("scroll",s,{passive:true});
if(!("IntersectionObserver" in window)||matchMedia("(prefers-reduced-motion:reduce)").matches){return}
var els=d.querySelectorAll("main section h2,.lead,.card,.split>*,.zones li,details,.trust li,.panel");
els.forEach(function(e){var p=e.parentElement,i=Array.prototype.indexOf.call(p.children,e);
if(e.matches(".card,.zones li,details,.trust li"))e.style.setProperty("--d",Math.min(i,6)*0.09+"s");
e.classList.add("rv")});
var o=new IntersectionObserver(function(a){a.forEach(function(x){if(x.isIntersecting){var e=x.target;e.classList.add("in");o.unobserve(e);
setTimeout(function(){e.classList.remove("rv","in");e.style.removeProperty("--d")},1100)}})},{threshold:.15,rootMargin:"0px 0px -40px 0px"});
els.forEach(function(e){o.observe(e)});
})();
