var products = document.getElementsByClassName('product');
var productsBox = document.getElementById('products');

var newInnerHtml = '';

function elementTempate (name, description, price, imageSrc) {
    return `
    <div class="product">
        <img src="${imageSrc}" />
        <div>
            <div>
                <div class="productName">${name}</div>
                <div class="productDescription">${description}</div>
            </div>
            <div class="productPriceWrapper">
                <div class="productPrice">$${price}</div>
            </div>
        </div>
    </div>
    `
}

for (const prod of products) {
    newInnerHtml += elementTempate(prod.dataset.name, prod.innerHTML, prod.dataset.price, prod.dataset.imageSrc);
    newInnerHtml += `\n`;
}

productsBox.innerHTML = newInnerHtml;