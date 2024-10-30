window.addEventListener("load", inicio);
window.addEventListener("load", primerInicio);

let sistema = new Sistema();

function inicio() {
    document.querySelector("#idBotonRegistroEnLaAplicacion").addEventListener("click", registro);
    document.querySelector("#idBotonIngresarEnLaApp").addEventListener("click", ingresar);
    document.querySelector("#idBotonAlquilarMaquinaVirtual").addEventListener("click", alquiler);
    document.querySelector("#idBotonModificacionDeStock").addEventListener("click", modificarStock);
    document.querySelector("#idBotonfiltroListadoMaquinasAlquiladas").addEventListener("click", verListado);
    document.querySelector("#idBotonSalirUser").addEventListener("click", logOutUser);
    document.querySelector("#idBotonSalirAdmin").addEventListener("click", logOutAdmin);
    document.querySelector("#idusuariosTotales").addEventListener("click", usuariosTotales);
    document.querySelector("#idusuariosPendientes").addEventListener("click", usuariosPendientes);
    document.querySelector("#idusuariosAprobados").addEventListener("click", usuariosAprobados);
    document.querySelector("#idusuariosBloqueados").addEventListener("click", usuariosBloqueados);
    sistema.precargaDatos();
}

function primerInicio() {
    mostrar("#idRegistroEnLaAplicacion");
    mostrar("#idIngresarEnLaAplicacion");
    ocultar("#idALquilerDeMaquinasVirtuales");
    ocultar("#idVerListadoDeMaquinasAlquiladasYSuEstado");
    ocultar("#idVerCostoTotalDeAlquiler");
    ocultar("#idAdministracionDeUsuarios");
    ocultar("#idModificacionDeStockDeMaquinasVirtuales");
    ocultar("#idInformeDeMaquinasVirtuales");
    ocultar("#idDivSalirUser");
    ocultar("#idDivSalirAdmin");
}

function ocultar(id) {
    document.querySelector(id).style.display = "none"
}

function mostrar(id) {
    document.querySelector(id).style.display = "block"
}

//USUARIOS
function actualizar() {
    mostrarCostoTotalPorUsuarioLogueado();
    verListado();
    if (document.querySelector("#idusuariosTotales").checked) {
        usuariosTotales();
    } else if (document.querySelector("#idusuariosPendientes").checked) {
        usuariosPendientes();
    } else if (document.querySelector("#idusuariosAprobados").checked) {
        usuariosAprobados();
    } else {
        usuariosBloqueados();
    }

}

function registro() {
    let formulario = document.querySelector("#idFormularioRegistro");
    let nombreRegistro = document.querySelector("#idNombreRegistro").value;
    let apellido = document.querySelector("#idApellidoRegistro").value;
    let nombreDeUsuario = document.querySelector("#idNombreUsuarioRegistro").value;
    let contraseña = document.querySelector("#idContraseñaRegistro").value;
    let numeroDeLaTarjetaDeCredito = document.querySelector("#idNumeroTarjetaCreditoRegistro").value;
    let cvc = document.querySelector("#idCodigoVerificacionRegistro").value;
    if (!campoObligatorio(nombreRegistro, apellido, nombreDeUsuario, contraseña, numeroDeLaTarjetaDeCredito, cvc)) {
        alert("Todos los campos son obligatorios/Los nombres y apellidos no empiezan con espacios.");
    } else if (!caracteresValidosEnNombreUsuario(nombreDeUsuario)) {
        alert("El nombre de usuario debe ser un string alfa-numérico.");
    } else if (sistema.existeUsuario(nombreDeUsuario)) {
        alert("El nombre de usuario ya existe.");
    } else if (!largoValidoContraseña(contraseña) || !caracteresValidosContraseña(contraseña)) {
        alert("La contraseña debe contar con 5 caracteres al menos, una minuscula,una mayuscula y un número además.");
    } else if (!validarCaracteresTarjetaCredito(numeroDeLaTarjetaDeCredito) && !algoritmoLuhn(numeroDeLaTarjetaDeCredito)) {
        alert("El número de la tarjeta de crédito debe contar con 16 carácteres sin contar guiones y debe se real.");
    } else if (!largoCorrectoCvc(cvc)) {
        alert("El CVC de la tarjeta de crédito debe contar con 3 carácteres.");
    }
    else {
        let nuevoUsuario = new Usuario(nombreRegistro, apellido, nombreDeUsuario, contraseña, numeroDeLaTarjetaDeCredito, cvc);
        sistema.agregarUsuarios(nuevoUsuario);
        formulario.reset();
        alert("Registro Completado!");
    }
}

