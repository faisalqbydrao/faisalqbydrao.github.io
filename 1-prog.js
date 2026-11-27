(function(){try{
var K='fq_prog_v1',OPENS={};
var ld=function(){try{return JSON.parse(localStorage.getItem(K)||'{}')}catch(e){return{}}};
var sv=function(o){try{localStorage.setItem(K,JSON.stringify(o))}catch(e){}};
var T=function(e,a){return typeof L!=='undefined'&&L=='ar'?a:e};
var st=document.createElement('style');
st.textContent='.card{position:relative;overflow:hidden}.pbar{position:absolute;left:0;bottom:0;height:5px;background:var(--acc);border-radius:0 3px 3px 0;opacity:.85;transition:width .3s}.ptr{position:absolute;left:0;right:0;bottom:0;height:5px;background:color-mix(in srgb,var(--acc) 14%,transparent)}.pt{color:var(--acc);font-weight:600}';
document.head.appendChild(st);
var RS=0;
function snap(){if(RS||v!='quiz'||!D||!D.length)return;var all=ld(),k=String(cur),o=all[k]||{};var a={};for(var i=0;i<D.length;i++)if(ans[i]!==undefined)a[i]=ans[i];
 var f=[],cu=-1;document.querySelectorAll('.qn').forEach(function(e,i){if(e.classList.contains('fg'))f.push(i);if(e.classList.contains('cu'))cu=i});
 if(cu<0)cu=o.qi||0;
 if(!Object.keys(a).length&&cu==0&&!f.length&&!o.a)return;
 all[k]={a:a,f:f,qi:cu,left:left,n:D.length,fin:false};sv(all)}
var _st=start;
window.start=start=function(n){
 var fresh=(n===undefined||n===null),key=String(fresh?cur:n),all=ld(),p=all[key];
 if(fresh){delete all[key];sv(all)}
 RS=1;try{_st(n);
 if(!fresh&&p&&!p.fin&&p.n==D.length&&Object.keys(p.a).length+p.qi>0){
  ans=[];Object.keys(p.a).forEach(function(i){ans[i]=p.a[i]});
  left=p.left;
  (p.f||[]).forEach(function(k){qgo(k);flg()});
  qgo(p.qi||0);
 }else if(!fresh&&p&&p.fin){delete all[key];sv(all)}
 }finally{RS=0}snap();
};
var _fn=finish;
window.finish=finish=function(){snap();var all=ld(),k=String(cur);if(all[k]){all[k].fin=true;sv(all)}_fn()};
setInterval(function(){if(v=='quiz')snap()},4000);
var _h=home;window.home=home=function(){return _h().replace(/<details class="g ([a-e])" open>/g,'<details class="g $1">')};
document.addEventListener('toggle',function(e){var d=e.target;if(d&&d.tagName=='DETAILS'&&d.parentNode&&d.closest('#app')){var s=d.querySelector('summary');if(s)OPENS[s.textContent]=d.open}},true);
function cnt(key){var p=ld()[key];return p?Object.keys(p.a).length:0}
function deco(){
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
