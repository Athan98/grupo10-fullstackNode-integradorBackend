document.addEventListener("DOMContentLoaded", () => {
    const bodyTablaPosteos = document.querySelector("#body-tabla-posteos");
    const formCrearPosteo = document.querySelector("#form-crear-posteo");

    // Funcion para obtener los datos de la API usando Axios
    const fetchPosteos = async () => {
        try {
            const respuesta = await axios.get(`https://dev-user.alwaysdata.net/peliculas`);
            console.log(respuesta.data);
            const peliculas = respuesta.data;

            // Limpiar la tabla antes de agregar los nuevos datos
            bodyTablaPosteos.innerHTML = "";

            // Iterar sobre los datos y agregar los nuevos datos
            peliculas.forEach(pelicula => {
                console.log('Datos de la película:', pelicula); // Verificar todos los datos de la película
                
                // Crear una nueva fila
                const fila = document.createElement("tr");

                // Crear celdas para el titulo, contenido y acciones
                const celdaPelicula = document.createElement("td");
                const celdaDescripcion = document.createElement("td");
                const celdaGenero = document.createElement("td");
                const celdaDuracion = document.createElement("td");
                const celdaDirector = document.createElement("td");
                const celdaFecha = document.createElement("td");
                const celdaAcciones = document.createElement("td");

                // Asignar el contenido de las celdas
                celdaPelicula.textContent = pelicula.titulo;
                celdaDescripcion.textContent = pelicula.descripcion;
                celdaGenero.textContent = pelicula.genero;
                celdaDuracion.textContent = pelicula.duracion;
                celdaDirector.textContent = pelicula.director;
                if (pelicula.fecha_estreno) {
                    const fechaFormateada = new Date(pelicula.fecha_estreno).toLocaleDateString('es-AR');
                    celdaFecha.textContent = fechaFormateada !== "Invalid Date" ? fechaFormateada : pelicula.fecha_estreno;
                } else {
                    celdaFecha.textContent = "Fecha no disponible";
                }

                // Crear botones de eliminar y editar
                const botonEliminar = document.createElement("button");
                botonEliminar.textContent = "Eliminar";
                botonEliminar.classList.add("button-eliminar"); // Agrega la clase CSS al botón
                botonEliminar.addEventListener("click", () => {
                    borrarPelicula(pelicula.id);
                });

                const botonEditar = document.createElement("button");
                botonEditar.textContent = "Editar";
                botonEditar.classList.add("button-editar"); // Agrega la clase CSS al botón
                botonEditar.addEventListener("click", () => {
                    window.location.href = `edit.html?id=${pelicula.id}`;
                });

                // Agregar los botones a la celda de acciones
                celdaAcciones.appendChild(botonEliminar);
                celdaAcciones.appendChild(botonEditar);

                // Agregar las celdas a la fila
                fila.appendChild(celdaPelicula);
                fila.appendChild(celdaDescripcion);
                fila.appendChild(celdaGenero);
                fila.appendChild(celdaDuracion);
                fila.appendChild(celdaDirector);
                fila.appendChild(celdaFecha);
                fila.appendChild(celdaAcciones);

                // Agregar la fila al cuerpo de la tabla
                bodyTablaPosteos.appendChild(fila);
            });
        } catch (error) {
            console.error("Error para cargar películas:", error);
        }
    };

    // Funcion para borrar una pelicula
    const borrarPelicula = async (id) => {
        try {
            await axios.delete(`https://dev-user.alwaysdata.net/peliculas/${id}`);
            fetchPosteos();
        } catch (error) {
            console.error("Error al intentar eliminar la película:", error);
        }
    };

    // Funcion para crear un posteo
    formCrearPosteo.addEventListener("submit", async function(evento) {
        evento.preventDefault();
        const nuevoPosteo = {
            titulo: document.querySelector("#nuevo-titulo").value,
            descripcion: document.querySelector("#nuevo-descripcion").value,
            genero: document.querySelector("#nuevo-genero").value,
            duracion: document.querySelector("#nuevo-duracion").value,
            director: document.querySelector("#nuevo-director").value,
            fecha_estreno: document.querySelector("#nuevo-fecha").value
        };

        try {
            await axios.post(`https://dev-user.alwaysdata.net/peliculas`, nuevoPosteo);
            formCrearPosteo.reset();
            fetchPosteos();
        } catch (error) {
            console.error("Error al crear película:", error);
        }
    });

    // Llamar a la funcion para obtener y mostrar los posteos al cargar la pagina
    fetchPosteos();
});
