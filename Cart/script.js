var products = [
    { 
        name: "iPhone 13 Pro",
        headlines: "Latest iPhone with advanced features",
        price: "$999",
        image: "https://m.media-amazon.com/images/I/314Rp+8XKWL._SX342_SY445_.jpg"
    },
    { 
        name: "Samsung Galaxy Watch 4",
        headlines: "Smartwatch with health and fitness tracking",
        price: "$299",
        image: "https://m.media-amazon.com/images/I/61nBzBREzGL._AC_UY327_FMwebp_QL65_.jpg"
    },
    { 
        name: "Sony PlayStation 5",
        headlines: "Next-gen gaming console",
        price: "$499",
        image: "https://m.media-amazon.com/images/I/51mWHXY8hyL._AC_UY327_FMwebp_QL65_.jpg"
    },
    { 
        name: "Bose QuietComfort 45 Headphones",
        headlines: "Premium noise-canceling headphones",
        price: "$329",
        image: "https://m.media-amazon.com/images/I/51T0Cy9TRJL._AC_UY327_FMwebp_QL65_.jpg"
    },
    { 
        name: "Canon EOS R5 Camera",
        headlines: "High-resolution mirrorless camera",
        price: "$3899",
        image: "https://m.media-amazon.com/images/I/61lKwvtzRzL._AC_UY327_FMwebp_QL65_.jpg"
    },
    { 
        name: "Dyson V11 Vacuum Cleaner",
        headlines: "Powerful cordless vacuum cleaner",
        price: "$699",
        image: "https://m.media-amazon.com/images/I/418vSp+SqzL._AC_UY327_FMwebp_QL65_.jpg"
    },
    { 
        name: "Apple MacBook Pro 16-inch",
        headlines: "Professional-grade laptop with M1 Pro chip",
        price: "$2399",
        image: "https://m.media-amazon.com/images/I/81Fm0tRFdHL._AC_UY327_FMwebp_QL65_.jpg"
    },
    { 
        name: "LG OLED C1 4K TV",
        headlines: "Stunning OLED TV with AI ThinQ",
        price: "$1999",
        image: "https://m.media-amazon.com/images/I/61K2Qvu19YL._AC_UY327_FMwebp_QL65_.jpg"
    },
    { 
        name: "Nintendo Switch OLED Model",
        headlines: "Upgraded version of popular gaming console",
        price: "$349",
        image: "https://m.media-amazon.com/images/I/71Q54HnKxwS._AC_UY327_FMwebp_QL65_.jpg"
    },
    { 
        name: "Fitbit Charge 5 Fitness Tracker",
        headlines: "Advanced fitness tracker with GPS",
        price: "$179",
        image: "https://m.media-amazon.com/images/I/61Mz0onKYIL._AC_UL480_FMwebp_QL65_.jpg"
    },
    { 
        name: "Microsoft Surface Laptop Studio",
        headlines: "Versatile laptop with unique design",
        price: "$1599",
        image: "https://m.media-amazon.com/images/I/61r+6IP0TCL._AC_UY327_FMwebp_QL65_.jpg"
    },
    { 
        name: "Garmin Fenix 7 Smartwatch",
        headlines: "Premium multisport GPS smartwatch",
        price: "$699",
        image: "https://m.media-amazon.com/images/I/61oatFNX4BL._AC_UY327_FMwebp_QL65_.jpg"
    }
];

var popular = [
    { 
        name: "Sony WH-1000XM4 Wireless Headphones",
        headlines: "Industry-leading noise-canceling headphones",
        price: "$349",
        image: "https://m.media-amazon.com/images/I/51DkbWZIg+L._AC_UY327_FMwebp_QL65_.jpg"
    },
    { 
        name: "Apple AirPods Pro",
        headlines: "Active noise cancellation for immersive sound",
        price: "$249",
        image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY327_FMwebp_QL65_.jpg"
    },
    { 
        name: "Samsung Galaxy S21 Ultra 5G",
        headlines: "Ultimate smartphone with 108MP camera",
        price: "$1199",
        image: "https://m.media-amazon.com/images/I/917nPCOw9-L._AC_UY327_FMwebp_QL65_.jpg"
    },
    { 
        name: "DJI Mavic Air 2 Drone",
        headlines: "4K/60fps video and 48MP photos",
        price: "$799",
        image: "https://m.media-amazon.com/images/I/41VApMw7qaL._AC_UL480_FMwebp_QL65_.jpg"
    }
];

var cart=[]

function addProduct(){
    var clutter=""
    products.forEach(function(product, index){
        clutter+=`<div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
        <img class="w-full h-full object-cover" src="${product.image}"/>
        </div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-20">${product.headlines}</h3>
                    <h4 class="font-semibold mt-2">${product.price}</h4>
                </div>
                <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${index}"
                        class="add ri-add-line"></i></button>
            </div>
        </div>
    </div>`
    })
    document.querySelector(".products").innerHTML=clutter;
}

function addPopularProducts(){
    var clutter=""
    popular.forEach(function(product){
        clutter+=`<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headlines}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
        </div>
    </div>`

    })
    document.querySelector(".populars").innerHTML=clutter;
}

addPopularProducts()
addProduct()

function addToCart(){
    document.querySelector(".products")
    .addEventListener("click", function(details){
        if(details.target.classList.contains('add')){
            cart.push(products[details.target.dataset.index])
            alert("Added to cart 👌")
        }
    })
}

addToCart()

function showCart(){
    document.querySelector(".carticon").addEventListener("click", function(){
        document.querySelector(".cartexpnd").style.display="block"

        var clutter=""
        cart.forEach(function(prod, index){
            clutter+=``
        })
    })
}