function ingresar() {
    let formulario = document.querySelector("#idFormularioIngreso");
    let nombreDeUsuario = document.querySelector("#idNombreUsuarioIngreso").value;
    let contraseña = document.querySelector("#idContraseñaIngreso").value;
    if (sistema.ingresoUsuarios(nombreDeUsuario, contraseña)) {
        mostrar("#idALquilerDeMaquinasVirtuales");
        mostrar("#idVerListadoDeMaquinasAlquiladasYSuEstado");
        mostrar("#idVerCostoTotalDeAlquiler");
        mostrar("#idDivSalirUser");
        ocultar("#idRegistroEnLaAplicacion");
        ocultar("#idIngresarEnLaAplicacion");
        ocultar("#idAdministracionDeUsuarios");
        ocultar("#idModificacionDeStockDeMaquinasVirtuales");
        ocultar("#idInformeDeMaquinasVirtuales");
        ocultar("#idDivSalirAdmin");
        actualizarTablasUsuario();
    } else if (sistema.ingresoAdmins(nombreDeUsuario, contraseña)) {
        ocultar("#idALquilerDeMaquinasVirtuales");
        ocultar("#idVerListadoDeMaquinasAlquiladasYSuEstado");
        ocultar("#idVerCostoTotalDeAlquiler");
        ocultar("#idDivSalirUser");
        ocultar("#idRegistroEnLaAplicacion");
        ocultar("#idIngresarEnLaAplicacion");
        mostrar("#idAdministracionDeUsuarios");
        mostrar("#idModificacionDeStockDeMaquinasVirtuales");
        mostrar("#idInformeDeMaquinasVirtuales");
        mostrar("#idDivSalirAdmin");
        actualizarTablasAdmin();
        verListado();
        usuariosTotales();
    }
    else {
        alert("Verfique su Usuario/Contraseña Por favor o en su defecto espere a ser aprobado por un ADMIN Gracias");
    }
    formulario.reset();

}

function logOutAdmin() {
    primerInicio();
    sistema.logout();

}

function logOutUser() {
    primerInicio();
    sistema.logout();

}

function campoObligatorio(id1, id2, id3, id4, id5, id6) {
    let bool = true;
    if (id1 === "") {
        bool = false;
    }
    if (id2 === "") {
        bool = false;
    }
    if (id3 === "") {
        bool = false;
    }
    if (id4 === "") {
        bool = false;
    }
    if (id5 === "") {
        bool = false;
    }
    if (isNaN(id6)) {
        bool = false;
    }
    if (id1.charAt(0) == " " || id2.charAt(0) == " " || id4.charAt(0) == " ") {
        bool = false;
    }
    return bool;
}

function caracteresValidosEnNombreUsuario(id1) {
    let bool = true;
    for (let i = 0; i < id1.length; i++) {
        if (id1.charCodeAt(i) < 33) {
            bool = false;
        }
    }

    return bool;
}

function largoValidoContraseña(id1) {
    let bool = false;
    if (id1.length >= 5) {
        bool = true;
    }
    return bool;
}

function caracteresValidosContraseña(id12) {
    let bool = false;
    let numeros = 0;
    let mayus = 0;
    let minus = 0;
    for (let i = 0; i < id12.length; i++) {
        let aux = id12.charCodeAt(i);
        if (aux >= 48 && aux <= 57) {
            numeros++;
        } else if (aux >= 65 && aux <= 90) {
            mayus++;
        } else if (aux >= 97 && aux <= 122) {
            minus++;
        }
    }
    if (numeros > 0 && mayus > 0 && minus > 0) {
        bool = true;
    }
    return bool;
}

function largoCorrectoCvc(id1) {
    let bool = true;
    if (id1.length !== 3) {
        bool = false;
    }
    return bool;
}

