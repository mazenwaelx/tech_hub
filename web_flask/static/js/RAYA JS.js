// Existing fruit and vegetable products list
const fruitVegetableProducts = [
    {
        id: 6,
        image: '../static/images/images/processor1.jpg',
        title: 'AMD RYZEN 5 5500 3.6GHz 6 CORE AM4 MPK',
        price: 4650,
        quantity: 1
    },
    {
        id: 8,
        image: '../static/images/images/processor2.jpg',
        title: 'AMD Ryzen 7 7800X3D 8-Core, 16-Thread Desktop Processor',
        price: 21000,
        quantity: 1
    },
    {
        id: 9,
        image: '../static/images/images/processor3.jpg',
        title: 'AMD - Ryzen 9 7900X3D 12-Core - 24-Thread 4.4 GHz (5.6 GHz Max Boost) Socket AM5 Unlocked Desktop Processor',
        price: 24000,
        quantity: 1
    },
    {
        id: 7,
        image: '../static/images/images/processor4.jpg',
        title: 'AMD - Ryzen 9 7950X3D 16-Core - 32-Thread 4.2 GHz (5.7 GHz Max Boost) Socket AM5 Unlocked Desktop Processor',
        price: 30500,
        quantity: 1
    },
    {
        id: 0,
        image: '../static/images/images/processor5.jpg',
        title: 'AMD Ryzen 5 5600G 6-Core 12-Thread Desktop Processor with Radeon Graphics',
        price: 6500,
        quantity: 1
    },
    {
        id: 10,
        image: '../static/images/images/processor6.jpg',
        title: 'AMD Ryzen 5 5600GT - Ryzen 5 5000 Series 6-Core 3.6 GHz Socket AM4 65W AMD Radeon Graphics Processor',
        price: 7250,
        quantity: 1
    },
    {
        id: 11,
        image: '../static/images/images/processor7.jpg',
        title: 'AMD Ryzen 5 7500F 6 Core 3.7GHz 32MB Cache - Socket AM5 MPK ',
        price: 8750,
        quantity: 1
    },
    {
        id: 12,
        image: '../static/images/images/proccesor8.jpg',
        title: 'AMD Ryzen 5 7600X - 6-Core 4.7 GHz - Socket AM5 - 105W Desktop Processor',
        price: 12000,
        quantity: 1
    },
    {
        id: 3,
        image: '../static/images/images/proccesor9.jpg',
        title: 'AMD Ryzen 5 8400F (4.2 GHz) - Ryzen 5 8000 Series 6-Core/ 12-Threads, Socket AM5, 65W Processor',
        price: 8800,
        quantity: 1
    }
];

// Adding meat products to the existing fruitVegetableProducts array
const meatProducts = [
    {
        id: 31,
        image: '../static/images/images/graphic1.jpg',
        title: 'GALAX GeForce RTX™ 3050 6GB EX',
        price: 9500,
        quantity: 1
    },
    {
        id: 23,
        image: '../static/images/images/graphic2.jpg',
        title: 'GALAX GeForce RTX™ 4060 Ti 8GB EX 1-Click OC',
        price: 21000,
        quantity: 1
    },
    {
        id: 1,
        image: '../static/images/images/graphic3.jpg',
        title: 'ASUS Dual GeForce RTX 3060 V2 OC Edition 12GB GDDR6 Gaming Graphics Card',
        price: 15500,
        quantity: 1
    },
    {
        id: 30,
        image: '../static/images/images/graphic4.jpg',
        title: 'ASUS Dual GeForce RTX 4060 Ti OC Edition 8GB GDDR6',
        price: 21500,
        quantity: 1
    },
    {
        id: 32,
        image: '../static/images/images/graphic5.jpg',
        title: 'ASUS Dual GeForce RTX™ 3050 OC Edition 6GB GDDR6',
        price: 9900,
        quantity: 1
    },
    {
        id: 24,
        image: '../static/images/images/graphic6.jpg',
        title: 'ASUS Dual GeForce RTX™ 4060 OC Edition 8GB GDDR6 (PCIe 4.0, 8GB GDDR6, DLSS 3, HDMI 2.1a, DisplayPort 1.4a)',
        price: 16000,
        quantity: 1
    },
    {
        id: 21,
        image: '../static/images/images/graphic7.jpg',
        title: 'ASUS Dual GeForce RTX™ 4060 Ti 16GB OC Edition GDDR6',
        price: 26000,
        quantity: 1
    },
    {
        id: 27,
        image: '../static/images/images/graphic8.jpg',
        title: 'ASUS Dual GeForce RTX™ 4070 Super EVO OC Edition 12GB GDDR6X',
        price: 35000,
        quantity: 1
    },
    {
        id: 28,
        image: '../static/images/images/graphic9.jpg',
        title: 'ASUS Dual GeForce® RTX 4070 OC Edition 12GB GDDR6X',
        price: 31000,
        quantity: 1
    }
];

