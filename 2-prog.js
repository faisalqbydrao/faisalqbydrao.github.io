(function(){try{
var K=null,OPENS={},URLS='https://ckltdtdrektkjupjywgd.supabase.co',KY='sb_publishable_uzJ-tolS1O9xkr8SKC_EjQ_G5Tonit3',TK=null,DIRTY={},PT=null;
var ld=function(){if(!K)return{};try{return JSON.parse(localStorage.getItem(K)||'{}')}catch(e){return{}}};
var sv=function(o,ks){if(!K)return;try{localStorage.setItem(K,JSON.stringify(o))}catch(e){}(ks||[]).forEach(function(k){DIRTY[k]=1});if(ks&&ks.length)sched()};
function rpc(n,a){return fetch(URLS+'/rest/v1/rpc/'+n,{method:'POST',keepalive:true,headers:{apikey:KY,'Content-Type':'application/json'},body:JSON.stringify(a)}).then(function(r){return r.json()})}
function sched(now){clearTimeout(PT);PT=setTimeout(flush,now?200:3000)}
function flush(){if(!K||!TK)return;var all=ld(),ks=Object.keys(DIRTY);DIRTY={};ks.forEach(function(k){if(all[k])rpc('save_prog',{t:TK,k:k,d:all[k]}).then(function(r){if(!r||!r.ok)DIRTY[k]=1}).catch(function(){DIRTY[k]=1})})}
function sync(){var t=null;try{t=localStorage.getItem('fq_token')}catch(e){}
 if(t===TK)return;TK=t;K=null;if(!t)return;
 rpc('check',{t:t}).then(function(c){if(!c||!c.ok||TK!==t)return;K='fq_prog_v1_'+c.username;
  return rpc('load_prog',{t:t}).then(function(r){if(!r||!r.ok||TK!==t)return;var all=ld(),rows=r.rows||{},ch=false;
   Object.keys(rows).forEach(function(k){var l=all[k],x=rows[k];if(!l||(x.ts||0)>(l.ts||0)){all[k]=x;ch=true}else if((l.ts||0)>(x.ts||0))DIRTY[k]=1});
   Object.keys(all).forEach(function(k){if(!(k in rows))DIRTY[k]=1});
   try{localStorage.setItem(K,JSON.stringify(all))}catch(e){}
   sched(1);if(ch&&(v=='home'||v=='sec'))render()})}).catch(function(){TK=null})}
setInterval(sync,1500);sync();
var T=function(e,a){return typeof L!=='undefined'&&L=='ar'?a:e};
var st=document.createElement('style');
st.textContent='.card{position:relative;overflow:hidden}.pbar{position:absolute;left:0;bottom:0;height:5px;background:var(--acc);border-radius:0 3px 3px 0;opacity:.85;transition:width .3s}.ptr{position:absolute;left:0;right:0;bottom:0;height:5px;background:color-mix(in srgb,var(--acc) 14%,transparent)}.pt{color:var(--acc);font-weight:600}';
st.textContent+='details.g{background:color-mix(in srgb,var(--c) 7%,transparent);border-left:7px solid var(--c)!important;border-radius:12px}details.g>summary{color:var(--c)!important;font-weight:700}details.g.yu{--c:#4f46e5;--acc:#4f46e5;border:2px solid #4f46e5;border-left-width:9px!important;background:color-mix(in srgb,#4f46e5 8%,transparent)}details.g.y1{--c:#ea8a00;--acc:#ea8a00;border:2px solid #ea8a00;border-left-width:9px!important;background:color-mix(in srgb,#ea8a00 9%,transparent)}details.g.a{--c:#0e9aa7;--acc:#0e9aa7}details.g.c{--c:#3f9b2b;--acc:#3f9b2b}details.g.b{--c:#8b5cf6;--acc:#8b5cf6}details.g.d{--c:#e0457b;--acc:#e0457b}details.g.a .card,details.g.b .card,details.g.c .card,details.g.d .card{border:2px solid var(--c)!important;background:color-mix(in srgb,var(--c) 10%,transparent)}button.card[onclick*="(\'F\')"]{--c:#e11d48;--acc:#e11d48}button.card[onclick*="(\'C\')"]{--c:#0891b2;--acc:#0891b2}button.card[onclick*="(\'R\')"]{--c:#7c3aed;--acc:#7c3aed}details.y1 button.card{border:2px solid var(--c)!important;background:color-mix(in srgb,var(--c) 11%,transparent)}';st.textContent+='details.g.bk{border-left-width:7px}details.g.bF{--c:#e11d48;--acc:#e11d48}details.g.bC{--c:#0891b2;--acc:#0891b2}details.g.bR{--c:#7c3aed;--acc:#7c3aed}details.g.bk>.card{margin:8px 0}details.g.bk .card{border:2px solid var(--c)!important;background:color-mix(in srgb,var(--c) 11%,transparent)}';document.head.appendChild(st);
var RS=0;
function snap(){if(RS||v!='quiz'||!D||!D.length)return;var all=ld(),k=String(cur),o=all[k]||{};var a={};for(var i=0;i<D.length;i++)if(ans[i]!==undefined)a[i]=ans[i];
 var f=[],cu=-1;document.querySelectorAll('.qn').forEach(function(e,i){if(e.classList.contains('fg'))f.push(i);if(e.classList.contains('cu'))cu=i});
 if(cu<0)cu=o.qi||0;
 if(!Object.keys(a).length&&cu==0&&!f.length&&!o.a)return;
 var nw={a:a,f:f,qi:cu,left:left,n:D.length,fin:false},same=o&&!o.del&&JSON.stringify(o.a)==JSON.stringify(a)&&JSON.stringify(o.f)==JSON.stringify(f)&&o.qi==cu;if(same)return;nw.ts=Date.now();all[k]=nw;sv(all,[k])}
var _st=start;
window.start=start=function(n){
 var fresh=(n===undefined||n===null),key=String(fresh?cur:n),all=ld(),p=all[key];if(p&&p.del)p=null;
 if(fresh){if(all[key]){all[key]={del:1,ts:Date.now()};sv(all,[key])}p=null}
 RS=1;try{_st(n);
 if(!fresh&&p&&!p.fin&&p.n==D.length&&Object.keys(p.a).length+p.qi>0){
  ans=[];Object.keys(p.a).forEach(function(i){ans[i]=p.a[i]});
  left=p.left;
  (p.f||[]).forEach(function(k){qgo(k);flg()});
  qgo(p.qi||0);
 }else if(!fresh&&p&&p.fin){all[key]={del:1,ts:Date.now()};sv(all,[key])}
 }finally{RS=0}snap();
};
var _fn=finish;
window.finish=finish=function(){snap();var all=ld(),k=String(cur);if(all[k]&&!all[k].del){all[k].fin=true;all[k].ts=Date.now();sv(all,[k]);sched(1)}_fn()};
setInterval(function(){if(v=='quiz')snap()},4000);
var _h=home;window.home=home=function(){return _h().replace(/<details class="g ([a-e])" open>/g,'<details class="g $1">')};
document.addEventListener('toggle',function(e){var d=e.target;if(d&&d.tagName=='DETAILS'&&d.parentNode&&d.closest('#app')){var s=d.querySelector('summary');if(s)OPENS[s.textContent]=d.open}},true);
function cnt(key){var p=ld()[key];return p&&!p.del&&p.a?Object.keys(p.a).length:0}
function deco(){

 document.querySelectorAll('details.g.y').forEach(function(y){var made={};y.querySelectorAll('button.card').forEach(function(b){
  if(b.closest('details.bk'))return;var m=(b.getAttribute('onclick')||'').match(/\('([A-Z])'\)/);if(!m)return;var c=m[1],g=made[c];
  if(!g){var t=(b.textContent.match(/^\s*([A-Za-z]+ block \d+)/)||[0,c])[1];g=made[c]=document.createElement('details');g.className='g bk b'+c;g.innerHTML='<summary>'+t+'</summary>';b.parentNode.insertBefore(g,b)}
  g.appendChild(b)})});
 document.querySelectorAll('details.g.y').forEach(function(d){var t=(d.querySelector('summary')||{}).textContent||'';d.classList.add(/UPP/.test(t)?'yu':'y1')});
 document.querySelectorAll('details.g').forEach(function(d){var s=d.querySelector('summary');if(s&&OPENS[s.textContent])d.open=true});
 document.querySelectorAll('button.card').forEach(function(b){
  var m=(b.getAttribute('onclick')||'').match(/^(start|openSec)\((.+)\)$/);if(!m)return;
  var key=m[2].replace(/['"]/g,''),tot,dn;
  if(m[1]=='start'){tot=BANK[key]&&BANK[key].length;dn=cnt(key)}
  else{tot=BANK[key]&&BANK[key].length;var sm=0;Object.keys(BANK).forEach(function(x){if(x.indexOf(key+'|')==0)sm+=cnt(x)});dn=Math.max(sm,cnt(key))}
  if(!tot)return;
  var ms=b.querySelector('.mute');
  if(ms&&dn>0){ms.innerHTML+=' · <span class="pt">'+dn+' / '+tot+' '+T('solved','تم حلها')+'</span>'}
  if(dn>0){b.insertAdjacentHTML('beforeend','<i class="ptr"></i><i class="pbar" style="width:'+Math.min(100,dn/tot*100)+'%"></i>')}
 })}
var _r=render;window.render=render=function(){_r();if(v=='home'||v=='sec')deco();else if(v=='quiz')snap()};
if(v=='home')render();
}catch(e){console.error('prog',e)}})();