function validarCaracteresTarjetaCredito(numero) {
    let bool = false;
    if (numero.length === 19) {
        bool = true;
    }
    if (numero.charAt(4) == "-") {
        bool = true;
    } else if (numero.charAt(9) == "-") {
        bool = true;
    } else if (numero.charAt(14) == "-") {
        bool = true;
    }
    return bool;
}
function algoritmoLuhn(pNumero) {
    /*Se estara iterando numero a numero, desde el final del string hasta el primer caracter, se estarán
      sumando y sustituyendo por duplicado cuando sea par, ya que sería el segundo nro. */
    let suma = 0;
    let digitoVerificadorX = Number(pNumero.charAt(pNumero.length - 1));
    let contador = 0; //para saber cuando estamos en los segundos, lo pares.
    let haynro = true;
    let i = pNumero.length - 2; //el penúltimo.


    //Mientras los numeros sea mayor o igual a 0 se estara tomando cada caracter
    while (i >= 0 && haynro) {
        //Obtener el numero
        let caracter = pNumero.charAt(i);
        //Valida que el número sea válido
        if (!isNaN(caracter)) {
            let num = Number(caracter);
            //Duplicando cada segundo dígito
            if (contador % 2 == 0) {
                num = duplicarPar(num); //porque si es mayor a 9 se deben sumar.
            }
            suma += num;
        } else {
            haynro = false;
        }
        i--;
        contador++;
    }
    let digitoVerificadorValido = checkDigito(suma, digitoVerificadorX);
    let modulodelasumaValiado = checkModulo(suma, digitoVerificadorX);
    return digitoVerificadorValido && modulodelasumaValiado;
}

function duplicarPar(pNum) {
    pNum = pNum * 2;
    if (pNum > 9) {
        /*Si el resultado del multiplicación es mayor a 9 entonces lo descomponemos y sumamos. 
         Como el numero sera x>=10 && x<=19
         Entonces es 1+(num % 10) 1 más el resto de dividir entre 10.*/
        pNum = 1 + (pNum % 10);
    }
    return pNum;
}

function checkDigito(pSuma, pDigito) {
    /* 1. Calcular la suma de los dígitos (67).
  2. Multiplicar por 9 (603).
  3. Tomar el último dígito (3).
  4. El resultado es el dígito de chequeo.*/
    let total = 9 * pSuma;
    let ultimoNro = total % 10
    return ultimoNro === pDigito;
}

function checkModulo(pSuma, pDigito) {
    /*
    Si el total del módulo 10 es igual a O (si el total termina en cero), entonces el número es válido 
  de acuerdo con la fórmula Luhn, de lo contrario no es válido.
    */
    let total = pSuma + pDigito;
    let validacionFinal = false;
    if (total % 10 === 0 && total !== 0) {
        validacionFinal = true;
    }
    return validacionFinal;
}



function usuariosTotales() {
    let lista = sistema.darUsuarios();
    let texto = "";
    for (let i = 0; i < lista.length; i++) {
        let estadoActual = lista[i].estado;
        texto += `
        <tr> 
            <td>${lista[i].nombreDeUsuario}</td>
            <td>${lista[i].nombre}</td>
            <td>${lista[i].apellido}</td>
            <td>${estadoActual}</td>`
        if (estadoActual === "aprobado") {
            texto += `<td><input type ="button" value ="Bloquear" id ="${lista[i].id} - Estado" class="bloquearDinamico"></td></tr>`
        } else if (estadoActual === "pendiente" || estadoActual === "bloqueado") {
            texto += `<td><input type ="button" value ="Aprobar" id ="${lista[i].id} - Estado" class="aprobarDinamico"></td></tr>`
        }

    }
    document.querySelector("#idTablaDeAdministracionDeUsuarios").innerHTML = texto;
    let arrayDeBotonesAprobar = document.querySelectorAll(".aprobarDinamico");
    for (let i = 0; i < arrayDeBotonesAprobar.length; i++) {
        let botonActual = arrayDeBotonesAprobar[i];
        botonActual.addEventListener("click", aprobarDinamico);
    }
    let arrayDeBotonesBloquear = document.querySelectorAll(".bloquearDinamico");
    for (let i = 0; i < arrayDeBotonesBloquear.length; i++) {
        let botonActual = arrayDeBotonesBloquear[i];
        botonActual.addEventListener("click", bloquearDinamico);
    }
}
function usuariosAprobados() {
    let texto = "";
    let lista = sistema.darUsuarios();
    for (let i = 0; i < lista.length; i++) {
        let estadoActual = lista[i].estado;
        if (estadoActual === "aprobado") {
            texto += `
                <tr> 
                    <td>${lista[i].nombreDeUsuario}</td>
                    <td>${lista[i].nombre}</td>
                    <td>${lista[i].apellido}</td>
                    <td>${estadoActual}</td>
                   <td><input type ="button" value ="Bloquear" id ="${lista[i].id} - Estado" class="bloquearDinamico"></td></tr>`
        }
    }
    document.querySelector("#idTablaDeAdministracionDeUsuarios").innerHTML = texto;

    let arrayDeBotonesBloquear = document.querySelectorAll(".bloquearDinamico");
    for (let i = 0; i < arrayDeBotonesBloquear.length; i++) {
        let botonActual = arrayDeBotonesBloquear[i];
        botonActual.addEventListener("click", bloquearDinamico);
    }

}
function usuariosPendientes() {
    let texto = "";
    let lista = sistema.darUsuarios();
    for (let i = 0; i < lista.length; i++) {
        let estadoActual = lista[i].estado;
        if (estadoActual === "pendiente") {
            texto += `
                <tr> 
                    <td>${lista[i].nombreDeUsuario}</td>
                    <td>${lista[i].nombre}</td>
                    <td>${lista[i].apellido}</td>
                    <td>${estadoActual}</td>
                   <td><input type ="button" value ="Aprobar" id ="${lista[i].id} - Estado" class="aprobarDinamico"></td></tr>`
        }

    }
    document.querySelector("#idTablaDeAdministracionDeUsuarios").innerHTML = texto;
    let arrayDeBotonesAprobar = document.querySelectorAll(".aprobarDinamico");
    for (let i = 0; i < arrayDeBotonesAprobar.length; i++) {
        let botonActual = arrayDeBotonesAprobar[i];
        botonActual.addEventListener("click", aprobarDinamico);
    }
}