// Adding meat products to the existing fruitVegetableProducts array
const bakeryProducts = [
    {
        id: 43,
        image: '../static/images/images/ram1.jpg',
        title: 'T-FORCE DELTAα RGB DDR5 16G 5600MHZ',
        price: 3500,
        quantity: 1
    },
    {
        id: 39,
        image: '../static/images/images/ram2.jpg',
        title: 'ADATA XPG D50 16GB (2X8) 3200 CL16 RGB',
        price: 2400,
        quantity: 1
    },
    {
        id: 40,
        image: '../static/images/images/ram3.jpg',
        title: 'ADATA XPG D50G 16GB (2X8) 3600 CL18 RGB',
        price: 2500,
        quantity: 1
    },
    {
        id: 36,
        image: '../static/images/images/ram4.jpg',
        title: 'ADATA XPG GAMMIX D20 8GB DDR4 3200MHz CL16',
        price: 900,
        quantity: 1
    },
    {
        id: 41,
        image: '../static/images/images/ram5.jpg',
        title: 'AORUS RGB Memory DDR4 16GB (2x8GB) 3333MT/s',
        price: 2500,
        quantity: 1
    },
    {
        id: 42,
        image: '../static/images/images/ram6.jpg',
        title: 'Crucial RAM, 16GB DDR4, 3200MHz, UDIMM',
        price: 1900,
        quantity: 1
    },
    {
        id: 38,
        image: '../static/images/images/ram7.jpg',
        title: 'Crucial 16GB DDR4-2666 UDIMM',
        price: 1750,
        quantity: 1
    },
    {
        id: 35,
        image: '../static/images/images/ram8.jpg',
        title: 'Crucial 8GB DDR4-2666 UDIMM',
        price: 850,
        quantity: 1
    },
    {
        id: 44,
        image: '../static/images/images/ram9.jpg',
        title: 'GIGABYTE Memory 16GB (2x8GB) 2666MHz',
        price: 1500,
        quantity: 1
    },
];

