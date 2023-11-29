const cardStart = [
    {
        id: "1",
        imagen: 'assets/image/product/Taza01.jpeg',
        title: 'Taza Demon Slayer',
        info: 'Taza Demon Slayer del personaje Nezuku KamTaza',
        description: 'Taza Demon Slayer - Kimetsu no Yaiba - Nezuku KamTaza hechas en ceramica, apta para microondas con sublimado de la mas alta calidad. Capacidad 320 ml',
        dateCard: new Date('2023-08-01' + 'T00:00:00-03:00').getTime(),
        price: 3391,
        category: "Tazas"
    },
    {
        id: "2",
        imagen: 'assets/image/product/Taza02.jpeg',
        title: 'Taza Demon Slayer',
        info: 'Taza Demon Slayer del personaje Sanemi Shinazugawa',
        description: 'Taza Demon Slayer - Kimetsu no Yaiba - Sanemi Shinazugawa hechas en ceramica, apta para microondas con sublimado de la mas alta calidad. Capacidad 320 ml',
        dateCard: new Date('2023-08-02' + 'T00:00:00-03:00').getTime(),
        price: 3392,
        category: "Tazas"
    },
    {
        id: "3",
        imagen: 'assets/image/product/Taza03.jpeg',
        title: 'Taza Naruto',
        info: 'Taza Naruto del zorro de las 9 colas',
        description: 'Taza Naruto - Zorro de las 8 colas - Kurama - chas en ceramica, apta para microondas con sublimado de la mas alta calidad. Capacidad 320 ml',
        dateCard: new Date('2023-08-03' + 'T00:00:00-03:00').getTime(),
        price: 3393,
        category: "Tazas"
    },
    {
        id: "4",
        imagen: 'assets/image/product/Taza04.jpeg',
        title: 'Taza Naruto',
        info: 'Taza Naruto Jugo',
        description: 'Taza Naruto - Jugo - chas en ceramica, apta para microondas con sublimado de la mas alta calidad. Capacidad 320 ml',
        dateCard: new Date('2023-08-04' + 'T00:00:00-03:00').getTime(),
        price: 3394,
        category: "Tazas"
    },
    {
        id: "5",
        imagen: 'assets/image/product/Taza05.jpeg',
        title: 'Taza Naruto',
        info: 'Taza Naruto Sasuke',
        description: 'Taza Naruto - Sasuke - hechas en ceramica, apta para microondas con sublimado de la mas alta calidad. Capacidad 320 ml',
        dateCard: new Date('2023-01-31' + 'T00:00:00-03:00').getTime(),
        price: 3395,
        category: "Tazas"
    },
    {
        id: "6",
        imagen: 'assets/image/product/Taza06.jpeg',
        title: 'Taza Boruto',
        info: 'Taza Boruto del personaje Mitsiki',
        description: 'Taza Boruto - Mitsuki - hechas en ceramica, apta para microondas con sublimado de la mas alta calidad. Capacidad 320 ml',
        dateCard: new Date('2023-12-31' + 'T00:00:00-03:00').getTime(),
        price: 3396,
        category: "Tazas"
    },
    {
        id: "7",
        imagen: 'assets/image/product/Taza07.jpeg',
        title: 'Taza Demon Slayer',
        info: 'Taza Demosn Slayer del personaje Nezuku KamTaza 2',
        description: 'Taza Demon Slayer - Kimetsu no Yaiba - Nezuku KamTaz- hechas en ceramica, apta para microondas con sublimado de la mas alta calidad. Capacidad 320 ml',
        dateCard: new Date('2023-12-05' + 'T00:00:00-03:00').getTime(),
        price: 3397,
        category: "Tazas"
    },
    {
        id: "8",
        imagen: 'assets/image/product/Taza08.jpeg',
        title: 'Taza Dragon Ball Super',
        info: 'Taza Drgon Ball Super personaje Goku',
        description: 'Taza Drgon Ball Super personaje Goku - Nezuku KamTaz- hechas en ceramica, apta para microondas con sublimado de la mas alta calidad. Capacidad 320 ml',
        dateCard: new Date('2023-01-06' + 'T00:00:00-03:00').getTime(),
        price: 3398,
        category: "Tazas"
    }

];

