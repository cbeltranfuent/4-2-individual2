function b(){import.meta.url,import("_").catch(()=>1);async function*i(){}}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const a="/4-2-individual2/assets/javascript-8dac5379.svg",u="/4-2-individual2/assets/vite-4a748afd.svg";function d(i){let e=0;const t=s=>{e=s,i.innerHTML=`count is ${e}`};i.addEventListener("click",()=>t(e+1)),t(0)}class m{constructor(e,t){this._nombre=e,this._precio=t}get nombre(){return this._nombre}set nombre(e){this._nombre=e}get precio(){return this._precio}set precio(e){this._precio=e}}class f{constructor(e,t,s={},o){this._nombre=e,this._email=t,this._articulo=s,this._telefono=o}get nombre(){return this._nombre}set nombre(e){this._nombre=e}get email(){return this._email}set email(e){this._email=e}get articulo(){return this._articulo}set articulo(e){this._articulo=e}get telefono(){return this._telefono}set telefono(e){this._telefono=e}getInfoProveedores(){return`Proveedores: ${this._nombre}, teléfono: ${this._telefono}`}}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${u}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${a}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Aqui usamos Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Clickea en el logo de vite para más informacion
    </p>
  </div>
`;d(document.querySelector("#counter"));let n=new m("clavos","20000");console.log("============ A R T I C U L O ==============");console.log(n);let c=new f("ferrokabros","ferroinfo@kabros.cl",n,"+56912345678");console.log("============ P R O V E E D O R ==============");console.log(c);console.log(c.getInfoProveedores());const p=i=>{let e=i.articulo.precio,t=e*19/100,s=e*6/100,o=t+s;return[t,s,o]};let[g,h,v]=p(c);console.log("============ I M P U E S T O S ==============");console.log(`El IVA de ${n.nombre} es ${g}`);console.log(`El impuesto aduanero de ${n.nombre} es ${h}`);console.log(`El impuesto total de ${n.nombre} es ${v}`);console.log("============ F I N ==============");export{b as __vite_legacy_guard};