// Adding meat products to the existing fruitVegetableProducts array
const snacksProducts = [
    {
        id: 55,
        image: '../static/images/images/Mother1.png',
        title: 'ASUS ROG CROSSHAIR X870E HERO',
        price: 10000,
        quantity: 1
    },
    {
        id: 54,
        image: '../static/images/images/Mother2.png',
        title: 'GIGABYTE B760 AORUS MASTER DDR4',
        price: 13500,
        quantity: 1
    },
    {
        id: 53,
        image: '../static/images/images/Mother3.png',
        title: 'GIGABYTE B760 GAMING X (rev. 1.0) LGA 1700 DDR5',
        price: 8300,
        quantity: 1
    },
    {
        id: 52,
        image: '../static/images/images/Mother4.png',
        title: 'ASUS ROG STRIX X870E-E GAMING WIFI',
        price: 15200,
        quantity: 1
    },
    {
        id: 51,
        image: '../static/images/images/Mother5.png',
        title: 'ASUS Prime A620M-K Motherboard Socket AMD A620 (Ryzen 7000, Micro-ATX, DDR5 Memory, PCIe 4.0, BIOS Flashback, USB 3.2 Gen 2, Aura Sync)',
        price: 5000,
        quantity: 1
    },
    {
        id: 50,
        image: '../static/images/images/Mother6.png',
        title: 'ASUS Prime B650-PLUS AMD B650(Ryzen 7000) ATX Motherboard',
        price: 9500,
        quantity: 1
    },
    {
        id: 49,
        image: '../static/images/images/Mother7.png',
        title: 'ASUS Prime B760-PLUS Intel (13th and 12th Gen) DDR5 LGA 1700 ATX motherboard',
        price: 7500,
        quantity: 1
    },
    {
        id: 48,
        image: '../static/images/images/Mother8.png',
        title: 'ASUS Prime B760-PLUS D4',
        price: 6700,
        quantity: 1
    },
    {
        id: 47,
        image: '../static/images/images/Mother9.png',
        title: 'ASUS PRIME B760M-A D4-CSM Intel, 1700, DDR4',
        price: 6200,
        quantity: 1
    }
];

const dairyProducts = [
    {
        id: 64,
        image: '../static/images/images/Desk1.jpg',
        title: 'AGON PRO AG276QZD 27" - OLED (10bit) - 2K - 240Hz - 0.01MS PIXEL RESPONSE TIME',
        price: 41000,
        quantity: 1
    },
    {
        id: 63,
        image: '../static/images/images/Desk2.jpg',
        title: 'AOC 24G2SP 24" Frameless Gaming Monitor, Full HD IPS, 165Hz, 1ms, Height Adjustable Stand ,Black',
        price: 6750,
        quantity: 1
    },
    {
        id: 62,
        image: '../static/images/images/Desk3.jpg',
        title: 'AOC 24G4 - 24"- 1080P - 1MS GTG - 180hz - HDR10 - FAST IPS - Adaptive Sync - Delta E < 2',
        price: 8000,
        quantity: 1
    },
    {
        id: 61,
        image: '../static/images/images/Desk4.jpg',
        title: 'AOC 24G4E - 24 inch - 1080P - 1MS GTG - 180hz - HDR10 - FAST IPS - Adaptive Sync - Delta E < 2',
        price: 7600,
        quantity: 1
    },
    {
        id: 60,
        image: '../static/images/images/Desk5.jpg',
        title: 'AOC 27G4 - 27"- 1080P - 1MS GTG - 180hz - HDR10 - FAST IPS - Adaptive Sync - Delta E < 2',
        price: 9250,
        quantity: 1
    },
    {
        id: 59,
        image: '../static/images/images/Desk6.jpg',
        title: 'AOC 27G4E - 27 INCH - 1080P - 1MS GTG - 180hz - HDR10 - FAST IPS - Adaptive Sync - Delta E < 2',
        price: 8800,
        quantity: 1
    },
    {
        id: 58,
        image: '../static/images/images/Desk7.jpg',
        title: 'AOC C27G3 27 inch VA Curved FreeSync 1ms 165Hz Monitor',
        price: 8000,
        quantity: 1
    },
    {
        id: 57,
        image: '../static/images/images/Desk8.jpg',
        title: 'AOC CQ27G3S 27" 2k VA 165HZ 1MS GAMING MONITOR',
        price: 9500,
        quantity: 1
    },
    {
        id: 65,
        image: '../static/images/images/Desk9.jpg',
        title: 'AOC Gaming C27G2Z 27" - VA - 0.5MS - 240Hz - Curved 1500R - AMD FreeSync Premium',
        price: 10500,
        quantity: 1
    }
];