function usuariosBloqueados() {
    let texto = "";
    let lista = sistema.darUsuarios();
    for (let i = 0; i < lista.length; i++) {
        let estadoActual = lista[i].estado;
        if (estadoActual === "bloqueado") {
            texto += `
                    <tr> 
                        <td>${lista[i].nombreDeUsuario}</td>
                        <td>${lista[i].nombre}</td>
                        <td>${lista[i].apellido}</td>
                        <td>${estadoActual}</td>
                       <td><input type ="button" value ="Aprobar" id ="${lista[i].id} - Estado" class="aprobarDinamico" - name ="${lista[i].nombreDeUsuario}" ></td></tr>`
        }

    }
    document.querySelector("#idTablaDeAdministracionDeUsuarios").innerHTML = texto;
    let arrayDeBotonesAprobar = document.querySelectorAll(".aprobarDinamico");
    for (let i = 0; i < arrayDeBotonesAprobar.length; i++) {
        let botonActual = arrayDeBotonesAprobar[i];
        botonActual.addEventListener("click", aprobarDinamico);
    }
}

function aprobarDinamico() {
    let id = parseInt(this.id);
    let si = confirm("Desea Activar Usuario?");
    if (si) {
        sistema.activarUsuario(id);
        actualizarTablasAdmin();
        usuariosTotales();

    }
}

function bloquearDinamico() {
    let id = parseInt(this.id);
    let si = confirm("Desea Bloquear Usuario?");
    if (si) {
        sistema.desactivarUsuario(id);
        sistema.retornarAlquiladosPorUsuarioBloqueado(id);
        actualizarTablasAdmin();
        usuariosTotales();

    }

}

//Alquiler
//FUNCION USER
function alquiler() {
    let c7Small = document.querySelector("#idAlquilerC7Small").checked;
    let c7Medium = document.querySelector("#idAlquilerC7Medium").checked;
    let c7Large = document.querySelector("#idAlquilerC7Large").checked;
    let r7Small = document.querySelector("#idAlquilerR7Small").checked;
    let r7Medium = document.querySelector("#idAlquilerR7Medium").checked;
    let r7Large = document.querySelector("#idAlquilerR7Large").checked;
    let i7Medium = document.querySelector("#idAlquilerI7Medium").checked;
    let i7Large = document.querySelector("#idAlquilerI7Large").checked;
    if (c7Small) {
        sistema.alquilarUnaMaquina("c7.small");
    } else if (c7Medium) {
        sistema.alquilarUnaMaquina("c7.medium");
    } else if (c7Large) {
        sistema.alquilarUnaMaquina("c7.large");
    } else if (r7Small) {
        sistema.alquilarUnaMaquina("r7.small");
    } else if (r7Medium) {
        sistema.alquilarUnaMaquina("r7.medium");
    } else if (r7Large) {
        sistema.alquilarUnaMaquina("r7.large");
    } else if (i7Medium) {
        sistema.alquilarUnaMaquina("i7.medium");
    } else if (i7Large) {
        sistema.alquilarUnaMaquina("i7.large");
    }
    actualizarTablasUsuario();
}

