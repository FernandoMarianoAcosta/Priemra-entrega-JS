let servicio = prompt("Ingresa el servicio que  deseas buscar opciones: Electricista, Plomeria, Gasista, Cerrajero, Persianas, Fumigador, si no deseas ninguno ingresa ESC");

while (servicio != "ESC") {

    switch (servicio) {
        case "Electricista":
            alert("puedes ponerte en contacto con los siguientes electricistas : Osvaldo : 15-38-45 , Pepe :3433-222, Ricardo :4343-333");
            break;

        case "Plomeria":
            alert("puedes ponerte en contacto con los siguientes Plomeros : Sergio : 15-38-45 , Pepo :3433-222, Enrique :4343-333");
            break;
              
        case "Gasista":
            alert("puedes ponerte en contacto con los siguientes Gasistas : Osvaldo : 15-38-45 , Pepe :3433-222, Ricardo :4343-333");
            break;

        case "Cerrajero":
                alert("puedes ponerte en contacto con los siguientes Cerrajeros : Osvaldo : 15-38-45 , Pepe :3433-222, Ricardo :4343-333");
                break;

        case "Persianas":
            alert("puedes ponerte en contacto con los siguientes tecnicos en persianas : Osvaldo : 15-38-45 , Pepe :3433-222, Ricardo :4343-333");
            break;
        case "Fumigador":
            alert("puedes ponerte en contacto con los siguientes Fumigadores : Osvaldo : 15-38-45 , Pepe :3433-222, Ricardo :4343-333");
            break;
        default:
            alert("Verifica bien que servicios deseas contactar ya que el ingresado no nos figura en nuestros registros");
            break;
        


    }

    servicio = prompt("Ingresa el servicio que  deseas buscar opciones: Electricista, Plomeria, Gasista, Cerrajero, Persianas, Fumigador, si no deseas ninguno ingresa ESC");
}



let expensas = 0;
let total_expensas_calle1 = 10000;
let total_expensas_calle2 = 20000;
let total_expensas_calle3 = 30000;
let porcentaje = 0;
let pagare = 0;



let edificio = prompt("Ingrese la direccion de su edificio");
let piso = prompt("Ingrese el piso");
let departamento = prompt("Ingrese el numero de su departamento");
let m2 = parseInt(prompt("Ingrese los metros cuadrados de su departamento"));
let resultado_calle1 =0;
let resultado_calle2 =0;
let resultado_calle3 =0;




if ( edificio === "calle_2" ){

    if (m2 >= 100){

        resultado_calle2 = ((1.5 * total_expensas_calle2)/100);

        alert(`La expensas del edificio ${edificio} piso ${piso} departamento ${departamento} es de un total de ${resultado_calle2} $`);

    }else if (m2 <100){

        resultado_calle2 = ((1.3 * total_expensas_calle2)/100);

        alert(`La expensas del edificio ${edificio} piso ${piso} departamento ${departamento} es de un total de ${resultado_calle2} $`);


    }else{
        alert("Ha ingresado algun dato incorrecto por favor verificar");
    }
}else if ( edificio === "calle_3" )  {
    if (m2 >= 100){

        resultado_calle3 = ((1.5 * total_expensas_calle3)/100);

        alert(`La expensas del edificio ${edificio} piso ${piso} departamento ${departamento} es de un total de ${resultado_calle3} $`);

    }else if (m2 <100){

        resultado_calle3 = ((1.3 * total_expensas_calle3)/100);

        alert(`La expensas del edificio ${edificio} piso ${piso} departamento ${departamento} es de un total de ${resultado_calle3} $`);


    }else{
        alert("Ha ingresado algun dato incorrecto por favor verificar");
    }
}else if ( edificio === "calle_1" )  {
    if (m2 >= 100){

        resultado_calle1 = ((1.5 * total_expensas_calle1)/100);

        alert(`La expensas del edificio ${edificio} piso ${piso} departamento ${departamento} es de un total de ${resultado_calle1} $`);

    }else if (m2 <100){

        resultado_calle3 = ((1.3 * total_expensas_calle1)/100);

        alert(`La expensas del edificio ${edificio} piso ${piso} departamento ${departamento} es de un total de ${resultado_calle1} $`);


    }else{
        alert("Ha ingresado algun dato incorrecto por favor verificar");
    }
}







