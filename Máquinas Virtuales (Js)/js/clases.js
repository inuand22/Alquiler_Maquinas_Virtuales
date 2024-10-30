class Sistema {
    constructor() {
        this.listaDeUsuarios = [];
        this.listaDeAdmins = [];
        this.listaDeStockDeAlquileres = [];
        this.listaDeInstancias = [];
        this.personaLogueada = null;
    }

    precargaDatos() {
        let usuario1 = new Usuario("Ana", "Lopez", "ana.lopez07", "Anita07", "45678", "569");
        usuario1.estado = "aprobado";
        let usuario2 = new Usuario("Miguez", "Torres", "miguel.torres08", "Miguelito08", "45678", "569");
        usuario2.estado = "aprobado";
        let usuario3 = new Usuario("Carmen", "Fernandez", "carmen.fernandez09", "Carmencita09", "65982", "574");
        usuario3.estado = "aprobado";
        let usuario4 = new Usuario("Javier", "Gonzalez", "javier.gonzalez10", "Javiercito10", "12345", "259");
        usuario4.estado = "aprobado";
        let usuario5 = new Usuario("Susana", "Ramirez", "susana.ramirez11", "Susanita11", "58978", "345");
        usuario5.estado = "aprobado";
        let admin1 = new Admin("jorge.lopez02", "Jorgito02");
        let admin2 = new Admin("juan.rodriguez03", "Juansito03");
        let admin3 = new Admin("maria.perez04", "Maria04");
        let admin4 = new Admin("laura.garcia05", "Laurita05");
        let admin5 = new Admin("roberto.martinez06", "Robertito06");
        this.listaDeUsuarios.push(usuario1);
        this.listaDeUsuarios.push(usuario2);
        this.listaDeUsuarios.push(usuario3);
        this.listaDeUsuarios.push(usuario4);
        this.listaDeUsuarios.push(usuario5);
        this.listaDeAdmins.push(admin1);
        this.listaDeAdmins.push(admin2);
        this.listaDeAdmins.push(admin3);
        this.listaDeAdmins.push(admin4);
        this.listaDeAdmins.push(admin5);
        //Alquiler 1  y Estancia 1
        let instancia1 = new Instancia(2, 2);
        instancia1.stock = 0;
        instancia1.costoTotalPorInstancia = 40;
        let alquiler1 = new Alquiler("c7.small", usuario1, instancia1, 20, 20, 2.5, 1);
        alquiler1.vecesSeInicio = 1;
        alquiler1.estadoAlqDesq = "Alquilado";
        alquiler1.estado = "encendido";
        alquiler1.instancia = instancia1;
        //Alquiler 2 y Estancia 1
        let instancia2 = new Instancia(2, 2);
        instancia2.stock = 0;
        instancia2.costoTotalPorInstancia = 60;
        let alquiler2 = new Alquiler("c7.medium", usuario1, instancia2, 30, 30, 3.5, 1);
        alquiler2.vecesSeInicio = 1;
        alquiler2.estadoAlqDesq = "Alquilado";
        alquiler2.estado = "encendido";
        alquiler2.instancia = instancia2;
        //Alquiler 3 y Estancia 3
        let instancia3 = new Instancia(1);
        instancia3.stock = 0;
        instancia3.costoTotalPorInstancia = 50;
        let alquiler3 = new Alquiler("c7.large", usuario2, instancia3, 50, 50, 6, 1);
        alquiler3.vecesSeInicio = 1;
        alquiler3.estadoAlqDesq = "Alquilado";
        alquiler3.estado = "encendido";
        alquiler3.instancia = instancia3;
        //Alquiler 4 y Estancia 4
        let instancia4 = new Instancia(1);
        instancia4.stock = 0;
        instancia4.costoTotalPorInstancia = 35;
        let alquiler4 = new Alquiler("r7.small", usuario2, instancia4, 35, 35, 4, 1);
        alquiler4.vecesSeInicio = 1;
        alquiler4.estadoAlqDesq = "Alquilado";
        alquiler4.estado = "encendido";
        alquiler4.instancia = instancia4;
        //Alquiler 5 y Estancia 5
        let instancia5 = new Instancia(1);
        instancia5.stock = 0;
        instancia5.costoTotalPorInstancia = 50;
        let alquiler5 = new Alquiler("r7.medium", usuario3, instancia5, 50, 50, 6.5, 1);
        alquiler5.vecesSeInicio = 1;
        alquiler5.estadoAlqDesq = "Alquilado";
        alquiler5.estado = "encendido";
        alquiler5.instancia = instancia5;
        //Alquiler 6 y Estancia 6
        let instancia6 = new Instancia(1);
        instancia6.stock = 0;
        instancia6.costoTotalPorInstancia = 60;
        let alquiler6 = new Alquiler("r7.large", usuario3, instancia6, 60, 60, 7, 1);
        alquiler6.vecesSeInicio = 1;
        alquiler6.estadoAlqDesq = "Alquilado";
        alquiler6.estado = "encendido";
        alquiler6.instancia = instancia6;
        //Alquiler 7 y Estancia 7
        let instancia7 = new Instancia(1);
        instancia7.stock = 0;
        instancia7.costoTotalPorInstancia = 30;
        let alquiler7 = new Alquiler("i7.medium", usuario4, instancia7, 30, 30, 3.50, 1);
        alquiler7.vecesSeInicio = 1;
        alquiler7.estadoAlqDesq = "Alquilado";
        alquiler7.estado = "encendido";
        alquiler7.instancia = instancia7;
        //Alquiler 8 y Estancia 8
        let instancia8 = new Instancia(1);
        instancia8.stock = 0;
        instancia8.costoTotalPorInstancia = 50;
        let alquiler8 = new Alquiler("i7.large", usuario4, instancia8, 50, 50, 6.50, 1);
        alquiler8.vecesSeInicio = 1;
        alquiler8.estadoAlqDesq = "Alquilado";
        alquiler8.estado = "encendido";
        alquiler8.instancia = instancia8;
        //Alquiler 9 y Estancia 9
        instancia1.stock = 0;
        let alquiler9 = new Alquiler("c7.small", usuario5, instancia1, 20, 20, 3.5, 1);
        alquiler9.vecesSeInicio = 1;
        alquiler9.estadoAlqDesq = "Alquilado";
        alquiler9.estado = "encendido";
        alquiler9.instancia = instancia1;
        //Alquiler 10 y Estancia 10
        instancia2.stock = 0;
        let alquiler10 = new Alquiler("c7.medium", usuario5, instancia2, 30, 30, 3.5, 1);
        alquiler10.vecesSeInicio = 1;
        alquiler10.estadoAlqDesq = "Alquilado";
        alquiler10.estado = "encendido";
        alquiler10.instancia = instancia2;
        //Pusheo Listas
        this.listaDeStockDeAlquileres.push(alquiler1);
        this.listaDeStockDeAlquileres.push(alquiler2);
        this.listaDeStockDeAlquileres.push(alquiler3);
        this.listaDeStockDeAlquileres.push(alquiler4);
        this.listaDeStockDeAlquileres.push(alquiler5);
        this.listaDeStockDeAlquileres.push(alquiler6);
        this.listaDeStockDeAlquileres.push(alquiler7);
        this.listaDeStockDeAlquileres.push(alquiler8);
        this.listaDeStockDeAlquileres.push(alquiler9);
        this.listaDeStockDeAlquileres.push(alquiler10);
        this.listaDeInstancias.push(instancia1);
        this.listaDeInstancias.push(instancia2);
        this.listaDeInstancias.push(instancia3);
        this.listaDeInstancias.push(instancia4);
        this.listaDeInstancias.push(instancia5);
        this.listaDeInstancias.push(instancia6);
        this.listaDeInstancias.push(instancia7);
        this.listaDeInstancias.push(instancia8);
    }

    //Usuarios
    agregarUsuarios(usuario) {
        this.listaDeUsuarios.push(usuario);
    }

    darUsuarios() {
        return this.listaDeUsuarios;
    }

    darAdmins() {
        return this.listaDeAdmins;
    }



    ingresoUsuarios(user, pass) {
        let ok = false;
        let lista = this.darUsuarios();
        for (let i = 0; i < lista.length && !ok; i++) {
            let usuarioActual = lista[i].nombreDeUsuario;
            let passActual = lista[i].contraseña;
            let estadoActual = lista[i].estado;
            if (usuarioActual.toLowerCase() === user.toLowerCase() && pass === passActual && estadoActual === "aprobado") {
                this.personaLogueada = lista[i];
                ok = true;
            }
        }
        return ok;
    }

    existeUsuario(user) {
        let ok = false;
        let lista = this.darUsuarios();
        for (let i = 0; i < lista.length && !ok; i++) {
            let usuarioActual = lista[i].nombreDeUsuario;
            if (usuarioActual === user) {
                ok = true;
            }
        }
        return ok;
    }

    ingresoAdmins(user, pass) {
        let ok = false;
        let lista = this.darAdmins();
        for (let i = 0; i < lista.length && !ok; i++) {
            let usuarioActual = lista[i].nombreDeUsuario;
            let passActual = lista[i].contraseña;
            if (usuarioActual === user && pass === passActual) {
                this.personaLogueada = lista[i];
                ok = true;
            }
        }
        return ok;
    }

    logout() {
        this.personaLogueada = null;

    }
    obtenerUsuariosAprobados() {
        let listaResp = [];
        for (let i = 0; i < this.listaDeUsuarios.length; i++) {
            let objUsuario = this.listaDeUsuarios[i];
            if (objUsuario.estado === "aprobado") {
                listaResp.push(objUsuario);
            }
        }
        return listaResp;
    }
    obtenerUsuariosPendientes() {
        let listaResp = [];
        for (let i = 0; i < this.listaDeUsuarios.length; i++) {
            let objUsuario = this.listaDeUsuarios[i];
            if (objUsuario.estado === "pendiente") {
                listaResp.push(objUsuario);
            }
        }
        return listaResp;
    }
    obtenerUsuariosBloqueados() {
        let listaResp = [];
        for (let i = 0; i < this.listaDeUsuarios.length; i++) {
            let objUsuario = this.listaDeUsuarios[i];
            if (objUsuario.estado === "bloqueados") {
                listaResp.push(objUsuario);
            }
        }
        return listaResp;
    }
    activarUsuario(idUsuario) {
        for (let i = 0; i < this.listaDeUsuarios.length; i++) {
            let objUsuario = this.listaDeUsuarios[i];
            if (objUsuario.id === idUsuario) {
                objUsuario.estado = "aprobado";
            }
        }
    }

    desactivarUsuario(idUsuario) {
        for (let i = 0; i < this.listaDeUsuarios.length; i++) {
            let objUsuario = this.listaDeUsuarios[i];
            if (objUsuario.id === idUsuario) {
                objUsuario.estado = "bloqueado";
            }
        }
    }
    //alquileres
    agregarAlquileres(alquileres) {
        this.listaDeStockDeAlquileres.push(alquileres);
    }

    darAlquileres() {
        return this.listaDeStockDeAlquileres;
    }

    alquilarUnaMaquina(nombreInstancia) {
        let nuevoAlquiler;
        let lista = this.darAlquileres();
        for (let i = 0; i < lista.length; i++) {
            let alquilerActual = lista[i];
            let nombreAlquilerActual = alquilerActual.tipoDeInstancia;
            if (nombreAlquilerActual === nombreInstancia) {
                if (alquilerActual.instancia.stock >= 1) {
                    if (nombreInstancia === "c7.small") {
                        nuevoAlquiler = new Alquiler("c7.small", this.personaLogueada, this.listaDeInstancias[0], 20, 20, 2.5, 1)
                        nuevoAlquiler.instancia.stock--;
                        nuevoAlquiler.instancia.costoTotalPorInstancia += 20;
                        nuevoAlquiler.vecesSeInicio = 1;
                        nuevoAlquiler.estadoAlqDesq = "Alquilado";
                        nuevoAlquiler.estado = "encendido";
                        nuevoAlquiler.instancia.cantidadAlquiladaTotalInstancia++;
                        nuevoAlquiler.instancia = this.listaDeInstancias[0];
                        this.listaDeStockDeAlquileres.push(nuevoAlquiler);
                    } else if (nombreInstancia === "c7.medium") {
                        nuevoAlquiler = new Alquiler("c7.medium", this.personaLogueada, this.listaDeInstancias[1], 30, 30, 3.5, 1)
                        nuevoAlquiler.instancia.stock--;
                        nuevoAlquiler.instancia.costoTotalPorInstancia += 30;
                        nuevoAlquiler.vecesSeInicio = 1;
                        nuevoAlquiler.estadoAlqDesq = "Alquilado";
                        nuevoAlquiler.estado = "encendido";
                        nuevoAlquiler.instancia.cantidadAlquiladaTotalInstancia++;
                        nuevoAlquiler.instancia = this.listaDeInstancias[1];
                        this.listaDeStockDeAlquileres.push(nuevoAlquiler);
                    } else if (nombreInstancia === "c7.large") {
                        nuevoAlquiler = new Alquiler("c7.large", this.personaLogueada, this.listaDeInstancias[2], 50, 50, 6, 1)
                        nuevoAlquiler.instancia.stock--;
                        nuevoAlquiler.instancia.costoTotalPorInstancia += 50;
                        nuevoAlquiler.vecesSeInicio = 1;
                        nuevoAlquiler.estadoAlqDesq = "Alquilado";
                        nuevoAlquiler.estado = "encendido";
                        nuevoAlquiler.instancia.cantidadAlquiladaTotalInstancia++;
                        nuevoAlquiler.instancia = this.listaDeInstancias[2];
                        this.listaDeStockDeAlquileres.push(nuevoAlquiler);
                    } else if (nombreInstancia === "r7.small") {
                        nuevoAlquiler = new Alquiler("r7.small", this.personaLogueada, this.listaDeInstancias[3], 35, 35, 45, 1)
                        nuevoAlquiler.instancia.stock--;
                        nuevoAlquiler.instancia.costoTotalPorInstancia += 35;
                        nuevoAlquiler.vecesSeInicio = 1;
                        nuevoAlquiler.estadoAlqDesq = "Alquilado";
                        nuevoAlquiler.estado = "encendido";
                        nuevoAlquiler.instancia.cantidadAlquiladaTotalInstancia++;
                        nuevoAlquiler.instancia = this.listaDeInstancias[3];
                        this.listaDeStockDeAlquileres.push(nuevoAlquiler);
                    } else if (nombreInstancia === "r7.medium") {
                        nuevoAlquiler = new Alquiler("r7.medium", this.personaLogueada, this.listaDeInstancias[4], 50, 50, 6.5, 1)
                        nuevoAlquiler.instancia.stock--;
                        nuevoAlquiler.instancia.costoTotalPorInstancia += 50;
                        nuevoAlquiler.vecesSeInicio = 1;
                        nuevoAlquiler.estadoAlqDesq = "Alquilado";
                        nuevoAlquiler.estado = "encendido";
                        nuevoAlquiler.instancia.cantidadAlquiladaTotalInstancia++;
                        nuevoAlquiler.instancia = this.listaDeInstancias[4];
                        this.listaDeStockDeAlquileres.push(nuevoAlquiler);
                    } else if (nombreInstancia === "r7.large") {
                        nuevoAlquiler = new Alquiler("r7.large", this.personaLogueada, this.listaDeInstancias[5], 60, 60, 7, 1)
                        nuevoAlquiler.instancia.stock--;
                        nuevoAlquiler.instancia.costoTotalPorInstancia += 60;
                        nuevoAlquiler.vecesSeInicio = 1;
                        nuevoAlquiler.estadoAlqDesq = "Alquilado";
                        nuevoAlquiler.estado = "encendido";
                        nuevoAlquiler.instancia.cantidadAlquiladaTotalInstancia++;
                        nuevoAlquiler.instancia = this.listaDeInstancias[5];
                        this.listaDeStockDeAlquileres.push(nuevoAlquiler);
                    } else if (nombreInstancia === "i7.medium") {
                        nuevoAlquiler = new Alquiler("i7.medium", this.personaLogueada, this.listaDeInstancias[6], 30, 30, 3.5, 1)
                        nuevoAlquiler.instancia.stock--;
                        nuevoAlquiler.instancia.costoTotalPorInstancia += 30;
                        nuevoAlquiler.vecesSeInicio = 1;
                        nuevoAlquiler.estadoAlqDesq = "Alquilado";
                        nuevoAlquiler.estado = "encendido";
                        nuevoAlquiler.instancia.cantidadAlquiladaTotalInstancia++;
                        nuevoAlquiler.instancia = this.listaDeInstancias[6];
                        this.listaDeStockDeAlquileres.push(nuevoAlquiler);
                    } else if (nombreInstancia === "i7.large") {
                        nuevoAlquiler = new Alquiler("i7.large", this.personaLogueada, this.listaDeInstancias[7], 50, 50, 6.5, 1)
                        nuevoAlquiler.instancia.stock--;
                        nuevoAlquiler.instancia.costoTotalPorInstancia += 50;
                        nuevoAlquiler.vecesSeInicio = 1;
                        nuevoAlquiler.estadoAlqDesq = "Alquilado";
                        nuevoAlquiler.estado = "encendido";
                        nuevoAlquiler.instancia.cantidadAlquiladaTotalInstancia++;
                        nuevoAlquiler.instancia = this.listaDeInstancias[7];
                        this.listaDeStockDeAlquileres.push(nuevoAlquiler);
                    }
                    alert("Usted ha alquilado " + nuevoAlquiler.tipoDeInstancia);
                    break;
                } else {
                    alert("Lo sentimos no tenemos más stock");
                    break;
                }
            }
        }
    }

    obtenerTodasLasInstancias() {
        let listaResp = [];
        for (let i = 0; i < this.listaDeStockDeAlquileres.length; i++) {
            let objAlquilados = this.listaDeStockDeAlquileres[i];
            listaResp.push(objAlquilados);

        }
        return listaResp;
    }
    obtenerC7SMALL() {
        let listaResp = [];
        for (let i = 0; i < this.listaDeStockDeAlquileres.length; i++) {
            let objAlquilados = this.listaDeStockDeAlquileres[i];
            if (objAlquilados.tipoDeInstancia === "c7.small") {
                listaResp.push(objAlquilados);
            }

        }
        return listaResp;
    }
    obtenerC7MEDIUM() {
        let listaResp = [];
        for (let i = 0; i < this.listaDeStockDeAlquileres.length; i++) {
            let objAlquilados = this.listaDeStockDeAlquileres[i];
            if (objAlquilados.tipoDeInstancia === "c7.medium") {
                listaResp.push(objAlquilados);
            }

        }
        return listaResp;
    }
    obtenerC7LARGE() {
        let listaResp = [];
        for (let i = 0; i < this.listaDeStockDeAlquileres.length; i++) {
            let objAlquilados = this.listaDeStockDeAlquileres[i];
            if (objAlquilados.tipoDeInstancia === "c7.large") {
                listaResp.push(objAlquilados);
            }

        }
        return listaResp;
    }
    obtenerR7SMALL() {
        let listaResp = [];
        for (let i = 0; i < this.listaDeStockDeAlquileres.length; i++) {
            let objAlquilados = this.listaDeStockDeAlquileres[i];
            if (objAlquilados.tipoDeInstancia === "r7.small") {
                listaResp.push(objAlquilados);
            }

        }
        return listaResp;
    }
    obtenerR7MEDIUM() {
        let listaResp = [];
        for (let i = 0; i < this.listaDeStockDeAlquileres.length; i++) {
            let objAlquilados = this.listaDeStockDeAlquileres[i];
            if (objAlquilados.tipoDeInstancia === "r7.medium") {
                listaResp.push(objAlquilados);
            }

        }
        return listaResp;
    }
    obtenerR7LARGE() {
        let listaResp = [];
        for (let i = 0; i < this.listaDeStockDeAlquileres.length; i++) {
            let objAlquilados = this.listaDeStockDeAlquileres[i];
            if (objAlquilados.tipoDeInstancia === "r7.large") {
                listaResp.push(objAlquilados);
            }

        }
        return listaResp;
    }
    obtenerI7MEDIUM() {
        let listaResp = [];
        for (let i = 0; i < this.listaDeStockDeAlquileres.length; i++) {
            let objAlquilados = this.listaDeStockDeAlquileres[i];
            if (objAlquilados.tipoDeInstancia === "i7.medium") {
                listaResp.push(objAlquilados);
            }

        }
        return listaResp;
    }
    obtenerI7LARGE() {
        let listaResp = [];
        for (let i = 0; i < this.listaDeStockDeAlquileres.length; i++) {
            let objAlquilados = this.listaDeStockDeAlquileres[i];
            if (objAlquilados.tipoDeInstancia === "i7.large") {
                listaResp.push(objAlquilados);
            }

        }
        return listaResp;
    }
    apagarMaquina(id) {
        for (let i = 0; i < this.listaDeStockDeAlquileres.length; i++) {
            let objUsuario = this.listaDeStockDeAlquileres[i];
            if (objUsuario.numeroID === id) {
                objUsuario.estado = "apagado";
            }
        }
    }

    encenderMaquina(id) {
        for (let i = 0; i < this.listaDeStockDeAlquileres.length; i++) {
            let objUsuario = this.listaDeStockDeAlquileres[i];
            if (objUsuario.numeroID === id) {
                objUsuario.estado = "encendido";
                objUsuario.vecesSeInicio++;
            }
        }
    }


    aumentoStockAlquileres(select) {
        let listainstancias = this.listaDeInstancias;
        switch (select) {
            case "c7.small":
                listainstancias[0].stock++;

                break;
            case "c7.medium":
                listainstancias[1].stock++;

                break;
            case "c7.large":
                listainstancias[2].stock++;

                break;
            case "r7.small":
                listainstancias[3].stock++;

                break;
            case "r7.medium":
                listainstancias[4].stock++;

                break;
            case "r7.large":
                listainstancias[5].stock++;

                break;
            case "i7.medium":
                listainstancias[6].stock++;

                break;
            case "i7.large":
                listainstancias[7].stock++;

                break;
        }

    }

    DecrementoStockAlquileres(select) {
        let listainstancias = this.listaDeInstancias;
        switch (select) {
            case "c7.small":
                if (listainstancias[0].stock > listainstancias[0].cantidadAlquiladaTotalInstancia) {

                    listainstancias[0].stock--;
                }


            case "c7.medium":
                if (listainstancias[1].stock > listainstancias[1].cantidadAlquiladaTotalInstancia) {
                    listainstancias[1].stock--;
                }
            case "c7.large":
                if (listainstancias[2].stock > listainstancias[2].cantidadAlquiladaTotalInstancia) {
                    listainstancias[2].stock--;
                    break;
                }
            case "r7.small":
                if (listainstancias[3].stock > listainstancias[3].cantidadAlquiladaTotalInstancia) {
                    listainstancias[3].stock--;
                    break;
                }
            case "r7.medium":
                if (listainstancias[4].stock > listainstancias[4].cantidadAlquiladaTotalInstancia) {
                    listainstancias[4].stock--;
                    break;
                }
            case "r7.large":
                if (listainstancias[5].stock > listainstancias[5].cantidadAlquiladaTotalInstancia) {
                    listainstancias[5].stock--;
                    break;
                }
            case "i7.medium":
                if (listainstancias[6].stock > listainstancias[6].cantidadAlquiladaTotalInstancia) {
                    listainstancias[6].stock--;
                    break;
                }
            case "i7.large":
                if (listainstancias[7].stock > listainstancias[7].cantidadAlquiladaTotalInstancia) {
                    listainstancias[7].stock--;
                    break;
                }
        }
    }
    removerAlquiler() {
        let lista = this.listaDeStockDeAlquileres;
        for (let i = 0; i < lista.length; i++) {
            let alquilerActual = lista[i];
            let idAlquilerActual = alquilerActual.numeroID;
            if (idAlquilerActual > 8) {
                lista.splice(i, 1);
            }
        }
        return this.listaDeStockDeAlquileres;
    }

    retornarAlquiladosPorUsuarioBloqueado(id) {
        let lista = this.darAlquileres();
        for (let i = 0; i < lista.length; i++) {
            let alquilerActual = lista[i];
            if (alquilerActual.estadoAlqDesq === "Alquilado" && alquilerActual.usuario.id === id) {
                alquilerActual.estado = "apagado";
                alquilerActual.estadoAlqDesq = "Desalquilado";
                alquilerActual.usuario = null;
                alquilerActual.estado = "apagado";
                alquilerActual.estadoAlqDesq = "Desalquilado";
                alquilerActual.instancia.stock += alquilerActual.cantidadAlquiladaPorAlquiler;
                alquilerActual.instancia.cantidadAlquiladaTotalInstancia = alquilerActual.instancia.cantidadAlquiladaTotalInstancia - alquilerActual.cantidadAlquiladaPorAlquiler;
                alquilerActual.cantidadAlquiladaPorAlquiler = 0;
                alquilerActual.instancia.costoTotalPorInstancia = alquilerActual.instancia.costoTotalPorInstancia - alquilerActual.costoTotal;
                alquilerActual.costoTotal = 0;
                alquilerActual.vecesSeInicio = 0;

            }
        }

        return lista;
    }


}



