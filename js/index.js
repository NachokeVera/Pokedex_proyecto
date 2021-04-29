
tinymce.init({
    selector: '#description-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });

//se crea arreglo
const pokemones = [];
const cargarTabla = () =>{
  //1.- obtener referencia de la tabla
  let tbody = document.querySelector('#tabla-tbody');
  tbody.innerHTML = "";
  //2.- recorrer la lista de pokemones
  for(let i=0; i<pokemones.length; ++i){
    let p = pokemones[i]
    //3.- por cada pokemon generar una fira(tr)
    let tr = document.createElement("tr");
    //4.- por cada atributo voy a generar una celda (td)
    let tdNro = document.createElement("td");
    tdNro.innerText = (i+1);
    let tdNombre = document.createElement("td");
    tdNombre.innerText = p.nombre;
    let tdTipo = document.createElement("td");
    
    let icono = document.createElement("i");
    if(p.tipo == "Fuego"){
      icono.classList.add("fas","fa-fire","fa-2x","text-danger");
    }else if(p.tipo == "Electrico"){
      icono.classList.add("fas","fa-bolt","fa-2x","text-warning");
    }else if(p.tipo == "Planta"){
      icono.classList.add("fab","fa-canadian-maple-leaf","fa-2x","text-success");
    }else if(p.tipo == "Agua"){
      icono.classList.add("fas","fa-2x","fa-tint","text-primary");
    }else{
      icono.classList.add("fas","fa-2x","fa-star","text-info");
    }
    tdTipo.appendChild(icono);

    let tdDesc = document.createElement("td");
    tdDesc.innerHTML =p.descripcion;
    let tdAcciones = document.createElement("td");
  //5.- Agregar el tr a la tabla
  
  tr.appendChild(tdNro);
  tr.appendChild(tdNombre);
  tr.appendChild(tdTipo);
  tr.appendChild(tdDesc);
  tr.appendChild(tdAcciones);
  tbody.appendChild(tr);
}
  
  
  
  //6.- agregar el tr a la tabla
};
document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    //value es para obtener el valor de los input de texto  
    let nombre = document.querySelector("#nombre-txt").value;
    //esto lo saque de la pagina del tinymce, es para obtener lo escrito
    let descripcion = tinymce.get("description-txt").getContent();
    //checked indica si el radiobutton esta seleccionado
    let legendario = document.querySelector("#legendario-si").checked;
    //el tipo se obtiene igual a los input
    let tipo = document.querySelector("#tipo-select").value;
    
    
    //crear objeto
    let pokemon = {}
    pokemon.nombre = nombre;
    pokemon.descripcion = descripcion;
    pokemon.legendario = legendario;
    pokemon.tipo = tipo;
    pokemones.push(pokemon);// append en python
    cargarTabla();
    Swal.fire("Exito!","Pokemon registrado","success")

});