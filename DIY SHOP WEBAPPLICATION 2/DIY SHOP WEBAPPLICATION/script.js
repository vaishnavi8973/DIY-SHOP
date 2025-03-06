const container = document.getElementsByClassName('container')[0];
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
// const qty = document.querySelector('#qty').value;
// alert(qty);
const finalPrice = document.getElementById("fp");

if(container){
    container.addEventListener('click',() => {
        nav.classList.add('active');
    })
}

if(close)
{
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

function Change(){
    var itemval = document.getElementById("qty").value;
    var finalPrice = document.getElementById("fp");
    var price1 = parseInt(itemval)*5600;
    finalPrice.textContent = "Rs." + price1;
    var itemval = document.getElementById("qty1").value;
    var finalPrice = document.getElementById("fp1");
    var price2 = parseInt(itemval)*5600;
    finalPrice.textContent = "Rs." + price2;
    var itemval = document.getElementById("qty2").value;
    var finalPrice = document.getElementById("fp2");
    var price3 = parseInt(itemval)*5600;
    finalPrice.textContent = "Rs." + price3;
    var cart = document.getElementById('cart_sub');
    var ship = document.getElementById('shipping');
    var tot = document.getElementById('total');
    var sum = price1 + price2 + price3;
    var ship_amt=0;
    var total = sum;
    cart.textContent = "Rs." + parseInt(sum);
    if(sum<2000)
    {
        if(sum==0)
            ship_amt=0;
        else
            ship_amt = 50;
        ship.textContent = "Rs." + parseInt(ship_amt);
        total+=ship_amt;    
    }
    else if(sum>=2000 && sum<5000)
    {
        ship_amt = 40;
        ship.textContent = "Rs." + parseInt(ship_amt);
        total+=ship_amt;
    }
    else if(sum>=5000 && sum<8000)
    {
        ship_amt += 30;
        ship.textContent = "Rs." + parseInt(ship_amt);
        total+=ship_amt;
    }
    else if(sum>=8000 && sum<11000)
    {
        ship_amt = 20;
        ship.textContent = "Rs." + parseInt(ship_amt);
        total += ship_amt;
    }
    else if(sum>=11000 && sum<14000)
    {
        ship_amt = 10;
        ship.textContent = "Rs." + parseInt(ship_amt);
        total+=ship_amt;
    }
    else
    {
        ship_amt = 0;
        ship.textContent = "Rs." + parseInt(ship_amt);
        total+=ship_amt;
    }
    
    tot.textContent = "Rs." + parseInt(total);
}

window.viewProductDetails = function(productElement) {
    console.log('viewProductDetails called with:', productElement);
    // Prevent event if clicking on cart icon
    if (window.event.target.classList.contains('cart')) return;
    // Get product details
    const productId = productElement.getAttribute('data-product-id');
    const productName = productElement.querySelector('h5').textContent;
    const productPrice = productElement.querySelector('h4').textContent;
    const productImage = productElement.querySelector('img').src;
    const productBrand = productElement.querySelector('span').textContent;
    // Create a unique session storage key for this specific product
    const productKey = `currentProductDetails_${productId}`;
    // Store product details in sessionStorage instead of localStorage
    sessionStorage.clear(); // Clear previous product details
    sessionStorage.setItem(productKey, JSON.stringify({
        id: productId,
        name: productName,
        price: productPrice,
        image: productImage,
        brand: productBrand
    }));
    // Redirect to product details page
    window.location.href = 'sproduct.html';
}