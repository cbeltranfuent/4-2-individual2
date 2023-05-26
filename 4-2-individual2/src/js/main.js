import { articulos } from "../js/clases/articulos.js";
import { proveedores } from "../js/clases/proveedores.js";
import { setupCounter } from '../js/clases/counter.js';
import '../css/style.css';
// import './style.css'
import javascriptLogo from '../../public/javascript.svg';
// import javascriptLogo from './javascript.svg'
import viteLogo from '../../public/vite.svg'
// import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))


let articulo2 = new articulos("Arena de gato","20000");
console.log("============ A R T I C U L O ==============")

console.log(articulo2)
 
let proveedor2 = new proveedores("gatoArena","gato@arena.cl",articulo2,"+5690303456");
console.log("============ P R O V E E D O R ==============")

console.log(proveedor2)

console.log(proveedor2.getInfoProveedor())

const obtenImpuestos = (proveedor) =>{
  let totalEmpresa = proveedor.articulo.precio;

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
