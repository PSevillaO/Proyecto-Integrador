

function formatDate(date) {
    const collector = new Intl.DateTimeFormat('es-AR', {day: '2-digit',  month: '2-digit',  year: 'numeric' })
    const fechaFormateada = collector.format(date)
    return fechaFormateada
}


function formatInputName(fechaInput) {
    const fecha = new Date(fechaInput)

    const year = fecha.getFullYear();
    let month = fecha.getMonth() + 1;
    let date = fecha.getDate() 

    if (month < 10) {
        month = '0' + month;
    }
    if (date < 10) {
        date = '0' + date;
    }
    return (`${year}-${month}-${date}`)
}


function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}