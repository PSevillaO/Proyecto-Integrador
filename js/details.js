const mainProduct = document.getElementById('main');
const productoActual = JSON.parse(localStorage.getItem("currentProduc"));

pintaDetail(productoActual)



function pintaDetail(arrayPintar){
    mainProduct.innerHTML = '';
    mainProduct.innerHTML = 
    `<main class="main">
        <div class="main-class">
            <section class="main-detail">
                <div class="div-detail">
                    <div class="div-imagen">
                        <img src="../${arrayPintar.imagen}" alt="" class="img">
                    </div>
                    <div class="div-info">
                        <div>
                            <h5 class="info-category">${arrayPintar.category}</h5>
                            <h2 class="info-title">${arrayPintar.title}</h2>
                            <h3 class="info-price">$ ${arrayPintar.price}</h3>
                            <p class="info-description">${arrayPintar.info} </p>
                        </div>
                        <div class="info-cant">
                            <div>
                                <p>Cantidad</p>
                                <div class="info-selector">
                                    <button>+</button>
                                    <p>1</p>
                                    <button>+</button>
                                </div>
                            </div>
                            <div class="info-button">
                                <button class="card-btn">Añadir Carrito</button>
                                <button class="card-btn">Comprar ahora</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="main-description">
                <div class="div-description">
                    <h2>Descripcion</h2>
                    <p> ${arrayPintar.description}</p>
                </div>
            </section>
        </div>
    </main>`

}
