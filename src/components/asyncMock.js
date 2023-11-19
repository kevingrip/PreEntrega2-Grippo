const products = [
    {
        id: '1',
        name: 'Coca Cola 2.25 Lts',
        price: 5400.00,
        category: 'Gaseosas',
        imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/332148/7790895000997_E01.jpg?v=638211437412370000',
        stock: 50,
        description: 'Pack x 6 unidades'
    },
    {
        id: '2',
        name: 'Sprite 2.25 Lts',
        price: 5200.00,
        category: 'Gaseosas',
        imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/368782/7790895001000_E01.jpg?v=638290816908570000',
        stock: 50,
        description: 'Pack x 6 unidades'
    },
    {
        id: '3',
        name: 'Villavicencio 2Lts',
        price: 1680.00,
        category: 'Aguas',
        imagen: 'https://drinkshop.com.ar/img/productos/125832.jpg',
        stock: 0,
        description: 'Pack x 6 unidades'
    },
    {
        id: '4',
        name: 'Aquarius Pera 1.5 Lts',
        price: 3600.00,
        category: 'Aguas Saborizadas',
        imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/332341/7790895640476_E01.jpg?v=638211437957700000',
        stock: 50,
        description: 'Pack x 6 unidades'
    },
    {
        id: '5',
        name: 'Imperial IPA 1 Lts',
        price: 12000.00,
        category: 'Cervezas',
        imagen: 'https://static.cotodigital3.com.ar/sitios/fotos/full/00471000/00471009.jpg?3.0.160a',
        stock: 50,
        description: 'Pack x 12 unidades'
    },
    {
        id: '6',
        name: 'Portillo Malbec 750 ml',
        price: 12000.00,
        category: 'Vinos',
        imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/314198/7798074864675_01.jpg?v=638174184010030000',
        stock: 50,
        description: 'Caja x 6 unidades'
    }
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },2000)
    })
    
}

export const getProductsById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        },500)
    })
}

export const getProductosByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(item => item.category === categoryId))
        }, 500)
    })
    
}