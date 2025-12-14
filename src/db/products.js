const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaT8pef2IOfzEXjpz78bBAXhA9Y7sOJ5eVqg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHK6Y-_GkxmWzqz0fu_2D0ripzWzJBFClknQ&s",
    "https://www.mockupcloud.com/uploads/thumbs/images/2024/02/17/001-1170x780.jpg",
    "https://images.unsplash.com/photo-1700893417219-221864536e99?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIyrBMEo3z17YM_1bK0KO9iuH1QxLzhbQA6g&s",
    "https://thumbs.dreamstime.com/b/copa-de-vino-roja-con-la-botella-y-barril-en-un-fondo-negro-48663593.jpg",
    "https://thumbs.dreamstime.com/b/botella-de-mofa-del-vino-rojo-y-la-copa-para-arriba-en-fondo-madera-elegante-negro-oscuro-vertical-103445640.jpg",
    "https://thumbs.dreamstime.com/b/vida-con-un-vaso-de-vino-y-una-botella-sobre-fondo-negro-396981891.jpg"
];

export default [
    { id: 1, name: "Malbec Reserva", winery: "Catena Zapata", category: "Tinto", price: 7500, stock: 20, image: images[0], year: 2021, country: "Argentina" },
    { id: 2, name: "Cabernet Sauvignon Premium", winery: "Luigi Bosca", category: "Tinto", price: 8900, stock: 15, image: images[1], year: 2020, country: "Argentina" },
    { id: 3, name: "Gran Corte Blend", winery: "Rutini", category: "Blend", price: 13000, stock: 12, image: images[2], year: 2019, country: "Argentina" },
    { id: 4, name: "Chardonnay Estate", winery: "Norton", category: "Blanco", price: 6200, stock: 30, image: images[3], year: 2022, country: "Argentina" },
    { id: 5, name: "Rosé Malbec", winery: "Trapiche", category: "Rosado", price: 5400, stock: 25, image: images[4], year: 2023, country: "Argentina" },
    { id: 6, name: "Extra Brut", winery: "Chandon", category: "Espumante", price: 7800, stock: 18, image: images[5], year: 2022, country: "Argentina" },
    { id: 7, name: "Syrah Reserva", winery: "Finca Las Moras", category: "Tinto", price: 6100, stock: 22, image: images[6], year: 2021, country: "Argentina" },
    { id: 8, name: "Bonarda Tradición", winery: "Nieto Senetiner", category: "Tinto", price: 4800, stock: 40, image: images[7], year: 2022, country: "Argentina" },

    { id: 9, name: "Pinot Noir Select", winery: "Salentein", category: "Tinto", price: 9200, stock: 16, image: images[0], year: 2021, country: "Argentina" },
    { id: 10, name: "Torrontés Clásico", winery: "Colomé", category: "Blanco", price: 4500, stock: 35, image: images[1], year: 2023, country: "Argentina" },
    { id: 11, name: "Merlot Reserva", winery: "Lagarde", category: "Tinto", price: 6900, stock: 28, image: images[2], year: 2020, country: "Argentina" },
    { id: 12, name: "Brut Nature", winery: "Navarro Correas", category: "Espumante", price: 8300, stock: 14, image: images[3], year: 2022, country: "Argentina" },
    { id: 13, name: "Malbec Roble", winery: "Terrazas de los Andes", category: "Tinto", price: 5700, stock: 30, image: images[4], year: 2022, country: "Argentina" },
    { id: 14, name: "Cabernet Franc Reserva", winery: "Zuccardi", category: "Tinto", price: 10500, stock: 12, image: images[5], year: 2021, country: "Argentina" },
    { id: 15, name: "White Blend", winery: "Andeluna", category: "Blanco", price: 5200, stock: 24, image: images[6], year: 2023, country: "Argentina" },
    { id: 16, name: "Rosé Pinot Noir", winery: "Otronia", category: "Rosado", price: 6900, stock: 20, image: images[7], year: 2023, country: "Argentina" },

    { id: 17, name: "Extra Brut Rosé", winery: "Chandon", category: "Espumante", price: 8200, stock: 17, image: images[0], year: 2022, country: "Argentina" },
    { id: 18, name: "Malbec Clásico", winery: "Alamos", category: "Tinto", price: 4300, stock: 50, image: images[1], year: 2022, country: "Argentina" },
    { id: 19, name: "Cabernet Sauvignon Joven", winery: "Los Haroldos", category: "Tinto", price: 3900, stock: 60, image: images[2], year: 2023, country: "Argentina" },
    { id: 20, name: "Chardonnay Roble", winery: "Luigi Bosca", category: "Blanco", price: 7500, stock: 22, image: images[3], year: 2021, country: "Argentina" },
    { id: 21, name: "Malbec High Altitude", winery: "Colomé", category: "Tinto", price: 13600, stock: 10, image: images[4], year: 2019, country: "Argentina" },
    { id: 22, name: "Cosecha Tardía Blanco", winery: "Norton", category: "Dulce", price: 4200, stock: 34, image: images[5], year: 2022, country: "Argentina" },
    { id: 23, name: "Sparkling Demi Sec", winery: "Freixenet", category: "Espumante", price: 7100, stock: 18, image: images[6], year: 2022, country: "Argentina" },
    { id: 24, name: "Pinot Grigio", winery: "Santa Julia", category: "Blanco", price: 5000, stock: 29, image: images[7], year: 2023, country: "Argentina" },

    { id: 25, name: "Tempranillo Reserva", winery: "Séptima", category: "Tinto", price: 6800, stock: 21, image: images[0], year: 2020, country: "Argentina" },
    { id: 26, name: "Blend Andino", winery: "Salentein", category: "Blend", price: 9500, stock: 19, image: images[1], year: 2020, country: "Argentina" },
    { id: 27, name: "Viognier Estate", winery: "Andeluna", category: "Blanco", price: 5300, stock: 27, image: images[2], year: 2023, country: "Argentina" },
    { id: 28, name: "Rosé Syrah", winery: "Las Moras", category: "Rosado", price: 4600, stock: 33, image: images[3], year: 2023, country: "Argentina" },
    { id: 29, name: "Blanc de Blancs", winery: "Chandon", category: "Espumante", price: 8900, stock: 15, image: images[4], year: 2022, country: "Argentina" },
    { id: 30, name: "Cabernet Reserva", winery: "Altos Las Hormigas", category: "Tinto", price: 7900, stock: 20, image: images[5], year: 2021, country: "Argentina" },
    { id: 31, name: "Sauvignon Blanc Fresh", winery: "Zuccardi", category: "Blanco", price: 5100, stock: 32, image: images[6], year: 2023, country: "Argentina" },
    { id: 32, name: "Malbec Premium", winery: "Kaiken", category: "Tinto", price: 8600, stock: 18, image: images[7], year: 2020, country: "Argentina" },

    { id: 33, name: "Rosé Blend", winery: "Norton", category: "Rosado", price: 4900, stock: 26, image: images[0], year: 2023, country: "Argentina" },
    { id: 34, name: "Extra Brut Premium", winery: "Navarro Correas", category: "Espumante", price: 9300, stock: 14, image: images[1], year: 2022, country: "Argentina" },
    { id: 35, name: "Cabernet Roble", winery: "Nieto Senetiner", category: "Tinto", price: 5600, stock: 28, image: images[2], year: 2022, country: "Argentina" },
    { id: 36, name: "Chardonnay Joven", winery: "Trumpeter", category: "Blanco", price: 4700, stock: 35, image: images[3], year: 2023, country: "Argentina" },
    { id: 37, name: "Pinot Noir Reserva", winery: "Luigi Bosca", category: "Tinto", price: 11200, stock: 9, image: images[4], year: 2019, country: "Argentina" },
    { id: 38, name: "Dulce Natural Rosé", winery: "Santa Julia", category: "Dulce", price: 4200, stock: 40, image: images[5], year: 2023, country: "Argentina" },
    { id: 39, name: "Brut Rosé", winery: "Freixenet", category: "Espumante", price: 7900, stock: 20, image: images[6], year: 2022, country: "Argentina" },
    { id: 40, name: "Malbec Gran Reserva", winery: "Rutini", category: "Tinto", price: 15000, stock: 7, image: images[7], year: 2018, country: "Argentina" },

    { id: 41, name: "Gewürztraminer", winery: "Bodega del Fin del Mundo", category: "Blanco", price: 5600, stock: 23, image: images[0], year: 2023, country: "Argentina" },
    { id: 42, name: "Cabernet-Malbec Blend", winery: "Trapiche", category: "Blend", price: 6700, stock: 27, image: images[1], year: 2021, country: "Argentina" },
    { id: 43, name: "Rosé Pinot Grigio", winery: "Salentein", category: "Rosado", price: 5000, stock: 31, image: images[2], year: 2023, country: "Argentina" },
    { id: 44, name: "Brut Nature Premium", winery: "Chandon", category: "Espumante", price: 9800, stock: 13, image: images[3], year: 2022, country: "Argentina" },
    { id: 45, name: "Criolla Clásica", winery: "Durigutti", category: "Tinto", price: 4100, stock: 36, image: images[4], year: 2022, country: "Argentina" },
    { id: 46, name: "Cosecha Tardía Rosado", winery: "Norton", category: "Dulce", price: 4300, stock: 33, image: images[5], year: 2023, country: "Argentina" },
    { id: 47, name: "Malbec Orgánico", winery: "Santa Julia", category: "Tinto", price: 5600, stock: 29, image: images[6], year: 2021, country: "Argentina" },
    { id: 48, name: "Chardonnay Orgánico", winery: "Santa Julia", category: "Blanco", price: 5300, stock: 28, image: images[7], year: 2023, country: "Argentina" },

    { id: 49, name: "Malbec de Altura", winery: "Amalaya", category: "Tinto", price: 7200, stock: 22, image: images[0], year: 2020, country: "Argentina" },
    { id: 50, name: "Sparkling Brut", winery: "Mumm", category: "Espumante", price: 7600, stock: 19, image: images[1], year: 2022, country: "Argentina" }
];