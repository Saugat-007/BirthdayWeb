function showPage(id){
  // hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(p=>{ p.style.display = 'none'; p.classList.remove('active'); });
  const el = document.getElementById(id);
  if(el){ el.style.display = 'block'; el.classList.add('active'); window.scrollTo(0,0); }
}

function nextpage0(){ showPage('page1'); }
function nextpage1(){ showPage('page2'); }
function nextpage2(){ showPage('page3'); }
function page4(){ showPage('page4'); }
function page5(){ showPage('page5'); }
function page6(){ showPage('page6'); }
function page7From3(){ showPage('page7'); }
function page7From4(){ showPage('page7'); }
function page7From5(){ showPage('page7'); }
function page7From6(){ showPage('page7'); }
function page8(){ showPage('page8'); }
function page9(){ showPage('page9'); }

// show initial page when DOM is ready
window.addEventListener('DOMContentLoaded', function(){ showPage('page0'); });