const productsData = JSON.parse(items);

const mainproductDiv = document.querySelector('.products__content');

productsData.forEach(productData => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const productImg = document.createElement('img');
    productImg.classList.add('product__img');
    productImg.src = productData.img;
    productImg.setAttribute('alt', productData.alt);


    const productContent = document.createElement('div');
    productContent.classList.add('product__content');

    const productLink = document.createElement('a');
    productLink.classList.add('product__heading');
    productLink.textContent = productData.title;
    productLink.href = '#';

    const productDesc = document.createElement('p');
    productDesc.classList.add('product__text');
    productDesc.textContent = productData.desc;

    const productPrice = document.createElement('p');
    productPrice.classList.add('product__price');
    productPrice.textContent = `$${productData.price}`;


    mainproductDiv.appendChild(productDiv);
    productDiv.appendChild(productImg);
    productDiv.appendChild(productContent);
    productContent.appendChild(productLink);
    productContent.appendChild(productDesc);
    productContent.appendChild(productPrice);
});