
// Axcora - Pure JS - Dark/Light Consistent + Lab Pagination + Lite YouTube
(function(){
  const themeBtn = document.getElementById('themeBtn');
  const saved = localStorage.getItem('axcora-theme') || 'dark';
  document.body.setAttribute('data-theme', saved);
  if(themeBtn) themeBtn.textContent = saved==='dark'?'◑':'◐';
  if(themeBtn){
    themeBtn.addEventListener('click', ()=>{
      const cur = document.body.getAttribute('data-theme');
      const nxt = cur==='dark'?'light':'dark';
      document.body.setAttribute('data-theme', nxt);
      localStorage.setItem('axcora-theme', nxt);
      themeBtn.textContent = nxt==='dark'?'◑':'◐';
    });
  }

  // Lite YouTube - loads iframe only on click (Lighthouse optimized)
  document.querySelectorAll('.video-wrap .lite').forEach(lite=>{
    const wrap = lite.closest('.video-wrap');
    const videoId = wrap?.dataset?.yt;
    if(!videoId) return;
    function load(){
      wrap.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1" title="Axcora Lab Video" allow="autoplay; encrypted-media" allowfullscreen loading="lazy"></iframe>`;
    }
    lite.addEventListener('click', load);
    lite.addEventListener('keydown', e=>{ if(e.key==='Enter') load(); });
  });

  // Lab Pagination + Filter - if grid exists
  const labsData = window.__AXCORA_LABS__ || null;
  const grid = document.getElementById('grid');
  const pagi = document.getElementById('pagi');
  const filters = document.getElementById('filters');
  if(labsData && grid && pagi){
    let filter='all'; let page=1; const perPage=6;
    function getF(){ return filter==='all'?labsData:labsData.filter(l=>l.cat.includes(filter)); }
    function render(){
      const f=getF(); const total=Math.ceil(f.length/perPage);
      const items=f.slice((page-1)*perPage, page*perPage);
      grid.innerHTML = items.map(l=>`
        <a class="card" href="${l.id}.html" aria-label="${l.title}">
          <div class="card-meta"><span>${l.cat}</span><span class="badge badge-live">● ${l.status}</span></div>
          <img class="thumb" src="${l.image}" loading="lazy" width="600" height="338" alt="${l.title}">
          <div class="tags">${l.tags.map(t=>`<span>${t}</span>`).join('')}</div>
          <h3>${l.title}</h3>
          <div class="desc">${l.excerpt}</div>
          <div class="card-foot"><span>View research →</span><span>Video + Source</span></div>
        </a>`).join('');
      pagi.innerHTML = Array.from({length:total},(_,i)=>`<button class="${i+1===page?'active':''}" onclick="window.__goPage(${i+1})" aria-label="Page ${i+1}">${i+1}</button>`).join('');
    }
    window.__goPage = (p)=>{ page=p; render(); window.scrollTo({top:0,behavior:'smooth'}); };
    if(filters){
      filters.addEventListener('click', e=>{
        if(e.target.tagName==='BUTTON'){
          filters.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
          e.target.classList.add('active');
          filter=e.target.dataset.f; page=1; render();
        }
      });
    }
    render();
  }
})();
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mobBtn');
  const menu = document.getElementById('navMenu');
  
  if(!btn || !menu) return; // biar gak error kalo id salah

  btn.onclick = () => {
    menu.classList.toggle('open');
    btn.textContent = menu.classList.contains('open') ? '✕' : '☰';
  };
});
