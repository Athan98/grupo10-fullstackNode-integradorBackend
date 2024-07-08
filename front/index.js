document.addEventListener("DOMContentLoaded",()=>{

  const bodyTablaPosteos = document.querySelector("#body-tabla-posteos")

  const formCrearPosteo = document.querySelector("#form-crear-posteo")

 /* funcion para obtener los datos de la API usando Axios */
const fetchPosteos = async ()=>{
    try {
        const respuesta = await axios.get (`http://localhost:3030/peliculas`)
        console.log(respuesta.data);
        const posteos = respuesta.data
    
    /*     limpiar la tabla antes de agregar los nuevos datos */
    bodyTablaPosteos.innerHTML = ""
    
    // interar sobre los datos y agregar los nuevos datos
    posteos.forEach(posteo=>{
    /* crear una nueva fila */
    const fila = document.createElement("tr")
    // crear celdas para el titulo , contenido y acciones
    const celdaTitulo = document.createElement ("td")
    const celdaContenido = document.createElement ("td")
    const celdaAcciones = document.createElement ("td")
    



    // ------------ asignar el contenido de las celdas --------------
    celdaTitulo.textContent = posteo.titulo
    celdaContenido.textContent = posteo.contenido
    




    // crear boton de eliminar
    const botonEliminar = document.createElement("button")
    botonEliminar.textContent = "Eliminar"
    botonEliminar.addEventListener("click", ()=>{
        borrarPosteo(posteo.id)
    })
    
    
    // crear boton para editar
    const botonEditar = document.createElement("button")
    botonEditar.textContent = "Editar"
    botonEditar.addEventListener("click",()=>{
    //redirigir a la pagina de edicion
    window.location.href= `edit.html?id=${posteo.id}`
    })






    // agregar los botones a la celda de acciones
    celdaAcciones.appendChild(botonEliminar)
    celdaAcciones.appendChild(botonEditar)
    
    // agregar las celdas a la fila
    fila.appendChild(celdaTitulo)
    fila.appendChild(celdaContenido)
    fila.appendChild(celdaAcciones)
    // agregar la fila al cuerpo de la tabla
    bodyTablaPosteos.appendChild(fila)
    })
    
    } catch (error) {
        console.error("error para cargar posteos :",error)
    }
    }


    
    // funcnion para borrar un posteo
    
    const borrarPosteo = async (id)=>{
        try {
            await axios.delete (`http://localhost:3030/peliculas/${id}`);
            fetchPosteos()
        } catch (error) {
            console.error("error para borrar posteos :",error)
        }
        }

        formCrearPosteo.addEventListener("submit", async function(evento){
            evento.preventDefault();
            const nuevoPosteo = {
                titulo:document.querySelector("#titulo").value ,
                genero: document.querySelector("#genero").value ,
                director: document.querySelector("#director").value ,
                fechadeestreno: document.querySelector("#fecha").value ,
                duracion: document.querySelector("#duracion").value ,
                descripcion: document.querySelector("#descripcion").value ,
            };
            
            try {
                await axios.post(`http://localhost:3030/peliculas/`,nuevoPosteo)
                //limpiamos el formulario
                formCrearPosteo.reset()
                //recargar la lista de posteos despues de crear uno nuevo
                fetchPosteos();
            } catch (error) {
                console.error("error al crear posteo :",error)
            }


        })




        //llamar a la funcion para obtener y mostrar los posteos al cargar la pagina
        fetchPosteos();
    })