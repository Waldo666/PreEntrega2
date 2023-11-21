const products = [
    {
        id: '1',
        name:'Soporte Superman',
        price: 1500,
        category: 'soportes',
        img:'https://i.pinimg.com/564x/ec/89/de/ec89deb98372e34c7e91f2d53ae2dfcb.jpg' ,
        stock: 150,
        description: 'soporte simple para celular',
    },
    {
        id: '2',
        name: 'Dragon',
        price: 5000,
        category: 'juguetes',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_970233-MLA49055636160_022022-F.webp',
        stock: 350,
        description: 'dragon articulado',
    },
    {
        id: '3',
        name: 'Maceta Groot',
        price: 2500,
        category: 'varios',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_996631-MLA51970418098_102022-F.webp',
        stock: 250,
        description: 'maceta mediana para plantas',
    },
    {
        id: '4',
        name:'Soporte Genérico',
        price: 1200,
        category: 'soportes',
        img:'https://wwwhatsnew.com/wp-content/uploads/2020/04/10_soporte.jpg' ,
        stock: 100,
        description: 'soporte simple para celular',
    },
    {
        id: '5',
        name:'Soporte Mickey',
        price: 2000,
        category: 'soportes',
        img:'https://files.cults3d.com/uploaders/17031988/illustration-file/06e53fb3-96b1-49b3-9ad9-cdf74fd5661c/bella.png' ,
        stock: 170,
        description: 'soporte simple para celular',
    },
    {
        id: '6',
        name:'Pulpo articulado',
        price: 1300,
        category: 'juguetes',
        img:'https://www.impresoras3d.com/wp-content/uploads/2019/12/juguete_impresion_3D_PulPo-Articulable.jpg.webp' ,
        stock: 100,
        description: 'Pulpo con tentáculos articulados',
    },
    {
        id: '7',
        name:'Huevera',
        price: 2000,
        category: 'varios',
        img:'https://img.thingiverse.com/cdn-cgi/image/fit=contain,quality=95/https://cdn.thingiverse.com/assets/55/6c/80/82/75/large_display_95f722dc-a71a-4916-adcb-02612b9e3aaf.jpg' ,
        stock: 150,
        description: 'Porta huevos para heladera',
    },
    {
        id: '8',
        name:'Robot Articulado',
        price: 2500,
        category: 'juguetes',
        img:'https://www.3dforprint.com/modelos/3304/jointed-robot5.jpg' ,
        stock: 120,
        description: 'Robot con multiples articulaciones',
    },
    {
        id: '9',
        name:'Craneo humano',
        price: 7500,
        category: 'varios',
        img:'https://img.thingiverse.com/cdn-cgi/image/fit=contain,quality=95/https://cdn.thingiverse.com/assets/02/25/91/12/a2/large_display_30a2f5ba-9a30-4e6d-9305-bb95f908e691.jpg' ,
        stock: 50,
        description: 'craneo escala 1:1',
    },

]
   
    export const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() =>{
                resolve(products)
            },500)
        })
    }
    export const getProductsById = (productId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products.find(prod => prod.id === productId))
            }, 500)
        })
    }
    export const getProductsByCategory = (category) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products.filter(prod => prod.category === category));
            }, 500);
        });
    };