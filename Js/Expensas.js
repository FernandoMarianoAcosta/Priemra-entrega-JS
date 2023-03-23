function Encargado(literal) {

        this.nombre = literal.nombre;
        this.categoria = literal.categoria;
        this.periodo = literal.periodo
        this.haberes = literal.haberes
        this.aportes = literal.aportes
        this.mostrar = function () { console.log(`${this.nombre} "antiguedad" ${this.categoria}`) }
}

const Encargado_Pepe = new Encargado ({nombre: "Pepe lepou", categoria: 3, periodo:2023, haberes:180.000,aportes:1000});



for (const empleado in Encargado_Pepe){

    console.log(Encargado_Pepe[empleado]);
};

class Gastos {
    constructor (tipo,servicio1,servicio2,servicio3,valor1,valor2,valor3,){
        this.tipo = tipo;
        this.servicio1 = servicio1;
        this.servicio2 = servicio2;
        this.servicio3 = servicio3;

        
        this.valor1 = parseFloat(valor1);
        this.valor2 = parseFloat(valor2);
        this.valor3 = parseFloat(valor3);
        
        
        
    }

    concatenar(){

        console.log(`${this.servicio1} = ${this.valor1}, ${this.servicio2} = ${this.valor2}, ${this.servicio3} = ${this.valor3}`);

    }

    sumaTotal(){
        let total = parseFloat(this.valor1 + this.valor2 + this.valor3) ;
        console.log(`El total a pagar de ${this.tipo} es ${total} $`) ;
    }
}

const servicios_publicos = new Gastos("luz_yGas","Edesur_clienteA", "edesur_clienteB","Metrogas_clienteA",100,300,400);
const AbonosYservicios = new Gastos("AscensorYFumigador","Ascensor", "Fumigador", "N/S ", "100.4", "20.34","0" );


servicios_publicos.concatenar();
servicios_publicos.sumaTotal();


AbonosYservicios.concatenar();
AbonosYservicios.sumaTotal();


function total_expensas(){
    let pagar1 =0;
    let pagar2 =0;
    let pagar3 =0;
    let pagar4 =0;
    let pagar5 =0;
    let pagar6 =0;
    let todas =0;
    
    pagar1 = servicios_publicos.valor1;
    pagar2 = servicios_publicos.valor2;
    pagar3 = servicios_publicos.valor3
    pagar4 = AbonosYservicios.valor1;
    pagar5 = AbonosYservicios.valor2;
    pagar6 =AbonosYservicios.valor3;
    todas = pagar1 + pagar2 + pagar3 + pagar4 + pagar5 + pagar6;



    console.log(`total de expensas a pagar es ${todas}`);

}

total_expensas();


const edificioA = [servicios_publicos,AbonosYservicios,Encargado_Pepe];

for (const edificio of edificioA){

    console.log(edificio);
};