const babyProducts = [
    {
        id: 71,
        image: '../static/images/Case2.jpg',
        title: 'XIGMATEK Endorphin Air Arctic V2',
        price: 4200,
        quantity: 1
    },
    {
        id: 70,
        image: '../static/images/Case2.jpg',
        title: "XIGMATEK Endorphin WD Arctic — WH,EATX,U3x1",
        price: 5300,
        quantity: 1
    },
    {
        id: 69,
        image: '../static/images/Case3.jpg',
        title: 'Xigmatek Master X II Pro ARGB',
        price: 4100,
        quantity: 1
    },
    {
        id: 68,
        image: '../static/images/Case4.jpg',
        title: 'Xigmatek Master X II Pro ARGB + X-Power 700W 80',
        price: 3700,
        quantity: 1
    },
    {
        id: 67,
        image: '../static/images/Case5.jpg',
        title: "XIGMATEK MASTER X II 4fan ARGBX",
        price: 3750,
        quantity: 1
    },
    {
        id: 67,
        image: '../static/images/Case6.jpg',
        title: "ASUS A21 PLUS Case supports Micro-ATX",
        price: 5000,
        quantity: 1
    },
    {
        id: 67,
        image: '../static/images/Case7.jpg',
        title: "XIGMATEK Aqua III Argb Mid Tower Case",
        price: 3400,
        quantity: 1
    },
    {
        id: 67,
        image: '../static/images/Case8.jpg',
        title: "XIGMATEK Aqua III Arctic Argb Mid Tower Case",
        price: 3600,
        quantity: 1
    },
    {
        id: 66,
        image: '../static/images/Case9.jpg',
        title: "JXigmatek Alphard ARGB + Asgard 750W 80+ Bronze Super Tower Case",
        price: 4600,
        quantity: 1
    }

];

const medicineProducts = [
    {
        id: 80,
        image: '../static/images/images/power1.jpg',
        title: 'POWER SUPPLY COOLER MASTER MWE Gold 750 V2 ATX 3.0',
        price: 5500,
        quantity: 1
    },
    {
        id: 79,
        image: '../static/images/images/power2.jpg',
        title: 'XPG Core Reactor II Modular PSU ATX3.0 - 80 Plus Gold - ATX - Fully Modular Power Supply 1000 Watt',
        price: 8000,
        quantity: 1
    },
    {
        id: 78,
        image: '../static/images/images/power9.jpg',
        title: 'XPG CORE REACTOR II VE Modular 750W Power Supply',
        price: 7000,
        quantity: 1
    },
    {
        id: 77,
        image: '../static/images/images/power3.jpg',
        title: 'ANTEC NeoECO, NE1000G M ATX3.0, 1000W Full Modular PSU, 80 Plus Gold Certified',
        price: 8500,
        quantity: 1
    },
    {
        id: 76,
        image: '../static/images/images/power4.jpg',
        title: 'ANTEC NeoECO, NE1300G M ATX3.0, 1300W Full Modular PSU',
        price: 9500,
        quantity: 1
    },
    {
        id: 75,
        image: '../static/images/images/power5.jpg',
        title: 'Antec NeoECO, NE850G M ATX3.0, 850W Full Modular PSU, 80 Plus Gold Certified',
        price: 7000,
        quantity: 1
    },
    {
        id: 74,
        image: '../static/images/images/power6.jpg',
        title: 'Antec NeoEco750M 750 Watt Full Modular Power Supply with 80 Plus',
        price: 4600,
        quantity: 1
    },
    {
        id: 73,
        image: '../static/images/images/power7.jpg',
        title: 'Antec-PSU Sleeved Extension Cable Kit-PSUSCB30-201-Red/Black',
        price: 8000,
        quantity: 1
    },
    {
        id: 72,
        image: '../static/images/images/power8.jpg',
        title: 'Antec-PSU Sleeved Extension Cable Kit-PSUSCB30-205-Purple/Black',
        price: 800,
        quantity: 1
    }
];

