
const listaUsuarios = document.getElementById("listaUsuarios");

function getDatos () {
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {
            if (!response.ok) throw new Error('Error en la solicitud');
            return response.json();
        })
        .then((data) => {
            console.log(data);
            data.forEach(user => {
                const edad = Math.floor(Math.random() * 85);
                const img = `${user.id}.jpeg`;
                const persona = {...user,edad,img};
                console.log(persona);


                listaUsuarios.insertAdjacentHTML("beforeend",
                    `<li class="user">
                        <div class="sector1">
                        <div class ="principal-data">
                        <p><b>Nombre:</b> ${persona.name}</p>
                        <p><b>Edad:</b> ${persona.edad}</p>
                        <p><b>Username:</b> ${persona.username}</p>
                        <p><b>Telefono:</b> ${persona.phone}</p>
                        <p><b>Email:</b> ${persona.email}</p>
                        </div>
                        <img src=./assets/img/${persona.img}>
                        </div>
                        <p><b>Compañia:</b> ${persona.company.name}</p>
                        <p><b>Direccion:</b> ${persona.address.street}, ${persona.address.suite}, ${persona.address.city}</p>
                    </li>`)
            });
        })
        .catch((error) => {
            console.error("Error: No se pudo procesar la solicitud")
        });
}

getDatos();

    

