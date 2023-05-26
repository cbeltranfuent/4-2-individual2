import { articulos } from "./clases/articulos";
import { proveedores } from "./clases/proveedores";


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
