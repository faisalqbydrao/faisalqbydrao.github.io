(function(){
var URL_='https://ckltdtdrektkjupjywgd.supabase.co',KEY='sb_publishable_uzJ-tolS1O9xkr8SKC_EjQ_G5Tonit3',TK='fq_token';
function rpc(n,a){return fetch(URL_+'/rest/v1/rpc/'+n,{method:'POST',headers:{'apikey':KEY,'Content-Type':'application/json'},body:JSON.stringify(a)}).then(function(r){return r.json()});}
var st=document.createElement('style');
st.textContent='#fqg{position:fixed;inset:0;z-index:2147483647;background:#0f172a;display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif;direction:ltr}#fqg form,#fqa .box{background:#fff;padding:28px;border-radius:14px;width:min(340px,90vw);box-shadow:0 10px 40px #0008}#fqg h2{margin:0 0 16px;font-size:20px;color:#0f172a}#fqg input{display:block;width:100%;box-sizing:border-box;margin:8px 0;padding:11px;border:1px solid #cbd5e1;border-radius:8px;font-size:16px}#fqg button,#fqa button{padding:10px 14px;border:0;border-radius:8px;background:#2563eb;color:#fff;font-size:15px;cursor:pointer}#fqg .e{color:#dc2626;font-size:14px;min-height:18px}#fqb{position:fixed;z-index:2147483000;bottom:12px;right:12px;display:flex;gap:6px}#fqb button{opacity:.85;padding:7px 11px;font-size:13px;border:0;border-radius:8px;background:#334155;color:#fff;cursor:pointer}#fqa{position:fixed;inset:0;z-index:2147483600;background:#000a;display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif;color:#0f172a}#fqa .box{width:min(560px,94vw);max-height:88vh;overflow:auto}#fqa table{width:100%;border-collapse:collapse;font-size:14px}#fqa td,#fqa th{padding:5px;border-bottom:1px solid #e2e8f0;text-align:left}#fqa input{padding:7px;border:1px solid #cbd5e1;border-radius:6px;margin:3px}';
document.documentElement.appendChild(st);
var hide=document.createElement('style');hide.id='fqh';hide.textContent='body{visibility:hidden}';document.documentElement.appendChild(hide);
var role='';
function unlock(){var h=document.getElementById('fqh');if(h)h.remove();var g=document.getElementById('fqg');if(g)g.remove();bar();}
function bar(){if(document.getElementById('fqb'))return;var d=document.createElement('div');d.id='fqb';
if(role==='owner'){var a=document.createElement('button');a.textContent='Admin';a.onclick=admin;d.appendChild(a);}
var o=document.createElement('button');o.textContent='Logout';o.onclick=function(){rpc('logout',{t:localStorage.getItem(TK)}).finally(function(){localStorage.removeItem(TK);location.reload();});};d.appendChild(o);
(document.body||document.documentElement).appendChild(d);}
function show(){var g=document.createElement('div');g.id='fqg';g.innerHTML='<form><h2>Login</h2><input id="fqu" placeholder="Username" autocomplete="username" autocapitalize="none"><input id="fqp" type="password" placeholder="Password" autocomplete="current-password"><div class="e" id="fqe"></div><button type="submit" style="width:100%">Enter</button></form>';
document.documentElement.appendChild(g);
g.querySelector('form').onsubmit=function(ev){ev.preventDefault();var e=document.getElementById('fqe');e.textContent='...';
rpc('login',{u:document.getElementById('fqu').value,p:document.getElementById('fqp').value}).then(function(r){if(r&&r.ok){localStorage.setItem(TK,r.token);role=r.role;unlock();}else e.textContent='Wrong username or password';}).catch(function(){e.textContent='Connection error, try again';});};}
function admin(){var t=localStorage.getItem(TK);var a=document.createElement('div');a.id='fqa';a.innerHTML='<div class="box"><div style="display:flex;justify-content:space-between"><b>Accounts</b><button id="fqx">Close</button></div><div style="margin:10px 0"><input id="fqnu" placeholder="new username"><input id="fqnp" placeholder="password"><button id="fqad">Add / reset</button></div><div id="fqm" style="min-height:18px;font-size:13px"></div><div id="fql"></div></div>';document.body.appendChild(a);
document.getElementById('fqx').onclick=function(){a.remove()};
function load(){rpc('admin_list',{t:t}).then(function(r){if(!r.ok)return;var h='<table><tr><th>User</th><th>Last login</th><th></th></tr>';r.rows.forEach(function(x){h+='<tr><td>'+x.username+(x.is_owner?' (owner)':'')+(x.active?'':' [disabled]')+'</td><td>'+(x.last_login?x.last_login.slice(0,16).replace('T',' '):'')+'</td><td>'+(x.is_owner?'':'<button data-a="d" data-u="'+x.username+'" style="background:#dc2626">Delete account</button>')+'</td></tr>';});document.getElementById('fql').innerHTML=h+'</table>';});}
document.getElementById('fql').onclick=function(ev){var b=ev.target;if(b.tagName!=='BUTTON')return;var u=b.dataset.u;if(b.dataset.a==='d'){if(!confirm('Delete '+u+'?'))return;rpc('admin_delete',{t:t,u:u}).then(load);}else rpc('admin_set_active',{t:t,u:u,a:b.dataset.v==='true'}).then(load);};
document.getElementById('fqad').onclick=function(){rpc('admin_add',{t:t,u:document.getElementById('fqnu').value,p:document.getElementById('fqnp').value}).then(function(r){document.getElementById('fqm').textContent=r.ok?'Saved':'Failed (password min 6 chars)';document.getElementById('fqnp').value='';load();});};
load();}
function start(){var t=localStorage.getItem(TK);if(!t){show();return;}
rpc('check',{t:t}).then(function(r){if(r&&r.ok){role=r.role;unlock();}else{localStorage.removeItem(TK);show();}}).catch(function(){show();});}
if(document.body)start();else document.addEventListener('DOMContentLoaded',start);
})();
