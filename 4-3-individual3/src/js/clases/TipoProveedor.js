import { Proveedor } from "./Proveedor";


export class TipoProveedor extends Proveedor{
    constructor(nombre, articulo = {}, precio, internacional, pais){
        super(nombre, articulo, precio);
        this._internacional = internacional;
        this._pais = pais;
    }

    get nombre() {
        return super.nombre;
    }
    set nombre(nombre) {
        super.nombre = nombre;
    }

    get articulo() {
        return super.articulo;
    }
    set articulo(articulo) {
        super.articulo = articulo;
    }

    get precio() {
        return super.precio;
    }
    set precio(precio) {
        super.precio = precio;
    }



    getInfoProveedor() {
        return super.getInfoProveedor();
    }
}