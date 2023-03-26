            // Comprador
let nameComprador = document.getElementById('nameComprador');
let lastnameComprador = document.getElementById('lastnameComprador');
let addressComprador = document.getElementById('addressComprador');
let ccComprador = document.getElementById('ccComprador');
let expedicionComprador = document.getElementById('expedicionComprador');
let phonenumberComprador = document.getElementById('phonenumberComprador');

            //Vendedor
let nameVendedor = document.getElementById('nameVendedor');
let lastnameVendedor = document.getElementById('lastnameVendedor');
let addressVendedor = document.getElementById('addressVendedor');
let ccVendedor = document.getElementById('ccVendedor');
let expedicionVendedor = document.getElementById('expedicionVendedor');
let phonenumberVendedor = document.getElementById('phonenumberVendedor');

            //Vehiculo
let vehiculo = document.getElementById('vehiculo');
let marca = document.getElementById('marca');
let modelo = document.getElementById('modelo');
let capacidad = document.getElementById('capacidad');
let tipo = document.getElementById('tipo');
let color = document.getElementById('color');
let servicio = document.getElementById('servicio');
let linea = document.getElementById('linea');
let motor = document.getElementById('motor');
let chasis = document.getElementById('chasis');
let serie = document.getElementById('serie');
let placa = document.getElementById('placa');
let empresa = document.getElementById('empresa');
let matriculaanombrede = document.getElementById('matriculaanombrede');
let numerocedula = document.getElementById('numerocedula');
let kilometraje = document.getElementById('kilometraje');
let cilindraje = document.getElementById('cilindraje');
let combustible = document.getElementById('combustible');
let traccion = document.getElementById('traccion');
let soat = document.getElementById('soat');
let tecnomecanica = document.getElementById('tecnomecanica');
let correadentada = document.getElementById('correadentada');

            //Mas info
let fechacompra = document.getElementById('fechacompra');
let precioconvenido = document.getElementById('precioconvenido');
let mediodepago = document.getElementById('mediodepago');
let limitaciones = document.getElementById('limitaciones');
let Ciudad = document.getElementById('Ciudad');
let sancion = document.getElementById('sancion');


function validar(){
    if( nameComprador === "" || nameComprador === null ||
    lastnameComprador === "" || lastnameComprador === null ||
    addressComprador === "" || addressComprador === null ||
    ccComprador === "" || ccComprador === null ||
    expedicionComprador === "" || expedicionComprador === null ||
    phonenumberComprador === "" || phonenumberComprador === null ||
    nameVendedor === "" || nameVendedor === null ||
    lastnameVendedor === "" || lastnameVendedor === null ||
    addressVendedor === "" || addressVendedor === null ||
    ccVendedor === "" || ccVendedor === null ||
    expedicionVendedor === "" || expedicionVendedor === null ||
    phonenumberVendedor === "" || phonenumberVendedor === null ||
    vehiculo === "" || vehiculo === null ||
    marca === "" || marca === null ||
    modelo === "" || modelo === null ||
    capacidad === "" || capacidad === null ||
    tipo === "" || tipo === null ||
    color === "" || color === null||
    linea === "" || linea === null ||
    motor === "" || motor === null ||
    chasis === "" || chasis === null ||
    serie === "" || serie === null ||
    placa === "" || placa === null ||
    empresa === "" || empresa === null ||
    matriculaanombrede === "" || matriculaanombrede === null ||
    numerocedula === "" || numerocedula === null ||
    kilometraje === "" || kilometraje === null ||
    cilindraje === "" || cilindraje === null ||
    combustible === "" || combustible === null ||
    traccion === "" || traccion === null ||
    soat === "" || soat === null ||
    tecnomecanica === "" || tecnomecanica === null ||
    correadentada === "" || correadentada === null ||
    fechacompra === "" || fechacompra === null || 
    precioconvenido === "" || precioconvenido === null || 
    mediodepago === "" || mediodepago === null || 
    limitaciones === "" || limitaciones === null || 
    Ciudad === "" || Ciudad === null || 
    sancion === "" || sancion === null  
    ){
        alert("Hay campos vacios, por favor llenarlos")
    }

    return false;
}