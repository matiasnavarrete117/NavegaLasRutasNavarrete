// Datos simulados para productos de joyería
const products = [
    {
      id: 1,
      title: "Collar de Plata con Diamante",
      description: "Elegante collar de plata 925 con un diamante de 0.25 quilates engarzado en un diseño minimalista perfecto para cualquier ocasión.",
      price: 39990,
      category: "collares",
      image: "https://via.placeholder.com/300?text=Collar+Diamante",
      stock: 5
    },
    {
      id: 2,
      title: "Collar Gargantilla de Oro",
      description: "Gargantilla fina de oro de 18 quilates con acabado brillante, diseñada para realzar el cuello con elegancia y sutileza.",
      price: 59990,
      category: "collares",
      image: "https://via.placeholder.com/300?text=Gargantilla+Oro",
      stock: 3
    },
    {
      id: 3,
      title: "Anillo de Compromiso Esmeralda",
      description: "Hermoso anillo de compromiso en oro blanco de 18k con una esmeralda central de corte rectangular y diamantes laterales.",
      price: 129990,
      category: "anillos",
      image: "https://via.placeholder.com/300?text=Anillo+Esmeralda",
      stock: 2
    },
    {
      id: 4,
      title: "Anillo Trilogy Diamantes",
      description: "Anillo trilogy en oro amarillo de 18k con tres diamantes que simbolizan el pasado, presente y futuro de su relación.",
      price: 89990,
      category: "anillos",
      image: "https://via.placeholder.com/300?text=Anillo+Trilogy",
      stock: 4
    },
    {
      id: 5,
      title: "Pulsera Tennis de Plata",
      description: "Elegante pulsera tennis de plata 925 con circones brillantes en toda su extensión, ajustable a cualquier muñeca.",
      price: 45990,
      category: "pulseras",
      image: "https://via.placeholder.com/300?text=Pulsera+Tennis",
      stock: 6
    },
    {
      id: 6,
      title: "Pulsera Rígida con Zafiro",
      description: "Pulsera rígida en oro rosa de 18k con un zafiro azul central de 0.5 quilates rodeado por pequeños diamantes.",
      price: 75990,
      category: "pulseras",
      image: "https://via.placeholder.com/300?text=Pulsera+Zafiro",
      stock: 3
    }
  ];
  
  // Función para obtener todos los productos (simulando delay de API)
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  
  // Función para obtener un producto por su ID
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = products.find(prod => prod.id === id);
        resolve(product);
      }, 500);
    });
  };