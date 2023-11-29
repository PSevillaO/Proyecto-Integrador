const users = JSON.parse(localStorage.getItem("users")) || [];

const loginForm = document.getElementById("login-form");

console.log(loginForm)

loginForm.addEventListener("submit", (evt)=> {

    evt.preventDefault()
    const email = loginForm.elements.email.value;
    const password = loginForm.elements.password.value;

    const user = users.find((usr) => email.toLowerCase() === usr.email.toLowerCase())

    if (!user || user.password !== password){
        Swal.fire({
            icon:'error',
            title:"Login Incorrecto",
            text:"Datos ingresados incorrectos",
            timer: 2000
        })
        console.log(user,password,users.password)
        return
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    Swal.fire({
        icon:'success',
        title:"Login Correcto",
        text:"Sera redireccionado al Home"
    })

    setTimeout(function(){
        window.location.href = '../index.html'
    },2500)

})
