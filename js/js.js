const valordematricula = 900000
let creditos, descuento, totalm;

function leerdatos() {
    creditos = Number(prompt("ingrese cantidad de creditos"))

}
leerdatos()
console.log(calculadora(creditos))
function calculadora(creditos) {
    if (creditos <= 6) {
        descuento = valordematricula * 0.5;
    }
    else if (creditos > 6 && creditos <= 10) {
        descuento = valordematricula * 0.25
    }
    else if (creditos > 10) {
        descuento = 0;
    } else {
        alert("opcion no valida")
    }
    totalm = valordematricula - descuento
    return totalm
}
console.log(totalm)
alert(totalm)
