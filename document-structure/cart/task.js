const products = document.querySelectorAll('.product')
const cartProducts = document.querySelector('.cart__products')

for (product of products) {
    let controlBtn = product.querySelectorAll('.product__quantity-control')
    let quantity = product.querySelector('.product__quantity-value')
    let addBtn = product.querySelector('.product__add')
    let id = product.getAttribute('data-id')
    let img = product.querySelector('.product__image').src
    
    
    controlBtn.forEach(function (btn) {
        btn.addEventListener('click', (event) => {
            if (event.target.classList.contains('product__quantity-control_dec')) {
                if (Number(quantity.innerText) > 1) {
                    quantity.innerText = Number(quantity.innerText) - 1
                }
            } if (event.target.classList.contains('product__quantity-control_inc')) {
                quantity.innerText = Number(quantity.innerText) + 1
            }
        })
    });

    addBtn.addEventListener('click', (event) => {
        let productsAdded = document.querySelectorAll('.cart__product')
        let existingProduct = Array.from(productsAdded).find(product => product.getAttribute('data-id') === id)
        if (existingProduct) {
            let existingQuantity = existingProduct.querySelector('.cart__product-count')
            existingQuantity.innerText = Number(existingQuantity.innerText) + Number(quantity.innerText)
        } else {
            newProduct = `
                <div class="cart__product" data-id="${id}">
                    <img class="cart__product-image" src="${img}">
                    <div class="cart__product-count">${quantity.innerText}</div>
                </div>`
            cartProducts.insertAdjacentHTML('beforeEnd', newProduct)
        }
    })     
}