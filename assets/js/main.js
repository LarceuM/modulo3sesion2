// Arreglo Simple
//let  colaboradores = [
//   "Juan",
//    "Pedro",
//    "Francisco"
//];
//console.log (colaboradores);

let colaboradores =  
[
    {
        rut:"12345678-9", 
        nombre:"juan Fica", 
        activo: true,
        salario_hora: 5550.65,
        horas_trab:38
    },
    {
        rut:"2323232-7", 
        nombre:"Andrea Perez", 
        activo: true,
        salario_hora: 5550.85,
        horas_trab:35
    },   
    {
        rut:"8567345-1", 
        nombre:"francisco Gonzalez", 
        activo: False,
        salario_hora: 4160.25,
        horas_trab:0
    }
];

//
for (let index = 0; dex < colaboradores.length; index++) 
    {  var colaborador = colaboradores[index];
        console.log(colaborador.nombre);
        console.log(colaborador["salario_hora"]);
        console.log("Activo",colaborador.activo );
        console.log("------------------------")
}

function consultar(longitud){
    fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=${longitud}`).then((resp) => {
        return resp.json()
    }).then((data) => {
        $("#tabla-post tbody").html("");
            for (const post of data) {
                $("#tabla-post tbody").append(`
                    <tr> 
                        <td class=fs-1> ${post.id}      </td>  
                        <td class=fs-4> ${post.title}   </td>  
                        <td class=fs-6> ${post.body}    </td>  
                    </tr>    
                `)
            }
        })
}

$(document).ready(function(){
    consultar(5);

    $(document).on("click","#btn-buscar",function(){
        let cantidad = $("#cantidad").val(); 
        console.log(cantidad);
        consultar(cantidad)
    })

});

    