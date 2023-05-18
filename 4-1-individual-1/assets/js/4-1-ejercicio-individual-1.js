/*
function Consultorio(nombre, paciente) {
    let _nombre = nombre;
    //let _paciente = paciente;
    this._paciente = paciente || [];

    Object.defineProperty(this, "_nombre", { value: _nombre, writable: false })
    Object.defineProperty(this, "_paciente", { value: this._paciente, writable: false })

    Object.defineProperty(this, "_getNombre", {
        get: function () {
            return _nombre
        }
    });

    Object.defineProperty(this, "_setNombre", {
        set: function (nombre) {
            _nombre = nombre
        }
    });

    Object.defineProperty(this, "_getPaciente", {
        get: function () {
            return _paciente
        }
    });

    Object.defineProperty(this, "_setPaciente", {
        set: function (paciente) {
            _paciente = paciente
        }
    });

}
*/

class Consultorio {
    constructor(nombre, paciente) {
        let _nombre = nombre;
        //let _paciente = paciente;
        this._paciente = paciente || [];

        Object.defineProperty(this, "_nombre", { value: _nombre, writable: false });
        Object.defineProperty(this, "_paciente", { value: this._paciente, writable: false });

        Object.defineProperty(this, "_getNombre", {
            get: function () {
                return _nombre;
            }
        });

        Object.defineProperty(this, "_setNombre", {
            set: function (nombre) {
                _nombre = nombre;
            }
        });

        Object.defineProperty(this, "_getPaciente", {
            get: function () {
                return _paciente;
            }
        });

        Object.defineProperty(this, "_setPaciente", {
            set: function (paciente) {
                _paciente = paciente;
            }
        });

    }
    agregarPaciente(paciente) {
        this._paciente.push(paciente);
    }
    getNombre() {
        return this._getNombre;
    }
    setNombre(nombre) {
        this._setNombre = nombre;
    }
    getPaciente() {
        return this._getPaciente;
    }
    getPacientes() {
        console.log('pacientes: ', this._paciente);
        let arr = this._paciente;
        console.log("TODOS LOS PACIENTES");
        arr.forEach((element, index) => {
            console.log('-----------------------');
            console.log(`Paciente num ${index}`);
            console.log(`Nombre: ${element.getNombre()}`);
            console.log(`Rut: ${element.getRut()}`);
            console.log(`Edad: ${element.getEdad()}`);
            console.log(`Diagnostico: ${element.getDiagnostico()}`);
        });
    }
    getPacientesxNombre(nombre) {
        let arr = this._paciente;
        arr.forEach((element, index) => {
            if (element.getNombre() == nombre) {
                console.log('-----------PACIENTE X NOMBRE-----------------------------');
                console.log(`Paciente num ${index}`);
                console.log(`Nombre: ${element.getNombre()}`);
                console.log(`Rut: ${element.getRut()}`);
                console.log(`Edad: ${element.getEdad()}`);
                console.log(`Diagnostico: ${element.getDiagnostico()}`);
                console.log('----------------------------------------');
            }
        });
    }
    setPaciente(paciente) {
        this._setPaciente = paciente;
    }
}


//=================================================================================================================================
/*
function Paciente(nombre, edad, rut, diagnostico) {

    let _nombre = nombre;
    let _edad = edad;
    let _rut = rut;
    let _diagnostico = diagnostico;

    Object.defineProperty(this, "_nombre", { value: _nombre, writable: false })
    Object.defineProperty(this, "_edad", { value: _edad, writable: false })
    Object.defineProperty(this, "_rut", { value: _rut, writable: false })
    Object.defineProperty(this, "_diagnostico", { value: _diagnostico, writable: false })

    Object.defineProperty(this, "_getNombre", {
        get: function () {
            return _nombre
        }
    });

    Object.defineProperty(this, "_setNombre", {
        set: function (nombre) {
            _nombre = nombre
        }
    });



    Object.defineProperty(this, "_getEdad", {
        get: function () {
            return _edad
        }
    });

    Object.defineProperty(this, "_setEdad", {
        set: function (edad) {
            _edad = edad
        }
    });



    Object.defineProperty(this, "_getRut", {
        get: function () {
            return _rut
        }
    });

    Object.defineProperty(this, "_setRut", {
        set: function (rut) {
            _rut = rut
        }
    });



    Object.defineProperty(this, "_getDiagnostico", {
        get: function () {
            return _diagnostico
        }
    });

    Object.defineProperty(this, "_setDiagnostico", {
        set: function (diagnostico) {
            _diagnostico = diagnostico
        }
    });


}
*/
//version ecma6//

class Paciente {
    constructor(nombre, edad, rut, diagnostico) {

        let _nombre = nombre;
        let _edad = edad;
        let _rut = rut;
        let _diagnostico = diagnostico;

        Object.defineProperty(this, "_nombre", { value: _nombre, writable: false });
        Object.defineProperty(this, "_edad", { value: _edad, writable: false });
        Object.defineProperty(this, "_rut", { value: _rut, writable: false });
        Object.defineProperty(this, "_diagnostico", { value: _diagnostico, writable: false });

        Object.defineProperty(this, "_getNombre", {
            get: function () {
                return _nombre;
            }
        });

        Object.defineProperty(this, "_setNombre", {
            set: function (nombre) {
                _nombre = nombre;
            }
        });



        Object.defineProperty(this, "_getEdad", {
            get: function () {
                return _edad;
            }
        });

        Object.defineProperty(this, "_setEdad", {
            set: function (edad) {
                _edad = edad;
            }
        });



        Object.defineProperty(this, "_getRut", {
            get: function () {
                return _rut;
            }
        });

        Object.defineProperty(this, "_setRut", {
            set: function (rut) {
                _rut = rut;
            }
        });



        Object.defineProperty(this, "_getDiagnostico", {
            get: function () {
                return _diagnostico;
            }
        });

        Object.defineProperty(this, "_setDiagnostico", {
            set: function (diagnostico) {
                _diagnostico = diagnostico;
            }
        });


    }
    getNombre() {
        return this._getNombre;
    }
    setNombre(nombre) {
        this._setNombre = nombre;
    }
    getEdad() {
        return this._getEdad;
    }
    setEdad(edad) {
        this._setEdad = edad;
    }
    getRut() {
        return this._getRut;
    }
    setRut(rut) {
        this._setRut = rut;
    }
    getDiagnostico() {
        return this._getDiagnostico;
    }
    setDiagnostico(diagnostico) {
        this._setDiagnostico = diagnostico;
    }
}


//==============================================================================================================================


let usuario1 = new Paciente('El Pulento', 2023, '0.000.000-1', 'Politraumastismo secundario a crucifixión.')
let usuario2 = new Paciente('Felipito', 44, '10millones y algo mas', 'desceso por desmenbramiento traumatico en colision de pajaro.')
let usuario3 = new Paciente('el curco vayne', 27, '8972456498', 'Sobredosis de perdigones y grafiti rojo en la pared, por cata de escopeta.')

usuario2._nombre = "hola";
let consultorio = new Consultorio('Grandes Estrellas', [usuario1, usuario2]);
consultorio._paciente = [1];
console.log("consultorio1",consultorio)
consultorio.agregarPaciente(usuario3);
console.log(consultorio)
consultorio.getPacientes()
consultorio.getPacientesxNombre("Felipito");

console.log(usuario1);
console.log(usuario2);
console.log(usuario3);