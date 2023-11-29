const tableBody = document.getElementById('table-body')
const searchInput = document.getElementById('search')
const productForm = document.getElementById('product-form')
const submitBtn = document.getElementById('btn-form')


productForm.addEventListener("submit", (evt) => {
    evt.preventDefault()

    const el = evt.target.elements
   // OPERADOR TERNARIO    
    const ids = el.id.value ? el.id.value : crypto.randomUUID();

    product = {
        title:el.title.value,
        info:el.fulltitle.value,
        description:el.description.value,
        dateCard: new Date(el.producdate.value + 'T00:00:00-03:00').getTime(),   
        price:el.price.value,
        category:el.category.value,
        imagen:el.image.value,
        id: ids
    }

   // pregunto si estoy editando
    if (el.id.value) {
        console.log('Editando')

        // editando
        const indice = cardArray.findIndex(prod => {
            if (prod.id === el.id.value) {
                return true
            }
        })

        cardArray[indice] = product;
        //Swal.fire('Usuario Editado', 'El usuario se Edito correctamente')

        Swal.fire({
            title: 'Producto Editado',
            text: 'El usuario se Edito correctamente',
            icon: 'success',
            timer: 1000
        })


    } else {
        // agregando un usuaruo nuevo   
        cardArray.push(product)

        Swal.fire({
            title: 'Producto Agregado',
            text: 'El usuario se Agrego correctamente',
            icon: 'success',
            timer: 1000
        })
        console.log("Agregando")

    }

    pintarProducts(cardArray)
    actualizarLocalStorage()
    resetearFormulario();

})

function resetearFormulario() {
    productForm.reset();
    submitBtn.classList.remove('btn-edit')
    submitBtn.innerHTML = "Agregar Usuario"
    productForm.title.focus()
    productForm.id.value = null;
}



searchInput.addEventListener('keyup', (evento) => {
    const inputValue = evento.target.value.toLowerCase()
    const pruductosFiltrados = cardArray.filter((product) => product.title.toLowerCase().includes(inputValue))
    pintarProducts(pruductosFiltrados)
    console.log(pruductosFiltrados)
})


pintarProducts(cardArray);

function pintarProducts(arrayPintar) {
    tableBody.innerHTML = '';
    arrayPintar.forEach((product, index) => {

        tableBody.innerHTML += `<tr class="table-body">
        <td class="table-image">
            <img src= ../${product.imagen} alt=${product.title}>
        </td>
        <td class="user-name">${product.title}</td>
        <td class="user-email">${product.info}</td>
        <td class="user-location">${product.description}</td>
        <td class="user-date">${formatDate(product.dateCard)}</td>
        <td class="user-age">${product.price}</td>
        <td class="user-category">${product.category}</td>
        <td class="user-action" > 
        <button class="action-btn btn-danger" title="Borrar Producto" onClick="borrarProducto( '${product.id}','${product.title}') ">
        <i class="fa-solid fa-trash-can"></i>
        </button>
        <button class="action-btn" title="Editar Producto" onClick="editarProducto( '${product.id}' )">
        <i class="fa-solid fa-pen-to-square"></i>
        </button>
        </td>
    </tr>`
    })
}

function borrarProducto(ID, nombre) {

    Swal.fire({
        title: "Desea borrar el Producto?",
        text: `Confirma que desea borrar a ${nombre}!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Borrar!",
        reverseButtons:true
    }).then(result => {
        if (result.isConfirmed) {
            const indice = cardArray.findIndex(product => product.id === ID)

            cardArray.splice(indice, 1)
            pintarProducts(cardArray)

            actualizarLocalStorage()
        }
    })

}

function actualizarLocalStorage() {
    localStorage.setItem("cards", JSON.stringify(cardArray));
}

function editarProducto(id) {
    const productEdit = cardArray.find((product) => {
        if (product.id === id) {
            return true
        }
    })

    if (!productEdit) {
        Swal.fire('Error al editar', 'No se pudo editar el usuario', 'error')
        console.warn('El Usuario no existe ')
        return
    }

    const el = productForm.elements;
    el.id.value = productEdit.id;
    el.title.value = productEdit.title;
    el.fulltitle.value = productEdit.info;
    el.description.value = productEdit.description;
    el.producdate.value = formatInputName(productEdit.dateCard);
    el.price.value = productEdit.price;
    el.category.value = productEdit.category;
    el.image.value = productEdit.imagen;

    submitBtn.classList.add('btn-edit')
    submitBtn.innerHTML = 'Editar Usuario'
}

