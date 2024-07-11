document.addEventListener("DOMContentLoaded", () => {

    //Obtener el form y el boton de guardar
    const formulario = document.querySelector("#form-editar-posteo");
    const botonGuardar = document.querySelector("#btnGuardar");

    //Obtener los parametros de la URL
    const parametrosURL = new URLSearchParams(window.location.search);

    //Obtener el ID de la pelicula a editar
    const idPelicula = parametrosURL.get("id");

    //Funcion para obtener los datos de la pelicula por su ID 
    const fetchPelicula = async (id) => {
        try {
            //Guardamos la pelicula en res
            const res = await axios.get(`https://dev-user.alwaysdata.net/peliculas/${id}`);
            const pelicula = res.data;

            //Llenamos los inputs con los datos de la pelicula obtenida
            document.querySelector("#nuevo-titulo").value = pelicula.titulo;
            document.querySelector("#nuevo-descripcion").value = pelicula.descripcion;
            document.querySelector("#nuevo-genero").value = pelicula.genero;
            document.querySelector("#nuevo-duracion").value = pelicula.duracion;
            document.querySelector("#nuevo-director").value = pelicula.director;
            document.querySelector("#nuevo-fecha").value = pelicula.fecha_estreno;

        } catch (error) {
            console.error("Error al traer los datos de la Película", error);
        }
    };

    //Llamar a la funcion para obtener el posteo
    if (idPelicula) {
        fetchPelicula(idPelicula);
    }

    //Funcion para actualizar la pelicula
    formulario.addEventListener("submit", async (e) => {
        e.preventDefault();

        const peliculaActualizada = {
            titulo: document.querySelector("#nuevo-titulo").value,
            descripcion: document.querySelector("#nuevo-descripcion").value,
            genero: document.querySelector("#nuevo-genero").value,
            duracion: document.querySelector("#nuevo-duracion").value,
            director: document.querySelector("#nuevo-director").value,
            fecha_estreno: document.querySelector("#nuevo-fecha").value,

        }

        try {
            await axios.put(`https://dev-user.alwaysdata.net/peliculas/${idPelicula}`, peliculaActualizada);
            alert("Película actualizada correctamente");

            //Redirigimos al index.html una vez se actualiza la pelicula
            window.location.href = "index.html";
        } catch (error) {
            console.error("Error al actualizar la Película", error);
        }
    });

});