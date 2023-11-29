const tableBody = document.getElementById('table-body')
const searchInput = document.getElementById('search')
const userForm = document.getElementById('user-form')
const submitBtn = userForm.querySelector('button[type=submit]')

userForm.addEventListener("submit", (evt) => {
    evt.preventDefault()

    const el = evt.target.elements
    const emailExists = usersArray.find((user) => {
        if (user.email === el.email.value) {
            return true
        }
    })

    if (emailExists && el.id.value !== emailExists.id) {
        Swal.fire({
            title: "El Correo ya existe",
            icon: 'error'
        })
        return
    }
    const id = el.id.value ? el.id.value : crypto.randomUUID();


    user = {
        fullname: el.fullname.value,
        age:calcularEdad(el.bornDate.value),
        email: el.email.value,
        password: el.password.value,
        bornDate: new Date(el.bornDate.value).getTime(),
        location: el.location.value,
        id: id,
        image: el.image.value,
        role: el.role.value
    }

    // pregunto si estoy editando
    if (el.id.value) {
        // editando
        const indice = usersArray.findIndex(usuario => {
            if (usuario.id === el.id.value) {
                return true
            }
        })

        usersArray[indice] = user;

        Swal.fire({
            title: 'Usuario Editado',
            text: 'El usuario se Edito correctamente',
            icon: 'success',
            timer: 1000
        })
    } else {
        // agregando un usuaruo nuevo   
        usersArray.push(user)

        Swal.fire({
            title: 'Usuario Agregado',
            text: 'El usuario se Agrego correctamente',
            icon: 'success',
            timer: 1000
        })
    }
    pintarUsuario(usersArray)
    actualizarLocalStorage()
    resetearFormulario();

})

function resetearFormulario() {
    userForm.reset();
    userForm.elements.password.disabled = false
    userForm.elements.password2.disabled = false
    submitBtn.classList.remove('btn-edit')
    submitBtn.innerHTML = "Agregar Usuario"
    userForm.fullname.focus()
}

searchInput.addEventListener('keyup', (evento) => {
    const inputValue = evento.target.value.toLowerCase()
    const usuariosFiltrados = usersArray.filter((usuario) => usuario.fullname.toLowerCase().includes(inputValue))
    pintarUsuario(usuariosFiltrados)
})

pintarUsuario(usersArray)

function pintarUsuario(arrayPintar) {
    tableBody.innerHTML = ''; arrayPintar.forEach((user, index) => {
        tableBody.innerHTML += `<tr class="table-body">
        <td class="table-image">
            <img src=${user.image}" alt=${user.fullname} avatar>
        </td>
        <td class="user-name">${user.fullname}</td>
        <td class="user-email">${user.email}</td>
        <td class="user-location">${user.location}</td>
        <td class="user-age">${user.age}</td>
        <td class="user-date">${formatDate(user.bornDate)}</td>
        <td class="user-age">${user.role}</td>
        <td> 
        <button class = "action-btn btn-danger" title="Borrar Usuario" onClick="borrarUsuario( '${user.id}','${user.fullname}' ) ">
        <i class="fa-solid fa-trash-can"></i>
        </button>
        <button class = "action-btn " title="Editar Usuario" onClick="editarUsuario( '${user.id}' )">
        <i class="fa-solid fa-pen-to-square"></i>
        </button>
        </td>
    </tr>`
    })
}

function actualizarLocalStorage() {
    localStorage.setItem("users", JSON.stringify(usersArray));
}


// function borrarUsuario(ID, nombre) {

    function borrarUsuario(ID, nombre) {

        Swal.fire({
            title: "Desea borrar el usuario?",
            text: `Usted confirma que desea borrar a ${nombre}!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Borrar!",
            reverseButtons:true
        }).then(result => {
            if (result.isConfirmed) {
                const indice = usersArray.findIndex(user => user.id === ID)

                usersArray.splice(indice, 1)
                pintarUsuario(usersArray)

                actualizarLocalStorage()
            }
        })

    }

function editarUsuario(id) {
    const userEdit = usersArray.find((usuario) => {
        if (usuario.id === id) {
            return true
        }
    })

    if (!userEdit) {
        Swal.fire('Error al editar', 'No se pudo editar el usuario', 'error')
        console.warn('El Usuario no existe ')
        return
    }


    const el = userForm.elements;
    el.id.value = userEdit.id;
    // active
    el.age.value = userEdit.age;
    el.bornDate.value = formatInputName(userEdit.bornDate)
    el.email.value = userEdit.email;
    el.fullname.value = userEdit.fullname;
    el.image.value = userEdit.image;
    el.location.value = userEdit.location;
    
    el.password.value = userEdit.password;
    el.password.disabled = true;
    el.password2 = userEdit.password2;
    el.password2.disabled = true;
    el.role.value = userEdit.role;

    submitBtn.classList.add('btn-form')
    submitBtn.innerHTML = 'Editar Usuario'
}
