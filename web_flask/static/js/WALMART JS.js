// Existing fruit and vegetable products list
const fruitVegetableProducts = [
    {
        id: 12,
        image: '../static/images/images/build1.png',
        title: 'RYZEN 5 7500F BUNDLES',
        price: 37000,
        quantity: 1
    },
    {
        id: 11,
        image: '../static/images/images/build2.png',
        title: 'RYZEN 7 7800X3D BUNDLE',
        price: 97000,
        quantity: 1
    },
    {
        id: 10,
        image: '../static/images/images/build3.png',
        title: 'RYZEN 9 7950X3D BUNDLE',
        price: 192500,
        quantity: 1
    },
    {
        id: 9,
        image: '../static/images/images/build4.png',
        title: 'RYZEN 5 8400F BUNDLE',
        price: 36000,
        quantity: 1
    },
    {
        id: 8,
        image: '../static/images/images/build5.png',
        title: 'CORE I5 12400F BUNDLES',
        price: 28000,
        quantity: 1
    },
    {
        id: 7,
        image: '../static/images/images/build6.png',
        title: '13400F BUNDLES',
        price: 36000,
        quantity: 1
    },
    {
        id: 6,
        image: '../static/images/images/build7.png',
        title: '14400F BUNDLES',
        price: 50500,
        quantity: 1
    },
    {
        id: 5,
        image: '../static/images/images/build8.png',
        title: 'ASUS TUF GAMIG BUNDLE',
        price: 110000,
        quantity: 1
    },
    {
        id: 4,
        image: '../static/images/images/build9.png',
        title: 'INTEL CORE I7 14700K BUNDLE',
        price: 112500,
        quantity: 1
    }
];




// Merge fruitVegetableProducts and meatProducts into a single categories array
const categories = [...fruitVegetableProducts];
let i = 0;
// Function to switch between displaying fruit/vegetable and meat products
function switchCategory(category) {
    if (category === 'fruitVegetableProducts') {
        document.getElementById('categoryTitle').textContent = 'Fruits & Vegetables';
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



