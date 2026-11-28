(function(){try{
var ST=null,KY='sb_publishable_uzJ-tolS1O9xkr8SKC_EjQ_G5Tonit3',U='https://ckltdtdrektkjupjywgd.supabase.co/rest/v1/rpc/save_prog';
var T=function(e,a){return typeof L!=='undefined'&&L=='ar'?a:e};
var isS=function(){return ST&&ST.role&&ST.role!=='owner'&&ST.username};
var st=document.createElement('style');
st.textContent='.fqdone{display:block;margin-top:8px;padding:6px 10px;border-radius:8px;background:#dcfce7;color:#166534;font-weight:700;font-size:14px;line-height:1.5}.fqban{margin:0 0 14px;padding:14px 16px;border-radius:12px;background:#dcfce7;color:#166534;font-weight:700;font-size:17px;border:2px solid #22c55e}';
document.head.appendChild(st);
function ld(){try{return JSON.parse(localStorage.getItem('fq_prog_v1_'+ST.username)||'{}')}catch(e){return{}}}
function cnt(all,k){var p=all[k];return p&&!p.del&&p.a?Object.keys(p.a).length:0}
function markFin(all,k){var p=all[k];if(!p||p.del||p.fin)return;p.fin=true;p.ts=Date.now();all[k]=p;try{localStorage.setItem('fq_prog_v1_'+ST.username,JSON.stringify(all));var t=localStorage.getItem('fq_token');fetch(U,{method:'POST',keepalive:true,headers:{apikey:KY,'Content-Type':'application/json'},body:JSON.stringify({t:t,k:k,d:p})}).catch(function(){})}catch(e){}}
function deco(){if(!isS())return;var all=ld();
document.querySelectorAll('button.card').forEach(function(b){if(b.querySelector('.fqdone'))return;
var m=(b.getAttribute('onclick')||'').match(/^(start|openSec)\((.+)\)$/);if(!m)return;var key=m[2].replace(/['"]/g,''),tot=BANK[key]&&BANK[key].length,dn;if(!tot)return;
if(m[1]=='start'){dn=cnt(all,key)}else{var sm=0;Object.keys(BANK).forEach(function(x){if(x.indexOf(key+'|')==0)sm+=cnt(all,x)});dn=Math.max(sm,cnt(all,key))}
if(dn<tot)return;if(m[1]=='start')markFin(all,key);
b.insertAdjacentHTML('beforeend','<span class="fqdone">✅ '+T('Chapter completed. Great work, keep going! Tap to retake it.','خلّصت الشابتر ده، شغل ممتاز كمل كده! اضغط لو عايز تعيد المحاولة.')+'</span>')})}
function ban(){if(!isS()||typeof D==='undefined'||!D||!D.length)return;var n=0;for(var i=0;i<D.length;i++)if(ans[i]!==undefined)n++;if(n<D.length)return;var w=document.querySelector('#app .nw');if(!w||w.querySelector('.fqban'))return;w.insertAdjacentHTML('afterbegin','<div class="fqban">🎉 '+T('Chapter completed! Great work. You can open the next chapter, or retake this one from the chapter list.','مبروك خلّصت الشابتر كله! شغل ممتاز. تقدر تفتح الشابتر اللي بعده، أو تعيد ده من قايمة الشباتر.')+'</div>')}
var _r=render;window.render=render=function(){_r();try{if(!ST){window.__fqRoleP().then(function(c){if(c&&!ST){ST=c;if(isS()&&(v=='home'||v=='sec'||v=='res'))render()}});return}if(v=='home'||v=='sec')deco();else if(v=='res')ban()}catch(e){console.error('done',e)}};
window.__fqRoleP().then(function(c){if(c&&!ST){ST=c;if(isS()&&(v=='home'||v=='sec'))render()}});
}catch(e){console.error('done',e)}})();
