import { Articulo } from "./clases/Articulo";
import { Proveedor } from "./clases/Proveedor";
import { TipoProveedor } from "./clases/TipoProveedor";

console.log('%c ************============ I N I C I O ===============*********** ', 'background: #222; color: #bada55');
// let articulito = new Articulo("Arena de gato","20000");
let articulito = new Articulo("Arena de Gato BESTO","arenita@gmail.com","+5490303456");
console.log("============ A R T I C U L O ==============")

console.log(articulito)

// let proveedorcito = new Proveedor("EL GATO",articulito,"18900");
let proveedorcito = new TipoProveedor("EL GATO S.A.",articulito,17500,true,"ARGENTINA");
console.log("============ P R O V E E D O R / T I P O - P R O V E E D O R ==============")

console.log(proveedorcito)

console.log(proveedorcito.getInfoProveedor())

const obtenImpuestos = (proveedor) =>{
  let totalEmpresa = proveedor.precio;

  let tax= totalEmpresa*19/100;
  let derecho = totalEmpresa*6/100
  let total = tax+derecho;
  return [tax,derecho, total]
}

let [impuesto,aduanero,total] = obtenImpuestos(proveedorcito)

console.log("============ I M P U E S T O S ==============")
console.log(`El IVA de ${articulito.nombre} es ${impuesto}`)
console.log(`El impuesto aduanero de ${articulito.nombre} es ${aduanero}`)
console.log(`El impuesto total de ${articulito.nombre} es ${total}`)

console.log('%c ************============ F I N ===============*********** ', 'background: #222; color: #bada55');

