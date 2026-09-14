// Axcora - Pure JS - Dark/Light Consistent + Lite YouTube
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
})();

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mobBtn');
  const menu = document.getElementById('navMenu');
  if(!btn || !menu) return;
  btn.onclick = () => {
    const isOpen = menu.classList.toggle('open');
    btn.textContent = isOpen ? '✕' : '☰';
  };
});