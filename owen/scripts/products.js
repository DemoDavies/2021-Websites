var products = document.getElementsByClassName('product');
var productsBox = document.getElementById('products');

var newInnerHtml = '';

function elementTempate (name, description, price, imageSrc) {
    var imageSrcSplit = imageSrc.split('.');
    var src;
    if (imageSrcSplit[1].toLowerCase() != 'webp') src = `src="${imageSrcSplit[0]}_200.${imageSrcSplit[1]}" srcset="${imageSrcSplit[0]}_200.${imageSrcSplit[1]} 1x, ${imageSrcSplit[0]}_300.${imageSrcSplit[1]} 1.5x, ${imageSrcSplit[0]}_400.${imageSrcSplit[1]} 2x,${imageSrcSplit[0]}_500.${imageSrcSplit[1]} 2.5x, ${imageSrcSplit[0]}_600.${imageSrcSplit[1]} 3x"`;
    else src = `src="${imageSrc}"`;
    return `
    <div class="product">
        <img width="200" ${src} loading="lazy" decoding="async" alt="${name} product image"/>
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