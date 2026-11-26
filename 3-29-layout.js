// home layout: blue UPP card wrapping the original HSF 1 / HSF 2 blocks, plus 1st year card
(function(){
var st=document.createElement('style');
st.textContent='@media(min-width:820px){.lay{grid-template-rows:auto 1fr}}details.g summary.gs{display:flex;align-items:center;gap:12px}details.g details.g{margin:12px 0}details.g details.g summary{font-size:17px}details.g.y{--c:#2f6fa8}details.g details.g.a{--c:#0e7c86}details.g details.g.b{--c:#7a5fd0}details.g details.g.c{--c:#4f8a2b}details.g details.g.d{--c:#c23d6b}';
document.head.appendChild(st);
function sm(icon,title){return '<summary class="gs">'+ico(icon)+'<span>'+title+'</span></summary>'}
function grp(cls,icon,title,inner,open){return '<details class="g '+cls+'"'+(open?' open':'')+'>'+sm(icon,title)+inner+'</details>'}
window.home=home=function(){
 var inner=box('a','HSF 1 Chapters',CH,chc,1)+box('c','HSF 1 Labs',L1,lab,0)+box('b','HSF 2 Chapters',CH2,chc,0)+box('d','HSF 2 Labs',L2,lab,0);
 var upp=grp('y','cells',t('upp'),inner,1);
 var y1=grp('y','body',t('fy'),FY.map(fyc).join(''),0);
 return '<div class="lay"><div class="dr"><span>DR AO</span><svg viewBox="0 0 240 24" aria-hidden="true"><path d="M0 12h70l8-9 10 18 9-14 6 5h137" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="mainc"><h1>'+t('h')+'</h1><p class="mute">'+t('s')+'</p>'+upp+y1+'</div>'+about()+'</div>'};
if(typeof v!=='undefined'&&v=='home')render();
})();

// chapter photos (preview with ?img=1)
(function(){
if(!/[?&]img=1/.test(location.search))return;
var IM={4:'5-ch4.jpg',7:'6-ch7.jpg',8:'7-ch8.jpg',12:'8-ch12.jpg'};
var st=document.createElement('style');
st.textContent='.ci.ph2{padding:0;overflow:hidden;width:54px;height:54px;border-radius:12px;background:#fff}.ci.ph2 img{width:100%;height:100%;object-fit:cover;display:block}';
document.head.appendChild(st);
var o=window.chc;
window.chc=chc=function(n){var h=o(n);if(!IM[n])return h;return h.replace(/<span class="ci">[\s\S]*?<\/svg><\/span>/,'<span class="ci ph2"><img src="'+IM[n]+'" alt="" loading="lazy" width="54" height="54"></span>')};
if(typeof v!=='undefined'&&v=='home')render();
})();