let siguienteIDAdmin = 1;
class Admin {
    constructor(unNombreDeUsuario, unaContraseña) {
        this.nombreDeUsuario = unNombreDeUsuario;
        this.contraseña = unaContraseña;
        this.tipo = "admin";
        this.id = siguienteIDAdmin++;
    }
    toString() {
        return this.nombre + " " + this.id;
    }
}

let siguienteIDUsuario = 6;
class Usuario {
    constructor(unNombre, unApellido, unNombreDeUsuario, unaContraseña, unNumeroDeTarjetaDeCredito, unCvc) {
        this.nombre = unNombre;
        this.apellido = unApellido;
        this.nombreDeUsuario = unNombreDeUsuario;
        this.contraseña = unaContraseña;
        this.numeroDeTarjetaDeCredito = unNumeroDeTarjetaDeCredito;
        this.cvc = unCvc;
        this.id = siguienteIDUsuario++;
        this.estado = "pendiente";
    }
    toString() {
        return this.nombre + " " + this.id;
    }
}

let siguienteIDAlquiler = 1;
let textosiguienteIdAlquiler = ":INSTANCE_ID_";

class Alquiler {
    constructor(unTipoInstancia, unUsuario, unaInstancia, unCostoTotal, unCostoPorAlquiler, unCostoPorEncendido, unaCantidadAlquiladaPorAlquiler) {
        this.numeroID = siguienteIDAlquiler++;
        this.id = textosiguienteIdAlquiler + this.numeroID;
        this.tipoDeInstancia = unTipoInstancia;
        this.estado = "apagado";
        this.usuario = unUsuario;
        this.instancia = unaInstancia; // Relación con la instancia
        this.costoTotal = unCostoTotal;
        this.costoPorAlquiler = unCostoPorAlquiler;
        this.costoPorEncendido = unCostoPorEncendido;
        this.cantidadAlquiladaPorAlquiler = unaCantidadAlquiladaPorAlquiler;
        this.estadoAlqDesq = "Desalquilado";
        this.vecesSeInicio = 0;
    }
    toString() {
        return this.tipoDeInstancia + " " + this.id;
    }
}

class Instancia {
    constructor(unaCantidadAlquilada) {
        this.cantidadAlquiladaTotalInstancia = unaCantidadAlquilada;
        this.costoTotalPorInstancia = 0;
        this.stock = 0;
    }

}