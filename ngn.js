// ngn.js - smooth scroll, collapsibles, reveal, gallery modal, WhatsApp contact
document.addEventListener('DOMContentLoaded', function(){
  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click', function(e){const target=document.querySelector(this.getAttribute('href')); if(target){e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'});}});});

  // collapsibles
  document.querySelectorAll('.collapsible').forEach(btn=>{btn.addEventListener('click', function(){const content=this.nextElementSibling; content.classList.toggle('open'); const arrow=this.querySelector('.arrow'); if(arrow) arrow.textContent = content.classList.contains('open') ? '▲' : '▼';});});

  // reveal on scroll
  const reveal = el=>{const r=el.getBoundingClientRect(); if(r.top < window.innerHeight - 60){ el.style.opacity=1; el.style.transform='translateY(0)'; }};
  document.querySelectorAll('.section, .service-card, .hero').forEach(el=>{ el.style.opacity=0; el.style.transform='translateY(18px)'; });
  const runReveal = ()=>document.querySelectorAll('.section, .service-card, .hero').forEach(reveal);
  window.addEventListener('scroll', runReveal); window.addEventListener('load', runReveal);

  // gallery modal
  const modal = document.getElementById('galleryModal');
  if(modal){ document.querySelectorAll('.gallery-grid img').forEach(img=>{ img.addEventListener('click', ()=>{ modal.querySelector('img').src = img.src; modal.style.display = 'flex'; }); });
    modal.querySelector('.close').addEventListener('click', ()=> modal.style.display='none');
    modal.addEventListener('click', (e)=>{ if(e.target===modal) modal.style.display='none'; });
  }

  // WhatsApp contact form behaviour
  // WhatsApp contact form behaviour
  const form = document.querySelector('.contact-form');
  if(form){
      form.addEventListener('submit', function(e){
        e.preventDefault();

        const name = form.querySelector('[name=name]').value || 'N/A';
        const email = form.querySelector('[name=email]').value || 'N/A';
        const phone = form.querySelector('[name=phone]').value || 'N/A';
        const message = form.querySelector('[name=message]').value || 'N/A';

        // Proper WhatsApp-safe encoding (fixes space, &, ?, = etc.)
        const text =
            "Hello NGN Team.%0A" +
            "Name: " + encodeURIComponent(name) + "%0A" +
            "Email: " + encodeURIComponent(email) + "%0A" +
            "Phone: " + encodeURIComponent(phone) + "%0A" +
            "Message: " + encodeURIComponent(message);

        const url = "https://wa.me/919399484682?text=" + text;

        window.open(url, "_blank");
    }); }
});