//FUNCION ADMIN
function modificarStock() {
    let select = document.querySelector("#idTipoDeInstanciaModificacionDeStock").value;
    let aumento = (document.querySelector("#idAumentoNuevaCantidadModificacionDeStock").checked);
    let decremento = (document.querySelector("#idDecrementoNuevaCantidadModificacionDeStock").checked);
    if (aumento) {
        sistema.aumentoStockAlquileres(select);
    } else if (decremento) {
        sistema.DecrementoStockAlquileres(select);
    }
    mostrarEnParrafoCostoTotal();
    cargarAlquileresATablaInformes();
    cargarAlquileresATablaStock();


}
//FUNCION ADMIN
function cargarAlquileresATablaStock() {

    let texto = "";
    let lista = sistema.listaDeInstancias;
    let instanciaActual;
    for (let i = 0; i < lista.length; i++) {
        if (i === 0) {
            instanciaActual = "c7.small";
        } else if (i === 1) {
            instanciaActual = "c7.medium";
        } else if (i === 2) {
            instanciaActual = "c7.large";
        } else if (i === 3) {
            instanciaActual = "r7.small";
        } else if (i === 4) {
            instanciaActual = "r7.medium";
        } else if (i === 5) {
            instanciaActual = "r7.large";
        } else if (i === 6) {
            instanciaActual = "i7.medium";
        } else if (i === 7) {
            instanciaActual = "i7.large";
        }
        let stockDisponible = lista[i].stock;
        let maquinasAlquiladas = lista[i].cantidadAlquiladaTotalInstancia;
        texto += `
            <tr>
                <td>${instanciaActual}</td>
                <td>${stockDisponible}</td>
                <td>${maquinasAlquiladas}</td>
            </tr>`
    }
    document.querySelector("#idTablaStockDeMaquinasVirtuales").innerHTML = texto;

}
//FUNCION ADMIN
function cargarAlquileresATablaInformes() {

    let texto = "";
    let lista = sistema.darAlquileres();
    for (let i = 0; i < 8; i++) {
        if (i === 0) {
            lista.tipoDeInstancia = "c7.small";
        } else if (i === 1) {
            lista.tipoDeInstancia = "c7.medium";
        } else if (i === 2) {
            lista.tipoDeInstancia = "c7.large";
        } else if (i === 3) {
            lista.tipoDeInstancia = "r7.small";
        } else if (i === 4) {
            lista.tipoDeInstancia = "r7.medium";
        } else if (i === 5) {
            lista.tipoDeInstancia = "r7.large";
        } else if (i === 6) {
            lista.tipoDeInstancia = "i7.medium";
        } else if (i === 7) {
            lista.tipoDeInstancia = "i7.large";
        }
        let maquinasAlquiladas = lista[i].instancia.cantidadAlquiladaTotalInstancia;
        let costoTotal = lista[i].costoTotal;
        texto += `
            <tr>
                <td>${lista.tipoDeInstancia}</td>
                <td>${maquinasAlquiladas}</td>
                <td>${costoTotal}</td>
            </tr>`
    }
    document.querySelector("#idTablaInformeDeMaquinasVirtuales").innerHTML = texto;

}
//FUNCION USER
function verListado() {
    let lista = sistema.obtenerTodasLasInstancias();
    let select = document.querySelector("#idSelectFiltroMaquinasAlquiladas").value;
    switch (select) {
        case "todasLasInstancias":
            lista = sistema.obtenerTodasLasInstancias();
            break;
        case "c7Small":
            lista = sistema.obtenerC7SMALL();
            break;
        case "c7Medium":
            lista = sistema.obtenerC7MEDIUM();
            break;
        case "c7Large":
            lista = sistema.obtenerC7LARGE();
            break;
        case "r7Small":
            lista = sistema.obtenerR7SMALL();
            break;
        case "r7Medium":
            lista = sistema.obtenerR7MEDIUM();
            break;
        case "r7Large":
            lista = sistema.obtenerR7LARGE();
            break;
        case "i7Medium":
            lista = sistema.obtenerI7MEDIUM();
            break;
        case "i7Large":
            lista = sistema.obtenerI7LARGE();
            break;
        default:
            break;
    }

    mostrarAlquilerPorUsuarioLogueado(lista);
    mostrarCostoTotalPorUsuarioLogueado();

}
//FUNCION USER
function mostrarAlquilerPorUsuarioLogueado(lista) {
    let texto = "";
    let usuarioActual = sistema.personaLogueada;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].estadoAlqDesq === "Alquilado") {
            if (usuarioActual.nombreDeUsuario === lista[i].usuario.nombreDeUsuario) {
                texto += `
                    <tr>
                        <td>${lista[i].tipoDeInstancia}</td>
                        <td>${lista[i].estado}</td>
                        <td>${lista[i].vecesSeInicio}</td>`;

                if (lista[i].estado === "apagado") {
                    texto += `<td><input type="button" value="Encender" id="${lista[i].numeroID} - Estado" class="encenderDinamico"></td></tr>`;
                } else if (lista[i].estado === "encendido") {
                    texto += `<td><input type="button" value="Apagar" id="${lista[i].numeroID} - Estado" class="apagarDinamico"></td></tr>`;
                }
            }
        }

    }

    document.querySelector("#idTablaListadoMaquinasAlquiladas").innerHTML = texto;
    let arrayDeBotonesAprobar = document.querySelectorAll(".apagarDinamico");
    for (let i = 0; i < arrayDeBotonesAprobar.length; i++) {
        let botonActual = arrayDeBotonesAprobar[i];
        botonActual.addEventListener("click", apagarDinamico);
    }
    let arrayDeBotonesBloquear = document.querySelectorAll(".encenderDinamico");
    for (let i = 0; i < arrayDeBotonesBloquear.length; i++) {
        let botonActual = arrayDeBotonesBloquear[i];
        botonActual.addEventListener("click", encenderDinamico);
    }
}