const PopularPackges = [
    {
        id: 88,
        image: '../static/images/images/pack6.jpeg',
        title: 'Snack Attack Bundle',
        price: 90,
        quantity: 1
    },
    {
        id: 87,
        image: '../static/images/images/pack5.jpeg',
        title: 'Baker Delight Box',
        price: 240,
        quantity: 1
    },
    {
        id: 86,
        image: '../static/images/images/pack4.jpeg',
        title: 'Baby Essentials Bundle',
        price: 200.00,
        quantity: 1
    },
    {
        id: 85,
        image: '../static/images/images/pack3.jpeg',
        title: 'Butcher Choice Bundle',
        price: 250.00,
        quantity: 1
    },
    {
        id: 84,
        image: '../static/images/images/pack2.jpeg',
        title: 'Health Essentials Kit',
        price: 490.00,
        quantity: 1
    },
    {
        id: 83,
        image: '../static/images/images/pack1.png',
        title: 'Green Garden Bundle',
        price: 340.00,
        quantity: 1
    }
];


// Merge fruitVegetableProducts and meatProducts into a single categories array
const categories = [...fruitVegetableProducts, ...meatProducts, ...bakeryProducts, ...snacksProducts, ...dairyProducts, ...babyProducts, ...medicineProducts];
let i = 0;
// Function to switch between displaying fruit/vegetable and meat products
function switchCategory(category) {
    if (category === 'fruitVegetableProducts') {
        document.getElementById('categoryTitle').textContent = 'Processors';
    } else if (category === 'meatProducts') {
        document.getElementById('categoryTitle').textContent = 'Graphic Card';
    }
    else if (category === 'bakeryProducts') {
        document.getElementById('categoryTitle').textContent = 'Ram';
    }
    else if (category === 'snacksProducts') {
        document.getElementById('categoryTitle').textContent = 'Motherboard';
    }
    else if (category === 'dairyProducts') {
        document.getElementById('categoryTitle').textContent = 'Desktop';
    }
    else if (category === 'babyProducts') {
        document.getElementById('categoryTitle').textContent = 'Computer Case';
    }
    else if (category === 'medicineProducts') {
        document.getElementById('categoryTitle').textContent = 'Power Supply';
    }

    
    displayProducts(category);
}
// Initial display of products (default: fruit/vegetable products)
displayProducts('fruitVegetableProducts');
// Function to display products based on the selected category
function displayProducts(category) {
    let products;
    if (category === 'fruitVegetableProducts') {
        products = fruitVegetableProducts;
    } else if (category === 'meatProducts') {
        products = meatProducts;
    } else if (category === 'bakeryProducts') {
        products = bakeryProducts;
    } else if (category === 'snacksProducts') {
        products = snacksProducts;
    }else if (category === 'dairyProducts') {
        products = dairyProducts;
    }else if(category === 'babyProducts') {
        products = babyProducts;
    }else if(category === 'medicineProducts') {
        products = medicineProducts;
    }else {
        products = [];
    }
    document.getElementById('root').innerHTML = products.map((item) => {
        var { image, title, price } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>LE ${price}.00</h2>
                    <button onclick='addtocart(${item.id})'>Add to cart</button>
                </div>
            </div>`
        );
    }).join('');
}
var cart = []; // This holds data sent to Flask
var dcart = []; // This holds data for display only

function addtocart(productId) {
    const selectedProduct = categories.find(item => item.id === productId);
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex > -1) {
        cart[itemIndex].quantity += 1;
    } else {
        // Add the product details to the cart
        const { id, title, image, price, quantity } = selectedProduct;
        cart.push({ id, title, image, price, quantity });
    }
    
    // Update the display-only cart (dcart)
    const displayItemIndex = dcart.findIndex(item => item.id === productId);
    if (displayItemIndex > -1) {
        dcart[displayItemIndex].quantity += 1;
    } else {
        dcart.push({ ...selectedProduct, quantity: 1 });
    }
    
    // Update the cart display
    displaycart();
    
    // Prepare cart data for Flask
    const cartDataForServer = cart.map(item => ({
        title: item.title,
        image: item.image,
        price: item.price,
        quantity: item.quantity
    }));
    
    // Send cart data to Flask
    fetch('/process_cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart: cartDataForServer }), // Pass processed cart data
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to send cart data to server');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Optional: Handle success response from server
        
        // Clear the cart after successfully sending data to server
        cart.length = 0;
        displaycart(); // Update cart display to show it's empty
    })
    .catch(error => {
        console.error('Error:', error); // Optional: Handle error case
    });
}

function delElement(a) {
    const productTitle = dcart[a].title;

    // Send DELETE request to Flask server to remove item from storage
    fetch(`/remove_item_by_title/${encodeURIComponent(productTitle)}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error('Error:', data.error);
        } else {
            // Update the display-only cart (dcart) based on server response
            if (dcart[a].quantity > 1) {
                dcart[a].quantity -= 1;
            } else {
                dcart.splice(a, 1);
            }

            // Update the cart display
            displaycart();
        }
    })
    .catch(error => {
        console.error('Error:', error); // Optional: Handle error case
    });
}



