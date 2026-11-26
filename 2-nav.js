(function(){try{
var qi=0,fl=[],endv=false,navo=false;
var ar=function(){return typeof L!=='undefined'&&L=='ar'};
var T=function(e,a){return ar()?a:e};
var st=document.createElement('style');
st.textContent='.qlay{display:grid;grid-template-columns:minmax(0,1fr) 250px;gap:22px;align-items:start}.nw:has(.qlay){max-width:980px}.qp{position:sticky;top:12px;max-height:calc(100vh - 28px);overflow:auto;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:12px}.qph{display:flex;justify-content:space-between;align-items:baseline;gap:8px;margin-bottom:10px;font-size:15px}.qg{display:grid;grid-template-columns:repeat(auto-fill,minmax(38px,1fr));gap:6px}.qn{border:1px solid var(--line);background:var(--bg);color:inherit;border-radius:8px;padding:7px 0;font:600 14px inherit;cursor:pointer}.qn.an{background:color-mix(in srgb,var(--acc) 18%,var(--card))}.qn.cu{outline:2px solid var(--acc);outline-offset:1px}.qn.fg{background:var(--bad);border-color:var(--bad);color:#fff}.qlg{margin-top:10px;font-size:13px;color:var(--mute);display:flex;flex-wrap:wrap;gap:4px 12px}.qlg i{display:inline-block;width:11px;height:11px;border-radius:3px;margin-inline-end:4px;vertical-align:-1px;border:1px solid var(--line)}.qtog{display:none;width:100%;margin:0 0 12px;background:var(--card);border:1px solid var(--line);border-radius:12px;padding:11px 14px;font:600 15px inherit;color:inherit;cursor:pointer;text-align:start}.flg{display:block;width:100%;margin-top:12px;background:var(--card);border:1.5px solid var(--line);border-radius:12px;padding:12px;font:600 16px inherit;color:inherit;cursor:pointer}.flg.on{background:var(--badbg);border-color:var(--bad);color:var(--bad)}.fli{display:flex;gap:10px;align-items:center;width:100%;margin-top:8px;background:var(--card);border:1px solid var(--line);border-radius:10px;padding:10px 12px;color:inherit;font:inherit;font-size:15px;cursor:pointer;text-align:start}.fli b{min-width:2.4em;color:var(--bad)}.fli.u b{color:var(--mute)}@media(max-width:760px){.qlay{display:flex;flex-direction:column;align-items:stretch}.qp{order:-1}.qtog{display:block}.qp{display:none;position:static;max-height:42vh;margin-bottom:14px}.qp.open{display:block}}';
document.head.appendChild(st);
function cnt(){var n=0;for(var k=0;k<D.length;k++)if(ans[k]!==undefined)n++;return n}
function nextUn(){for(var s=1;s<=D.length;s++){var k=(qi+s)%D.length;if(k!=qi&&ans[k]===undefined)return k}return -1}
function chips(){return D.map(function(q,k){return '<button class="qn'+(k==qi&&!endv?' cu':'')+(ans[k]!==undefined?' an':'')+(fl.indexOf(k)>-1?' fg':'')+'" onclick="qgo('+k+')">'+(k+1)+'</button>'}).join('')}
function panel(){return '<aside class="qp'+(navo?' open':'')+'"><div class="qph"><b>'+T('Questions','الأسئلة')+'</b><span class="mute">'+cnt()+' / '+D.length+'</span></div><div class="qg">'+chips()+'</div><div class="qlg"><span><i style="background:color-mix(in srgb,var(--acc) 18%,var(--card))"></i>'+T('Answered','تمت الإجابة')+'</span><span><i style="background:var(--bad);border-color:var(--bad)"></i>'+T('Flagged','معلّم')+'</span></div></aside>'}
function bar(){return '<div class="tb"><span class="tm">⏱ <b id="clk"'+(left<60?' class="low"':'')+'>'+clk()+'</b></span><button class="pz" onclick="pz()">'+(paused?t('resume'):t('pause'))+'</button></div>'}
function snip(k){return String(D[k].q).replace(/<[^>]*>/g,'').slice(0,90)}
function endHtml(){var f=fl.slice().sort(function(a,b){return a-b}),u=[];for(var k=0;k<D.length;k++)if(ans[k]===undefined&&fl.indexOf(k)<0)u.push(k);
var o=bar()+'<div class="qlay"><div class="qt" dir="ltr"><h2>'+T('Before you finish','قبل الإنهاء')+'</h2>';
o+='<p class="mute">'+(f.length?T('You flagged these questions. Tap one to go back to it.','هذه الأسئلة التي علّمتها. اضغط للرجوع إليها.'):T('No flagged questions.','لا توجد أسئلة معلّمة.'))+'</p>';
o+=f.map(function(k){return '<button class="fli" onclick="qgo('+k+')"><b>'+(k+1)+'</b><span>'+snip(k)+'</span></button>'}).join('');
if(u.length){o+='<h3>'+T('Not answered','بدون إجابة')+' ('+u.length+')</h3>'+u.slice(0,60).map(function(k){return '<button class="fli u" onclick="qgo('+k+')"><b>'+(k+1)+'</b><span>'+snip(k)+'</span></button>'}).join('')+(u.length>60?'<p class="mute">...</p>':'')}
o+='<button class="btn" onclick="finish()">'+T('Finish exam','إنهاء الاختبار')+'</button></div>'+panel()+'</div>';return o}
window.quiz=quiz=function(){
if(!D.length)return '';if(qi>=D.length||qi<0)qi=0;
if(endv)return endHtml();
var k=qi,q=D[k],dn=ans[k]!==undefined;done=dn;
var c=function(j){return dn?(oka(q,j)?'ok':(j==ans[k]?'bad':'')):''};
if(paused)return bar()+'<div class="pzb"><p>'+t('paused')+'</p><button class="btn" onclick="pz()">'+t('resume')+'</button></div>';
var a=cnt(),isf=fl.indexOf(k)>-1,last=nextUn()<0;
return bar()+'<button class="qtog" onclick="qtog()">☰ '+T('Questions','الأسئلة')+' · '+a+' / '+D.length+(fl.length?' · ⚑ '+fl.length:'')+'</button><div class="qlay"><div><div class="prog"><div style="width:'+(a/D.length*100)+'%"></div></div><p class="mute">'+t('q')+' '+(k+1)+' / '+D.length+' · '+a+' '+t('ansd')+'</p><div class="qt" dir="ltr"><h2>'+q.q+'</h2>'+(q.i?'<img src="'+q.i+'" style="max-width:100%;border-radius:8px">':'')+q.o.map(function(o,j){return '<button class="opt '+c(j)+'" onclick="pick('+j+')" '+(dn?'disabled':'')+'><b>'+'ABCDEF'[j]+'.</b><span>'+o+'</span></button>'}).join('')+'</div><button class="flg'+(isf?' on':'')+'" onclick="flg()">⚑ '+(isf?T('Flagged (tap to remove)','معلّم (اضغط للإزالة)'):T('Flag','علّم السؤال'))+'</button><button class="btn" onclick="nextq()">'+(last?t('fin'):t('next'))+'</button></div>'+panel()+'</div>'};
window.pick=pick=function(j){if(paused||ans[qi]!==undefined)return;ans[qi]=j;done=true;render()};
window.flg=function(){var i=fl.indexOf(qi);if(i>-1)fl.splice(i,1);else fl.push(qi);render()};
window.qtog=function(){navo=!navo;render()};
function sc(){var p=document.querySelector('.qp'),e=document.querySelector('.qn.cu');if(p&&e&&p.offsetParent)p.scrollTop=Math.max(0,e.offsetTop-p.clientHeight/2)}
window.qgo=function(k){qi=k;endv=false;navo=false;render();scrollTo(0,0);sc()};
window.nextq=function(){var n=nextUn();if(n<0){if(fl.length||cnt()<D.length){endv=true;render();scrollTo(0,0)}else finish();return}qi=n;render();scrollTo(0,0);sc()};
window.skip=function(){};
var _s=start;window.start=start=function(n){qi=0;fl=[];endv=false;navo=false;_s(n);render()};
if(v=='quiz'){qi=0;fl=[];render()}
}catch(e){console.error('nav',e)}})();
