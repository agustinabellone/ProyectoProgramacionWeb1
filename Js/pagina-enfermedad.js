/*FORMULARIO*/

//funcion para validar el si de los radio button
function check() {
    var fiebre = document.getElementsByName("campo8");
    var dolor = document.getElementsByName("campo9");
    var tos = document.getElementsByName("campo10");
    var garganta = document.getElementsByName("campo11");
    var respiracion = document.getElementsByName("campo12");
    contador = 0;
    //1fiebre
    for (i in fiebre) {
        if (fiebre[i].value == "SI" && fiebre[i].checked) {
            contador++;
        }
    }
    //2dolor de cabeza
    for (i in dolor) {
        if (dolor[i].value == "SI" && dolor[i].checked) {
            contador++;
        }
    }
    //3tos
    for (i in tos) {
        if (tos[i].value == "SI" && tos[i].checked) {
            contador++;
        }
    }
    //4garganta
    for (i in garganta) {
        if (garganta[i].value == "SI" && garganta[i].checked) {
            contador++;
        }
    }
    //5respiracion	
    for (i in respiracion) {
        if (respiracion[i].value == "SI" && respiracion[i].checked) {
            contador++;
        }
    }

    //contador de valores positivos:
    alert("Fueron registrados los siguientes síntomas de COVID-19 : " + contador);
    return true;
}
//funcion para validar los campos para que no esten vacios
function validar() {
    var nomYape = document.getElementById("nombreYapellido").value;
    var dni = document.getElementById("dni").value;
    var tel = document.getElementById("telefono").value;
    var expTelefono = /^([0-9]{4})+(-)+([0-9]{4})$/

    if (nomYape == "") {
        alert("Por favor ingrese el campo nombre y apellido es obligatorio!");
        return false;
    }
    if (dni == "") {
        alert("Por favor ingrese el campo dni es obligatorio!");
        return false;
    }
    if (tel == "" && (!(expTelefono.test(tel)))) {
        alert("El número de teléfono es obligatorio");
        return false;
    }
    //validacion radio butonque haya uno sellecionado:
    var fiebre = document.getElementsByName("campo8");
    var dolor = document.getElementsByName("campo9");
    var tos = document.getElementsByName("campo10");
    var garganta = document.getElementsByName("campo11");
    var respiracion = document.getElementsByName("campo12");
    var seleccionado = false;
    var seleccionado1 = false;
    var seleccionado2 = false;
    var seleccionado3 = false;
    var seleccionado4 = false;
    var seleccionado5 = false;

    //fiebre
    for (i in fiebre) {
        if (fiebre[i].checked) {
            seleccionado = true;
            break;
        }
    }
    if (!seleccionado) {
        alert("Por favor,debe selecccionar si tuvo fiebre");
        return false;
    }
    //dolor cabeza
    for (i in dolor) {
        if (dolor[i].checked) {
            seleccionado2 = true;
            break;
        }
    }
    if (!seleccionado2) {
        alert("Por favor,debe selecccionar si tuvo dolor de cabeza");
        return false;
    }

    // tos
    for (i in tos) {
        if (tos[i].checked) {
            seleccionado3 = true;
            break;
        }
    }
    if (!seleccionado3) {
        alert("Por favor,debe selecccionar si tuvo tos");
        return false;
    }

    //Dolor de garganta
    for (i in garganta) {
        if (garganta[i].checked) {
            seleccionado4 = true;
            break;
        }
    }
    if (!seleccionado4) {
        alert("Por favor,debe selecccionar si tuvo dolor de garganta");
        return false;
    }
    //respiracion
    for (i in respiracion) {
        if (respiracion[i].checked) {
            seleccionado5 = true;
            break;
        }
    }
    if (!seleccionado5) {
        alert("Por favor,debe selecccionar si tuvo dificultad para respirar");
        return false;
    }
    //validacion exitosa
    alert("Formulario enviado exitosamente!!");
    return true;
}


function cambiar() {
    //codigo para el campo de PAISES VISITADOS:
    var select = document.getElementsByName("ext");
    for (i in select) {
        if (select[i].value == "SI" && select[i].checked) {

            document.getElementById("paisesV").style.display = "block";
        }

        if (select[i].value == "NO" && select[i].checked) {

            document.getElementById("paisesV").style.display = "none";
        }
    }
    //para respira con dificultad abre nuevos input:
    var opciones = document.getElementsByName("campo12");
    for (i in opciones) {
        if (opciones[i].value == "SI" && opciones[i].checked) {

            document.getElementById("dire").style.display = "block";
        }
        if (opciones[i].value == "NO" && opciones[i].checked) {

            document.getElementById("dire").style.display = "none";
        }

    }
}