function displaycart() {
    let total = 0;
    document.getElementById("count").innerHTML = dcart.length;

    if (dcart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "LE " + 0 + ".00";
    } else {
        // Calculate the total price
        total = dcart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        document.getElementById("total").innerHTML = "LE " + total + ".00";

        // Display cart items on the client side
        document.getElementById("cartItem").innerHTML = dcart.map((item, index) => {
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${item.image}>
                    </div>
                    <p style='font-size:12px;'>${item.title}</p>
                    <p style='font-size:12px;'>Quantity: ${item.quantity}</p>
                    <h2 style='font-size: 15px;'>LE ${item.price * item.quantity}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>`
            );
        }).join('');
    }
}

// Assuming you have included this script at the end of your HTML body or use window.onload or DOMContentLoaded event

// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Select the 'Proceed to Checkout' button
    const checkoutButton = document.getElementById('checkoutButton');

    if (checkoutButton) {
        checkoutButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default action of anchor tag

            // Fetch cart data or use existing data from your page
            const cartData = JSON.parse(localStorage.getItem('cart')) || [];

            // Prepare payload for POST request
            const payload = {
                cart: cartData
            };

            // Send POST request to /checkout endpoint
            fetch('/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Handle successful response
                console.log(data.message); // Log success message
                // Optionally, redirect to checkout details page or handle UI updates
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
                // Optionally, display an error message to the user
            });
        });
    }
});
//commented

document.addEventListener('DOMContentLoaded', function() {
    // Select the search form and input
    const searchForm = document.getElementById('search-boxx');
    const searchInput = document.getElementById('search-input');

    // Add an event listener to the search form
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const query = searchInput.value.toLowerCase(); // Get the search query
        filterProducts(query); // Call the filter function
    });

    // Function to filter products based on the search query
    function filterProducts(query) {
        // Filter the categories array based on the query
        const filteredProducts = categories.filter(product => product.title.toLowerCase().includes(query));
        displayFilteredProducts(filteredProducts); // Display the filtered products
    }

    // Function to display filtered products
    function displayFilteredProducts(products) {
        document.getElementById('root').innerHTML = products.map((item) => {
            var { image, title, price } = item;
            return (
                `<div class='box'>
                    <div class='img-box'>
                        <img class='images' src=${image}></img>
                    </div>
                    <div class='bottom'>
                        <p>${title}</p>
                        <h2>LE ${price}.00</h2>
                        <button onclick='addtocart(${item.id})'>Add to cart</button>
                    </div>
                </div>`
            );
        }).join('');
    }

});
function changeText(link) {
    link.innerHTML = 'Order Added &#10004;'; 
    link.classList.add('pressed');
}




