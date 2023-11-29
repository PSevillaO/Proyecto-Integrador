// este archivo lo vamos a cargar en todos los HTML
/*
tenemos que obtener el nav y el user info
  *  hay que evaluar si tenemos un usuario logueado
  * Evaluar su role y ver si pintamos el boton de productos y usuario
  * Pintar el boton de logout

Si no tenemos el user logueado

    * No pintamos los botones admin
    * No colocamos el nombre
    * pintamos el boton login
*/

const headerNav = document.getElementById('nav-list-admin');
const userInfoHeader = document.getElementById('user-menu');

//veo si tengo un usuario Logueado
const loguedUser = JSON.parse(localStorage.getItem("currentUser"))



if (loguedUser) {
    //tengo un usuario logueado
    // OJO ACA TENGO QUE CACABIAR
    if (loguedUser.role === 'ADMIN_ROLE') {

        const adminProductLink = document.createElement("li");  // crea una etiqueta li vacia para producto
        const adminProductLinkA = document.createElement("a"); // creo un link a vacio para producto
        const adminUserLink = document.createElement("li");  // crea una etiqueta li vacia para producto
        const adminUserLinkA = document.createElement("a"); // creo un link a vacio para producto


        // Productos
        adminProductLinkA.href = '../pages/products.html';
        adminProductLinkA.innerHTML = "Productos";
        adminProductLinkA.classList.add("nav-link");
        adminProductLink.classList.add("nav-item");
        //Usuarios 
        adminUserLinkA.href = '../pages/users.html';
        adminUserLinkA.innerHTML = "Usuarios";
        adminUserLinkA.classList.add("nav-link");
        adminUserLink.classList.add("nav-item");
        // creo los hijos
        headerNav.appendChild(adminProductLink);
        headerNav.appendChild(adminUserLink);
        adminProductLink.appendChild(adminProductLinkA);
        adminUserLink.appendChild(adminUserLinkA);

    }
    // nombre de usuario
    const userNameHTML = userInfoHeader.querySelector('.label-usuario')
    userNameHTML.innerHTML = loguedUser.fullname;
    // imagen
    const userImg = document.createElement('img')
    userImg.src = loguedUser.image;
    userImg.alt = `${loguedUser.fullname} profile picture`
    userImg.classList.add('user-profile-picture')
    userInfoHeader.appendChild(userImg)

    // creo el carrito
    const carritoCompras = document.createElement('i');
    carritoCompras.classList.add("fa");
    carritoCompras.classList.add("fa-shopping-cart");
    userInfoHeader.appendChild(carritoCompras);

    // link de logout
    const linkLogout = document.createElement("li");
    const linkLogoutA = document.createElement("a");
    linkLogoutA.href = '../index.html';
    linkLogoutA.innerHTML = "Salir";
    linkLogoutA.classList.add("nav-link");
    linkLogout.classList.add("nav-item");
    linkLogoutA.onclick = function () {
        localStorage.removeItem('currentUser')
        window.location.href = '/index.html'
    }
    headerNav.appendChild(linkLogout);
    linkLogout.appendChild(linkLogoutA);


} else {
    // no tengo un usuario logueado
    // creo el link ingresar
    const linkLogin = document.createElement("li");
    const linkLoginA = document.createElement("a");
    linkLoginA.href = '../pages/login.html';
    linkLoginA.innerHTML = "Ingresar";
    linkLoginA.classList.add("nav-link");
    linkLogin.classList.add("nav-item");
    headerNav.appendChild(linkLogin);
    linkLogin.appendChild(linkLoginA);


    // creo el carrito
    const carritoCompras = document.createElement('i');
    carritoCompras.classList.add("fa");
    carritoCompras.classList.add("fa-shopping-cart");
    userInfoHeader.appendChild(carritoCompras);

}