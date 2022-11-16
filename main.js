const pizzas = [
    {
        id: 1,
        nombre:'Palmitos',
        ingredientes: ['harina', 'aceite', 'sal', 'levadura', 'agua', 'cebolla', 'salsa de tomate', 'mozarella', 'palmitos, salsa-golf'],
        precio: '$1000',
    },

    {
        id: 2,
        nombre:'Fugazzeta',
        ingredientes: ['harina', 'aceite', 'sal', 'levadura', 'agua', 'cebolla', 'salsa de tomate', 'mozarella', 'palmitos, salsa-golf'],
        precio: '$900',
    },

    {
        id: 3,
        nombre:'Rucula',
        ingredientes: ['harina', 'aceite', 'sal', 'levadura', 'agua', 'cebolla', 'salsa de tomate', 'mozarella', 'palmitos, salsa-golf'],
        precio: '$800',
    },

    {
        id: 4,
        nombre:'Cuatro Quesos',
        ingredientes: ['harina', 'aceite', 'sal', 'levadura', 'agua', 'cebolla', 'salsa de tomate', 'mozarella', 'palmitos, salsa-golf'],
        precio: '$700',
    },

    {
        id: 5,
        nombre:'Napolitana',
        ingredientes: ['harina', 'aceite', 'sal', 'levadura', 'agua', 'cebolla', 'salsa de tomate', 'mozarella', 'palmitos, salsa-golf'],
        precio: '$600',
    },

    {
        id: 6,
        nombre:'Pepperoni',
        ingredientes: ['harina', 'aceite', 'sal', 'levadura', 'agua', 'cebolla', 'salsa de tomate', 'mozarella', 'palmitos, salsa-golf'],
        precio: '$500',
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

