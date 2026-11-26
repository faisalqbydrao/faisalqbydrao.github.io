// home layout: UPP card with Term 1 / Term 2, and 1st year card
(function(){
var st=document.createElement('style');
st.textContent='details.g summary.gs{display:flex;align-items:center;gap:12px}details.g details.g{margin:0 0 10px}details.g details.g summary{font-size:16px}.mainc{align-self:start}details.g.u{--c:#0e7c86}details.g.t1{--c:#4f8a2b}details.g.t2{--c:#c23d6b}details.g.y{--c:#2f6fa8}details.g details.g.t1,details.g details.g.t2{background:color-mix(in srgb,var(--c) 10%,var(--bg))}';
document.head.appendChild(st);
function tx(en,ar){return (typeof L!=='undefined'&&L=='ar')?ar:en}
function sm(icon,title){return '<summary class="gs">'+ico(icon)+'<span>'+title+'</span></summary>'}
function grp(cls,icon,title,inner,open){return '<details class="g '+cls+'"'+(open?' open':'')+'>'+sm(icon,title)+inner+'</details>'}
function sub(cls,title,items,fn,open){return '<details class="g '+cls+'"'+(open?' open':'')+'><summary>'+title+'</summary>'+items.map(fn).join('')+'</details>'}
function term(cls,title,chs,lbs,open){
 return grp(cls,'book',title,sub(cls,tx('Chapters','الفصول'),chs,chc,1)+sub(cls,tx('Labs','اللابات'),lbs,lab,0),0)}
window.home=home=function(){
 var upp=grp('u','cells',t('upp'),term('t1',tx('Term 1','الترم الأول'),CH,L1,1)+term('t2',tx('Term 2','الترم التاني'),CH2,L2,0),1);
 var y1=grp('y','body',t('fy'),FY.map(fyc).join(''),0);
 return '<div class="lay"><div class="dr"><span>DR AO</span><svg viewBox="0 0 240 24" aria-hidden="true"><path d="M0 12h70l8-9 10 18 9-14 6 5h137" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="mainc"><h1>'+t('h')+'</h1><p class="mute">'+t('s')+'</p>'+upp+y1+'</div>'+about()+'</div>'};
if(typeof v!=='undefined'&&v=='home')render();
})();
