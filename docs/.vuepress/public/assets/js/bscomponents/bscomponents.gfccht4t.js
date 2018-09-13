/*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='bscomponents']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(t,n,e,o){"use strict";function i(t,n){return"sc-"+t.t+(n&&n!==N?"-"+n:"")}function c(t,n){return t+(n?"-h":"-s")}function f(t){return{n:t[0],e:t[1],o:!!t[2],i:!!t[3],c:!!t[4]}}function r(t,n){if(T(n)&&"object"!=typeof n&&"function"!=typeof n){if(t===Boolean||3===t)return"false"!==n&&(""===n||!!n);if(t===Number||4===t)return parseFloat(n);if(t===String||2===t)return n.toString()}return n}function s(t,n,e,o){const i=t.f.get(n);i&&((o=i["s-ld"]||i.$activeLoading)&&((e=o.indexOf(n))>-1&&o.splice(e,1),o.length||(i["s-init"]&&i["s-init"](),i.$initLoad&&i.$initLoad())),t.f.delete(n))}function l(t,n){let e,o,i=null,c=!1,f=!1;for(var r=arguments.length;r-- >2;)q.push(arguments[r]);for(;q.length>0;){let n=q.pop();if(n&&void 0!==n.pop)for(r=n.length;r--;)q.push(n[r]);else"boolean"==typeof n&&(n=null),(f="function"!=typeof t)&&(null==n?n="":"number"==typeof n?n=String(n):"string"!=typeof n&&(f=!1)),f&&c?i[i.length-1].vtext+=n:null===i?i=[f?{vtext:n}:n]:i.push(f?{vtext:n}:n),c=f}if(null!=n){if(n.className&&(n.class=n.className),"object"==typeof n.class){for(r in n.class)n.class[r]&&q.push(r);n.class=q.join(" "),q.length=0}null!=n.key&&(e=n.key),null!=n.name&&(o=n.name)}return"function"==typeof t?t(n,i||[],B):{vtag:t,vchildren:i,vtext:void 0,vattrs:n,vkey:e,vname:o,r:void 0,s:!1}}function u(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}function a(t,n){t.l.has(n)||(t.l.set(n,!0),t.u?t.queue.write(()=>p(t,n)):t.queue.tick(()=>p(t,n)))}function p(t,n,e,o,i,c){if(t.l.delete(n),!t.a.has(n)){if(o=t.p.get(n),e=!o){if((i=t.f.get(n))&&i.$rendered&&(i["s-rn"]=!0),i&&!i["s-rn"])return(i["s-rc"]=i["s-rc"]||[]).push(()=>{p(t,n)}),void(i.$onRender=i["s-rc"]);o=function f(t,n,e,o,i,c,r){try{o=new(i=t.v(n).d),function s(t,n,e,o,i,c,f){for(f in t.m.set(o,e),t.y.has(e)||t.y.set(e,{}),(c=Object.assign({color:{type:String}},n.properties)).mode={type:String},c)v(t,c[f],e,o,f,i)}(t,i,n,o,e);try{if(c=t.b.get(n)){for(r=0;r<c.length;r+=2)o[c[r]](c[r+1]);t.b.delete(n)}}catch(e){t.g(e,2,n)}}catch(e){o={},t.g(e,7,n,!0)}return t.p.set(n,o),o}(t,n,t.w.get(n));try{o.componentWillLoad&&(c=o.componentWillLoad())}catch(e){t.g(e,3,n)}}else try{o.componentWillUpdate&&(c=o.componentWillUpdate())}catch(e){t.g(e,5,n)}c&&c.then?c.then(()=>d(t,n,o,e)):d(t,n,o,e)}}function d(t,n,e,o){(function i(t,n,e,o){try{const i=n.d.host,f=n.d.encapsulation,r="shadow"===f&&t.k.M;let s,u;if(s=function i(t,n,e){return t&&Object.keys(t).forEach(o=>{t[o].reflectToAttr&&((e=e||{})[o]=n[o])}),e}(n.d.properties,o),r||(u=e),!e["s-rn"]){t.C(t,t.k,n,e);const i=e["s-sc"];i&&(t.k.j(e,c(i,!0)),o.render||t.k.j(e,c(i)))}if(o.render||o.hostData||i||s){t.x=!0;const n=o.render&&o.render();let i;s&&(i=i?Object.assign(i,s):s),t.x=!1;const c=t.W.get(e)||{};c.r=u;const a=l(null,i,n);a.s=!0,t.W.set(e,t.render(e,c,a,r,f))}e["s-rn"]=!0,e.$onRender&&(e["s-rc"]=e.$onRender),e["s-rc"]&&(e["s-rc"].forEach(t=>t()),e["s-rc"]=null)}catch(n){t.x=!1,t.g(n,8,e,!0)}})(t,t.v(n),n,e);try{o?n["s-init"]():C(t.W.get(n))}catch(e){t.g(e,6,n,!0)}}function v(t,n,e,o,i,c,f,s){if(n.type||n.state){const l=t.y.get(e);n.state||(!n.attr||void 0!==l[i]&&""!==l[i]||(f=c&&c.O)&&T(s=f[n.attr])&&(l[i]=r(n.type,s)),e.hasOwnProperty(i)&&(void 0===l[i]&&(l[i]=r(n.type,e[i])),"mode"!==i&&delete e[i])),o.hasOwnProperty(i)&&void 0===l[i]&&(l[i]=o[i]),n.watchCallbacks&&(l[D+i]=n.watchCallbacks.slice()),y(o,i,function l(n){return(n=t.y.get(t.m.get(this)))&&n[i]},function u(e,o){(o=t.m.get(this))&&(n.state||n.mutable)&&h(t,o,i,e)})}else n.elementRef?m(o,i,e):n.method&&m(e,i,o[i].bind(o))}function h(t,n,e,o,i,c,f){(i=t.y.get(n))||t.y.set(n,i={});const r=i[e];if(o!==r&&(i[e]=o,c=t.p.get(n))){if(f=i[D+e])for(let t=0;t<f.length;t++)try{c[f[t]].call(c,o,r,e)}catch(t){}!t.x&&n["s-rn"]&&a(t,n)}}function m(t,n,e){Object.defineProperty(t,n,{configurable:!0,value:e})}function y(t,n,e,o){Object.defineProperty(t,n,{configurable:!0,get:e,set:o})}function b(t,n,e,o="boolean"==typeof e){const i=n!==(n=n.replace(/^xlink\:?/,""));null==e||o&&(!e||"false"===e)?i?t.removeAttributeNS(P,R(n)):t.removeAttribute(n):"function"!=typeof e&&(e=o?"":e.toString(),i?t.setAttributeNS(P,R(n),e):t.setAttribute(n,e))}function g(t,n,e,o,i,c,f){if("class"!==e||c)if("style"===e){for(const t in o)i&&null!=i[t]||(/-/.test(t)?n.style.N(t):n.style[t]="");for(const t in i)o&&i[t]===o[t]||(/-/.test(t)?n.style.setProperty(t,i[t]):n.style[t]=i[t])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in n)if("list"!==e&&"type"!==e&&!c&&(e in n||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=t.v(n);o&&o.S&&o.S[e]?(M(n,e,i),f&&o.S[e].A&&b(n,o.S[e].T,i,3===o.S[e].R)):"ref"!==e&&(M(n,e,null==i?"":i),null!=i&&!1!==i||t.k.L(n,e))}else null!=i&&"key"!==e?b(n,e,i):(c||t.k.q(n,e)&&(null==i||!1===i))&&t.k.L(n,e);else e=R(e)in n?R(e.substring(2)):R(e[2])+e.substring(3),i?i!==o&&t.k.B(n,e,i):t.k.D(n,e);else if(o!==i){const t=w(o),e=w(i),c=t.filter(t=>!e.includes(t)),f=w(n.className).filter(t=>!c.includes(t)),r=e.filter(n=>!t.includes(n)&&!f.includes(n));f.push(...r),n.className=f.join(" ")}}function w(t){return null==t||""===t?[]:t.trim().split(/\s+/)}function M(t,n,e){try{t[n]=e}catch(t){}}function $(t,n,e,o,i){const c=11===e.r.nodeType&&e.r.host?e.r.host:e.r,f=n&&n.vattrs||S,r=e.vattrs||S;for(i in f)r&&null!=r[i]||null==f[i]||g(t,c,i,f[i],void 0,o,e.s);for(i in r)i in f&&r[i]===("value"===i||"checked"===i?c[i]:f[i])||g(t,c,i,f[i],r[i],o,e.s)}function k(t,n){function e(i,c,f,r,s,l,p,m,y){if(m=c.vchildren[f],u||(d=!0,"slot"===m.vtag&&(a&&n.j(r,a+"-s"),m.vchildren?m.P=!0:m.F=!0)),T(m.vtext))m.r=n.H(m.vtext);else if(m.F)m.r=n.H("");else{if(l=m.r=F||"svg"===m.vtag?n.I("http://www.w3.org/2000/svg",m.vtag):n.U(m.P?"slot-fb":m.vtag),F="svg"===m.vtag||"foreignObject"!==m.vtag&&F,$(t,null,m,F),T(a)&&l["s-si"]!==a&&n.j(l,l["s-si"]=a),m.vchildren)for(s=0;s<m.vchildren.length;++s)(p=e(i,m,s,l))&&n.Q(l,p);"svg"===m.vtag&&(F=!1)}return m.r["s-hn"]=v,(m.P||m.F)&&(m.r["s-sr"]=!0,m.r["s-cr"]=h,m.r["s-sn"]=m.vname||"",(y=i&&i.vchildren&&i.vchildren[f])&&y.vtag===m.vtag&&i.r&&o(i.r)),m.r}function o(e,i,c,f){t.Z=!0;const l=n.z(e);for(c=l.length-1;c>=0;c--)(f=l[c])["s-hn"]!==v&&f["s-ol"]&&(n.G(f),n.J(s(f),f,r(f)),n.G(f["s-ol"]),f["s-ol"]=null,d=!0),i&&o(f,i);t.Z=!1}function i(t,o,i,c,f,s,l,u){const a=t["s-cr"]||t.$defaultHolder;for((l=a&&n.K(a)||t).shadowRoot&&n.V(l)===v&&(l=l.shadowRoot);f<=s;++f)c[f]&&(u=T(c[f].vtext)?n.H(c[f].vtext):e(null,i,f,t))&&(c[f].r=u,n.J(l,u,r(o)))}function c(t,e,i,c){for(;e<=i;++e)T(t[e])&&(c=t[e].r,p=!0,c["s-ol"]?n.G(c["s-ol"]):o(c,!0),n.G(c))}function f(t,n){return t.vtag===n.vtag&&t.vkey===n.vkey&&("slot"!==t.vtag||t.vname===n.vname)}function r(t){return t&&t["s-ol"]?t["s-ol"]:t}function s(t){return n.K(t["s-ol"]?t["s-ol"]:t)}const l=[];let u,a,p,d,v,h;return function m(y,b,g,w,M,k,C,j,x,W,O,E){if(v=n.V(y),h=y["s-cr"],u=w,a=y["s-sc"],d=p=!1,function l(u,a,p){const d=a.r=u.r,v=u.vchildren,h=a.vchildren;F=a.r&&T(n.X(a.r))&&void 0!==a.r.ownerSVGElement,F="svg"===a.vtag||"foreignObject"!==a.vtag&&F,T(a.vtext)?(p=d["s-cr"]||d.$defaultHolder)?n.Y(n.K(p),a.vtext):u.vtext!==a.vtext&&n.Y(d,a.vtext):("slot"!==a.vtag&&$(t,u,a,F),T(v)&&T(h)?function m(t,u,a,p,d,v,h,y){let b=0,g=0,w=u.length-1,M=u[0],$=u[w],k=p.length-1,C=p[0],j=p[k];for(;b<=w&&g<=k;)if(null==M)M=u[++b];else if(null==$)$=u[--w];else if(null==C)C=p[++g];else if(null==j)j=p[--k];else if(f(M,C))l(M,C),M=u[++b],C=p[++g];else if(f($,j))l($,j),$=u[--w],j=p[--k];else if(f(M,j))"slot"!==M.vtag&&"slot"!==j.vtag||o(n.K(M.r)),l(M,j),n.J(t,M.r,n._($.r)),M=u[++b],j=p[--k];else if(f($,C))"slot"!==M.vtag&&"slot"!==j.vtag||o(n.K($.r)),l($,C),n.J(t,$.r,M.r),$=u[--w],C=p[++g];else{for(d=null,v=b;v<=w;++v)if(u[v]&&T(u[v].vkey)&&u[v].vkey===C.vkey){d=v;break}T(d)?((y=u[d]).vtag!==C.vtag?h=e(u&&u[g],a,d,t):(l(y,C),u[d]=void 0,h=y.r),C=p[++g]):(h=e(u&&u[g],a,g,t),C=p[++g]),h&&n.J(s(M.r),h,r(M.r))}b>w?i(t,null==p[k+1]?null:p[k+1].r,a,p,g,k):g>k&&c(u,b,w)}(d,v,a,h):T(h)?(T(u.vtext)&&n.Y(d,""),i(d,null,a,h,0,h.length-1)):T(v)&&c(v,0,v.length-1)),F&&"svg"===a.vtag&&(F=!1)}(b,g),d){for(function t(e,o,i,c,f,r,s,u,a,d){for(f=0,r=(o=n.z(e)).length;f<r;f++){if((i=o[f])["s-sr"]&&(c=i["s-cr"]))for(u=n.z(n.K(c)),a=i["s-sn"],s=u.length-1;s>=0;s--)(c=u[s])["s-cn"]||c["s-nr"]||c["s-hn"]===i["s-hn"]||((3===(d=n.tt(c))||8===d)&&""===a||1===d&&null===n.nt(c,"slot")&&""===a||1===d&&n.nt(c,"slot")===a)&&(l.some(t=>t.et===c)||(p=!0,c["s-sn"]=a,l.push({ot:i,et:c})));1===n.tt(i)&&t(i)}}(g.r),C=0;C<l.length;C++)(j=l[C]).et["s-ol"]||((x=n.H(""))["s-nr"]=j.et,n.J(n.K(j.et),j.et["s-ol"]=x,j.et));for(t.Z=!0,C=0;C<l.length;C++){for(j=l[C],O=n.K(j.ot),E=n._(j.ot),x=j.et["s-ol"];x=n.it(x);)if((W=x["s-nr"])&&W&&W["s-sn"]===j.et["s-sn"]&&O===n.K(W)&&(W=n._(W))&&W&&!W["s-nr"]){E=W;break}(!E&&O!==n.K(j.et)||n._(j.et)!==E)&&j.et!==E&&(n.G(j.et),n.J(O,j.et,E))}t.Z=!1}return p&&function t(e,o,i,c,f,r,s,l){for(c=0,f=(i=n.z(e)).length;c<f;c++)if(o=i[c],1===n.tt(o)){if(o["s-sr"])for(s=o["s-sn"],o.hidden=!1,r=0;r<f;r++)if(i[r]["s-hn"]!==o["s-hn"])if(l=n.tt(i[r]),""!==s){if(1===l&&s===n.nt(i[r],"slot")){o.hidden=!0;break}}else if(1===l||3===l&&""!==n.ct(i[r]).trim()){o.hidden=!0;break}t(o)}}(g.r),l.length=0,g}}function C(t,n){t&&(t.vattrs&&t.vattrs.ref&&t.vattrs.ref(n?null:t.r),t.vchildren&&t.vchildren.forEach(t=>{C(t,n)}))}function j(t,n,e,o,i){const c=t.tt(n);let f,r,s,l;if(i&&1===c){(r=t.nt(n,E))&&(s=r.split("."))[0]===o&&((l={}).vtag=t.V(l.r=n),e.vchildren||(e.vchildren=[]),e.vchildren[s[1]]=l,e=l,i=""!==s[2]);for(let c=0;c<n.childNodes.length;c++)j(t,n.childNodes[c],e,o,i)}else 3===c&&(f=n.previousSibling)&&8===t.tt(f)&&"s"===(s=t.ct(f).split("."))[0]&&s[1]===o&&((l={vtext:t.ct(n)}).r=n,e.vchildren||(e.vchildren=[]),e.vchildren[s[2]]=l)}function x(t,n,e,o){e.connectedCallback=function(){(function e(t,n,o){t.ft.has(o)||(t.ft.set(o,!0),function i(t,n){const e=t.v(n);e.rt&&e.rt.forEach(e=>{e.o||t.k.B(n,e.n,function o(t,n,e,i){return o=>{(i=t.p.get(n))?i[e](o):((i=t.b.get(n)||[]).push(e,o),t.b.set(n,i))}}(t,n,e.e),e.c,e.i)})}(t,o)),t.a.delete(o),t.st.has(o)||(t.st.set(o,!0),o["s-id"]||(o["s-id"]=t.lt()),function c(t,n,e){for(e=n;e=t.k.X(e);)if(t.ut(e)){t.at.has(n)||(t.f.set(n,e),e.$activeLoading&&(e["s-ld"]=e.$activeLoading),(e["s-ld"]=e["s-ld"]||[]).push(n));break}}(t,o),t.queue.tick(()=>{t.w.set(o,function e(t,n,o,i,c){return o.mode||(o.mode=t.pt(o)),o["s-cr"]||t.nt(o,O)||t.M&&1===n.dt||(o["s-cr"]=t.H(""),o["s-cr"]["s-cn"]=!0,t.J(o,o["s-cr"],t.z(o)[0])),t.M||1!==n.dt||(o.shadowRoot=o),i={vt:o["s-id"],O:{}},n.S&&Object.keys(n.S).forEach(e=>{(c=n.S[e].T)&&(i.O[c]=t.nt(o,c))}),i}(t.k,n,o)),t.ht(n,o)}))})(t,n,this)},e.attributeChangedCallback=function(t,e,o){(function i(t,n,e,o,c,f,s){if(t&&o!==c)for(f in t)if((s=t[f]).T&&R(s.T)===R(e)){n[f]=r(s.R,c);break}})(n.S,this,t,e,o)},e.disconnectedCallback=function(){(function n(t,e){if(!t.Z&&function o(t,n){for(;n;){if(!t.K(n))return 9!==t.tt(n);n=t.K(n)}}(t.k,e)){t.a.set(e,!0),s(t,e),C(t.W.get(e),!0),t.k.D(e),t.ft.delete(e);{const n=t.p.get(e);n&&n.componentDidUnload&&n.componentDidUnload()}[t.f,t.mt,t.w].forEach(t=>t.delete(e))}})(t,this)},e["s-init"]=function(){(function n(t,e,o,i,c){if(!t.at.has(e)&&t.p.get(e)&&!t.a.has(e)&&(!e["s-ld"]||!e["s-ld"].length)){delete e["s-ld"],t.at.set(e,!0);try{C(t.W.get(e)),(c=t.mt.get(e))&&(c.forEach(t=>t(e)),t.mt.delete(e))}catch(n){t.g(n,4,e)}t.k.j(e,o),s(t,e)}})(t,this,o)},e.forceUpdate=function(){a(t,this)},function i(t,n,e){n&&Object.keys(n).forEach(o=>{const i=n[o],c=i.yt;1===c||2===c?y(e,o,function n(){return(t.y.get(this)||{})[o]},function n(e){h(t,this,o,r(i.R,e))}):6===c&&m(e,o,L)})}(t,n.S,e)}function W(t,n,e,o){return function(){const i=arguments;return function c(t,n,e){let o=n[e];const i=t.bt.body;return i?(o||(o=i.querySelector(e)),o||(o=n[e]=t.U(e),t.Q(i,o)),o.componentOnReady()):Promise.resolve()}(t,n,e).then(t=>t[o].apply(t,i))}}const O="ssrv",E="ssrc",N="$",S={},A={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},T=t=>null!=t,R=t=>t.toLowerCase(),L=()=>{},q=[],B={forEach:(t,n)=>{t.forEach((t,e,o)=>n(u(t),e,o))},map:(t,n)=>t.map((t,e,o)=>(function i(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}})(n(u(t),e,o)))},D="wc-",P="http://www.w3.org/1999/xlink";let F=!1;(function H(t,n,e,o,c,r){function s(t,n){if(!e.customElements.get(t.t)){x(b,u[t.t]=t,n.prototype,r);{const e=n.observedAttributes=[];for(const n in t.S)t.S[n].T&&e.push(t.S[n].T)}e.customElements.define(t.t,n)}}const u={html:{}},p={},d=e[t]=e[t]||{},v=function h(t,n,e){t.ael||(t.ael=((t,n,e,o)=>t.addEventListener(n,e,o)),t.rel=((t,n,e,o)=>t.removeEventListener(n,e,o)));const o=new WeakMap,i={bt:e,gt:!1,tt:t=>t.nodeType,U:t=>e.createElement(t),I:(t,n)=>e.createElementNS(t,n),H:t=>e.createTextNode(t),wt:t=>e.createComment(t),J:(t,n,e)=>t.insertBefore(n,e),G:t=>t.remove(),Q:(t,n)=>t.appendChild(n),j:(t,n)=>t.classList.add(n),z:t=>t.childNodes,K:t=>t.parentNode,_:t=>t.nextSibling,it:t=>t.previousSibling,V:t=>R(t.nodeName),ct:t=>t.textContent,Y:(t,n)=>t.textContent=n,nt:(t,n)=>t.getAttribute(n),Mt:(t,n,e)=>t.setAttribute(n,e),$t:(t,n,e,o)=>t.setAttributeNS(n,e,o),L:(t,n)=>t.removeAttribute(n),q:(t,n)=>t.hasAttribute(n),pt:n=>n.getAttribute("mode")||(t.Context||{}).mode,kt:(t,o)=>"child"===o?t.firstElementChild:"parent"===o?i.X(t):"body"===o?e.body:"document"===o?e:"window"===o?n:t,B:(n,e,c,f,r,s,l,u)=>{const a=e;let p=n,d=o.get(n);if(d&&d[a]&&d[a](),"string"==typeof s?p=i.kt(n,s):"object"==typeof s?p=s:(u=e.split(":")).length>1&&(p=i.kt(n,u[0]),e=u[1]),!p)return;let v=c;(u=e.split(".")).length>1&&(e=u[0],v=(t=>{t.keyCode===A[u[1]]&&c(t)})),l=i.gt?{capture:!!f,passive:!!r}:!!f,t.ael(p,e,v,l),d||o.set(n,d={}),d[a]=(()=>{p&&t.rel(p,e,v,l),d[a]=null})},D:(t,n)=>{const e=o.get(t);e&&(n?e[n]&&e[n]():Object.keys(e).forEach(t=>{e[t]&&e[t]()}))},Ct:(t,e,o)=>t&&t.dispatchEvent(new n.CustomEvent(e,o))};try{n.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.gt=!0}))}catch(t){}return i.X=((t,n)=>(n=i.K(t))&&11===i.tt(n)?n.host:n),i}(d,e,o);n.isServer=n.isPrerender=!(n.isClient=!0),n.window=e,n.location=e.location,n.document=o,n.resourcesUrl=n.publicPath=c,n.enableListener=((t,n,e,o,i)=>(function c(t,n,e,o,i,f){if(n){const c=t.m.get(n),r=t.v(c);if(r&&r.rt)if(o){const o=r.rt.find(t=>t.n===e);o&&t.k.B(c,e,t=>n[o.e](t),o.c,void 0===f?o.i:!!f,i)}else t.k.D(c,e)}})(b,t,n,e,o,i)),d.h=l,d.Context=n;const m=e["s-defined"]=e.$definedCmps=e["s-defined"]||e.$definedCmps||{};let y=0;const b={k:v,jt:s,xt:n.emit,v:t=>u[v.V(t)],Wt:t=>n[t],isClient:!0,ut:t=>!(!m[v.V(t)]&&!b.v(t)),lt:()=>t+y++,g:(t,n,e)=>void 0,Ot:t=>(function n(t,e,o){return{create:W(t,e,o,"create"),componentOnReady:W(t,e,o,"componentOnReady")}})(v,p,t),queue:n.queue=function g(t,n){function e(t){for(let n=0;n<t.length;n++)try{t[n](c())}catch(t){}t.length=0}function o(t,n){let e,o=0;for(;o<t.length&&(e=c())<n;)try{t[o++](e)}catch(t){}o===t.length?t.length=0:0!==o&&t.splice(0,o)}function i(){a++,e(s);const n=c()+7*Math.ceil(a*(1/22));o(l,n),o(u,n),l.length>0&&(u.push(...l),l.length=0),(p=s.length+l.length+u.length>0)?t.raf(i):a=0}const c=()=>n.performance.now(),f=Promise.resolve(),r=[],s=[],l=[],u=[];let a=0,p=!1;return t.raf||(t.raf=n.requestAnimationFrame.bind(n)),{tick(t){r.push(t),1===r.length&&f.then(()=>e(r))},read(n){s.push(n),p||(p=!0,t.raf(i))},write(n){l.push(n),p||(p=!0,t.raf(i))}}}(d,e),ht:function w(t,n,e){if(t.d)a(b,n);else{const e="string"==typeof t.Et?t.Et:t.Et[n.mode],o=2===t.dt||1===t.dt&&!v.M;import(c+e+(o?".sc":"")+".js").then(e=>{try{t.d=e[(t=>R(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""))(t.t)],function o(t,n,e,i,c){if(i){const e=n.t+(c||N);if(!n[e]){const o=t.U("template");n[e]=o,o.innerHTML=`<style>${i}</style>`,t.Q(t.bt.head,o)}}}(v,t,t.dt,t.d.style,t.d.styleMode)}catch(n){t.d=class{}}a(b,n)}).catch(t=>void 0)}},f:new WeakMap,Nt:new WeakMap,st:new WeakMap,ft:new WeakMap,at:new WeakMap,m:new WeakMap,w:new WeakMap,p:new WeakMap,a:new WeakMap,l:new WeakMap,mt:new WeakMap,b:new WeakMap,W:new WeakMap,y:new WeakMap};b.render=k(b,v);const M=v.bt.documentElement;M["s-ld"]=[],M["s-rn"]=!0,M["s-init"]=(()=>{b.at.set(M,d.loaded=b.u=!0),v.Ct(e,"appload",{detail:{namespace:t}})}),function $(t,n,e){const o=e.querySelectorAll(`[${O}]`),i=o.length;let c,f,r,s,l,u;if(i>0)for(t.at.set(e,!0),s=0;s<i;s++)for(c=o[s],f=n.nt(c,O),(r={}).vtag=n.V(r.r=c),t.W.set(c,r),l=0,u=c.childNodes.length;l<u;l++)j(n,c.childNodes[l],r,f,!0)}(b,v,M),b.C=((t,n,e,o)=>{(function c(t,n,e,o){const c=2===e.dt||1===e.dt&&!t.k.M;let f=e.t+o.mode,r=e[f];if(c&&(o["s-sc"]=i(e,o.mode)),r||(r=e[f=e.t+N],c&&(o["s-sc"]=i(e))),r){let i=n.bt.head;if(n.M)if(1===e.dt)i=o.shadowRoot;else{let t=o;for(;t=n.K(t);)if(t.host&&t.host.shadowRoot){i=t.host.shadowRoot;break}}let c=t.Nt.get(i);if(c||t.Nt.set(i,c={}),!c[f]){let t;{t=r.content.cloneNode(!0),c[f]=!0;const e=i.querySelectorAll("[data-styles]");n.J(i,t,e.length&&e[e.length-1].nextSibling||i.firstChild)}}}})(t,n,e,o)}),(d.components||[]).map(t=>{const n=function e(t,n,o){const i={t:t[0],S:{color:{T:"color"}}};i.Et=t[1];const c=t[3];if(c)for(n=0;n<c.length;n++)o=c[n],i.S[o[0]]={yt:o[1],A:!!o[2],T:"string"==typeof o[3]?o[3]:o[3]?o[0]:0,R:o[4]};return i.dt=t[4],t[5]&&(i.rt=t[5].map(f)),i}(t);return u[n.t]=n}).forEach(t=>s(t,class extends HTMLElement{})),function C(t,n,e,o,i,c){if(n.componentOnReady=((n,e)=>{if(!n.nodeName.includes("-"))return e(null),!1;const o=t.v(n);if(o)if(t.at.has(n))e(n);else{const o=t.mt.get(n)||[];o.push(e),t.mt.set(n,o)}return!!o}),i){for(c=i.length-1;c>=0;c--)n.componentOnReady(i[c][0],i[c][1])&&i.splice(c,1);for(c=0;c<o.length;c++)if(!e[o[c]].componentOnReady)return;for(c=0;c<i.length;c++)i[c][1](null);i.length=0}}(b,d,e,e["s-apps"],e["s-cr"]),d.initialized=!0})(o,e,t,n,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"bscomponents","hydrated");