function actualizarTablasUsuario() {
    mostrarCostoTotalPorUsuarioLogueado();
    verListado();
    actualizar();
}

function actualizarTablasAdmin() {
    mostrarEnParrafoCostoTotal();
    cargarAlquileresATablaInformes();
    cargarAlquileresATablaStock();
}


//FUNCION USER
function apagarDinamico() {
    let id = parseInt(this.id);
    let confirmation = confirm("¿Desea apagar la máquina?");
    if (confirmation) {
        sistema.apagarMaquina(id);
        mostrarCostoTotalPorUsuarioLogueado();
        verListado();

    }
}
//FUNCION USER
function encenderDinamico() {
    let id = parseInt(this.id);
    let confirmation = confirm("¿Desea encender la máquina?");
    if (confirmation) {
        sistema.encenderMaquina(id);
        mostrarCostoTotalPorUsuarioLogueado();
        verListado();

    }
}

//FUNCION USER
function mostrarEnParrafoCostoTotal() {
    let costo = 0;
    let lista = sistema.darAlquileres();
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].estadoAlqDesq === "Alquilado") {
            let costoParcialIncremento = lista[i].costoPorEncendido * ((lista[i].vecesSeInicio) - 1);
            let costoTotal = parseFloat(lista[i].costoPorAlquiler + costoParcialIncremento);
            costo += costoTotal;
        } else if (lista[i].estadoAlqDesq === "Desalquilado") {
            costoTotal = 0;
        }

    }
    document.querySelector("#idParrafoTotalDeIngresosInformeDeMaquinasVirtuales").innerHTML = costo;
}

//FUNCION ADMIN
function mostrarCostoTotalPorUsuarioLogueado() {
    let texto = "";
    let lista = sistema.darAlquileres();
    let usuarioActual = sistema.personaLogueada;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].estadoAlqDesq === "Alquilado") {
            let personaAlquila = lista[i];
            let costoParcialIncremento = personaAlquila.costoPorEncendido * ((personaAlquila.vecesSeInicio) - 1);
            let costoTotal = parseFloat(personaAlquila.costoPorAlquiler + costoParcialIncremento);
            personaAlquila.costoTotal = costoTotal;
            if (usuarioActual.id === personaAlquila.usuario.id) {
                texto += `
                <tr>
                    <td>${personaAlquila.tipoDeInstancia}</td>
                    <td>${personaAlquila.costoPorEncendido}</td>
                    <td>${personaAlquila.vecesSeInicio}</td>
                    <td>${costoTotal}</td>
                </tr>`;
            }
        }
    }

    document.querySelector("#idTablaCostoTotalDeAlquiler").innerHTML = texto;

}