


// funcion que se ocupa de validar que hayan llenado todos los datos
const obtenerValor = (tipo, marca, anio, precio) =>{
    // verificamos de que hayan llenado todos los campos
    if(tipo != ""){
        if(marca != ""){
            if(anio <= 0){
                var resultadoDiv = document.getElementById("resultado");
                resultadoDiv.innerHTML = "Año del vehiculo inválido.";
            }else if(anio != ""){
                // llamamos a la funcion mostrar mandandole como dato el valor del dolar blue en el dia de la fecha
                fetch("https://dolarapi.com/v1/dolares/blue")
                    .then(response => response.json())
                    .then(data => {
                        mostrar(data.venta, tipo, marca, anio, precio)})
            }else{
                var resultadoDiv = document.getElementById("resultado");
                resultadoDiv.innerHTML = "Año del vehiculo no especificado.";
            }
        }else{
            var resultadoDiv = document.getElementById("resultado");
            resultadoDiv.innerHTML = "Marca del vehiculo no especificado.";
        }
    }else{
        var resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = "Tipo del vehiculo no especificado.";
    }
}
//funcion para mostrar el precio del seguro en pantalla con su valor en pesos y su equivalente en dolares
const mostrar = (dolar, tipo, marca, anio, precio) =>{
    valor = parseInt(precio / anio *24)
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "Un vehiculo de tipo " + tipo + " marca " + marca + " año " + anio + " paga un valor de AR$" + valor + " pesos argentinos por mes o su equivalente en dolar blue U$" + parseInt(valor/dolar);
}