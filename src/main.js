import  './style.css';
import javascriptLogo from './public/JavaScript.svg';
import viteLogo from './public/vite.svg';
import { setupCounter } from './components/counter.js';
import { Articulos } from './components/articulos.js';
import { Proveedores } from './components/proveedores.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Aqui usamos Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Clickea en el logo de vite para más informacion
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

let articulo2 = new Articulos("clavos","20000");
console.log("============ A R T I C U L O ==============")

console.log(articulo2)
 
let proveedor2 = new Proveedores("ferrokabros","ferroinfo@kabros.cl",articulo2,"+56912345678");
console.log("============ P R O V E E D O R ==============")

console.log(proveedor2)

console.log(proveedor2.getInfoProveedores())

const obtenImpuestos = (Proveedores) =>{
  let totalEmpresa = Proveedores.articulo.precio;

  let tax= totalEmpresa*19/100;
  let derecho = totalEmpresa*6/100
  let total = tax+derecho;
  return [tax,derecho, total]
}

let [impuesto,aduanero,total] = obtenImpuestos(proveedor2)

console.log("============ I M P U E S T O S ==============")
console.log(`El IVA de ${articulo2.nombre} es ${impuesto}`)
console.log(`El impuesto aduanero de ${articulo2.nombre} es ${aduanero}`)
console.log(`El impuesto total de ${articulo2.nombre} es ${total}`)

console.log("============ F I N ==============")


