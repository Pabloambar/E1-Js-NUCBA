const pizzas = [
    {
        id: 1,
        nombre:'Palmitos',
        ingredientes: ['harina', 'aceite', 'sal', 'levadura', 'agua', 'cebolla', 'salsa de tomate', 'mozarella', 'palmitos, salsa-golf'],
        precio: 1000,
    },

    {
        id: 2,
        nombre:'Fugazzeta',
        ingredientes: ['harina', 'aceite', 'sal', 'levadura', 'agua', ' Muucha cebolla', 'salsa de tomate'],
        precio: 900,
    },

    {
        id: 3,
        nombre:'Rucula',
        ingredientes: ['harina', 'aceite', 'sal', 'levadura', 'agua', 'cebolla', 'salsa de tomate', 'Rucula'],
        precio: 800,
    },

    {
        id: 4,
        nombre:'Cuatro Quesos',
        ingredientes: ['harina', 'aceite', 'sal', 'levadura', 'agua', 'salsa de tomate', 'mozarella', 'Queso Fontina', 'Queso gorgonzola', 'Queso Parmigiano'],
        precio: 700,
    },

    {
        id: 5,
        nombre:'Napolitana',
        ingredientes: ['harina', 'aceite', 'sal', 'levadura', 'agua', 'cebolla', 'salsa de tomate', 'mozarella', 'Ajo', 'Perejil', 'aceite de oliva', 'tomates frescos'],
        precio: 600,
    },

    {
        id: 6,
        nombre:'Pepperoni',
        ingredientes: ['harina', 'aceite', 'sal', 'levadura', 'agua', 'cebolla', 'salsa de tomate', 'mozarella', 'Perejil', 'aceite de oliva', 'Salami'],
        precio: 500,
    }
];

    console.log('Pizzas que tienen id impares:')
    console.log('')

    const idPares = pizzas.filter((pizzas) => {
        return pizzas.id % 2 === 1;
    });
    
    idPares.forEach((pizzas) => {
        console.log(` La pizza ${pizzas.nombre} tiene id impar `);
    });

    console.log('================================================================');

    console.log('Hay pizzas con precios menor a $600?')
    console.log('')

    const pizzasConPrecioMenor = (precio) => {
        return pizzas.some((pizza) => {
            return pizza.precio < precio;
        })
            ? console.log(`Si! hay pizzas con precio menor a $${precio}`)
            : console.log(`No hay pizzas con precio menor a $${precio}`);
    };

    pizzasConPrecioMenor(600);

 
 console.log('================================================================');

 console.log('Todas las pizzas:');
 console.log('');

 const todasLasPizzas = pizzas.filter = (pizzas) => {
    return pizzas.nombre, pizzas.precio;

 };

 pizzas.forEach((pizzas) => {
    console.log(`${pizzas.nombre} -- $${pizzas.precio}`)
 });

 console.log('================================================================');
 console.log('');
 console.log('Pizzas y sus ingredientes:')
 console.log('');


 const pizzasIngredientes = pizzas.filter = (pizzas) => {
    return pizzas.nombre, pizzas.ingredientes;

 };

 pizzas.forEach((pizzas) => {
    console.log(`Pizza de ${pizzas.nombre}-- Ingredientes: $${pizzas.ingredientes}`) //}`)
 });