const usersStart = [
    {
        fullname: 'Admin',
        age: 30,
        email: 'Admin@admin.com',
        id: '1',
        active: true,
        password: 'Admin',
        bornDate: new Date('1993-01-01').getTime(),
        location: 'Buenos Aires',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/7/71/Mk8iconyoshi.png?width=1280',
        role: 'ADMIN_ROLE'
    },
    {
        fullname: 'Jane Doe',
        age: 25,
        email: 'jane.doe@example.com',
        id: '2',
        active: false,
        password: 'password456',
        bornDate: new Date('1998-05-05').getTime(),
        location: 'Mendoza',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/f/f5/Mk8icondaisy.png?width=1280',
        role: "USER_ROLE"
    },
    {
        fullname: 'Alice Johnson',
        age: 35,
        email: 'alice.johnson@example.com',
        id: '3',
        active: true,
        password: 'password789',
        bornDate: new Date('1988-08-08').getTime(),
        location: 'Buenos Aires',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/1/1d/Mk8icontoadette.png?width=325',
        role: "USER_ROLE"
    },
    {
        fullname: 'Michael Smith',
        age: 40,
        email: 'michael.smith@example.com',
        id: '4',
        active: false,
        password: 'password101',
        bornDate: new Date('1983-04-10').getTime(),
        location: 'San Luis',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/d/d1/Mk8iconrosalina.png?width=1280',
        role: "USER_ROLE"
    },
    {
        fullname: 'Emily Johnson',
        age: 28,
        email: 'emily.johnson@example.com',
        id: '5',
        active: true,
        password: 'password202',
        bornDate: new Date('1995-02-15').getTime(),
        location: 'San Luis',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/5/59/Mk8iconpeach.png?width=325',
        role: "USER_ROLE"
    },
    {
        fullname: 'Daniel Lee',
        age: 34,
        email: 'daniel.lee@example.com',
        id: '6',
        active: false,
        password: 'password303',
        bornDate: new Date('1989-07-07').getTime(),
        location: 'Mendoza',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/bf/Mk8iconmario.png?width=325',
        role: "USER_ROLE"
    },
    {
        fullname: 'Samantha Davis',
        age: 22,
        email: 'samantha.davis@example.com',
        id: '7',
        active: true,
        password: 'password404',
        bornDate: new Date('2001-11-11').getTime(),
        location: 'Córdoba',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/2/2d/Mk8icondk.png?width=325',
        role: "USER_ROLE"
    },
    {
        fullname: 'James Moore',
        age: 45,
        email: 'james.moore@example.com',
        id: '8',
        active: false,
        password: 'password505',
        bornDate: new Date('1978-12-19').getTime(),
        location: 'Buenos Aires',
        image: 'https://m.media-amazon.com/images/I/81wNRtDaTXL.png?width=325',
        role: "USER_ROLE"
    },
    {
        fullname: 'Isabella Taylor',
        age: 29,
        email: 'isabella.taylor@example.com',
        id: '9',
        active: true,
        password: 'password606',
        bornDate: new Date('1994-06-24').getTime(),
        location: 'Mendoza',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/3/3a/Mk8iconkoopa.png?width=325',
        role: "USER_ROLE"
    },
    {
        fullname: 'Ethan Johnson',
        age: 31,
        email: 'ethan.johnson@example.com',
        id: '10',
        active: false,
        password: 'password707',
        bornDate: new Date('1992-03-03').getTime(),
        location: 'Buenos Aires',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/b7/Mk8iconbowser.png?width=325',
        role: "USER_ROLE"
    }
];


// Seteo las cards iniciales 
if (localStorage.getItem("cards") === null) {
    localStorage.setItem("cards", JSON.stringify(cardStart))
}
const cardArray = JSON.parse(localStorage.getItem("cards"));

// Seteo los usuarios iniciales 
if (localStorage.getItem("users") === null) {
    localStorage.setItem("users", JSON.stringify(usersStart))
}
const usersArray = JSON.parse(localStorage.getItem("users"));

