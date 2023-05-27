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

    const productDesc = document.createElement('p');
    productDesc.classList.add('product__text');
    productDesc.textContent = productData.desc;

    const productPrice = document.createElement('p');
    productPrice.classList.add('product__price');
    productPrice.textContent = `$${productData.price}`;

    const productAdd = document.createElement('a');
    productAdd.classList.add('product__add');
    productAdd.textContent = ' Add to Cart';

    const productAddIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    productAddIcon.setAttribute('width', '27');
    productAddIcon.setAttribute('height', '25');
    productAddIcon.setAttribute('viewBox', '0 0 27 25');
    productAddIcon.setAttribute('fill', 'none');
    productAddIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    const pathElement1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElement1.setAttribute('d', 'M21.9509 23.2667H21.8386C21.2294 23.2667 20.7177 22.7671 20.6735 22.1294C20.629 21.4607 21.1175 20.8785 21.7626 20.8346C21.788 20.8329 21.8145 20.832 21.8405 20.832C22.4575 20.832 22.9743 21.3219 23.0201 21.9487C23.0319 22.1971 22.9914 22.5514 22.736 22.8439L22.73 22.8507L22.7242 22.8575C22.5275 23.0912 22.2607 23.2321 21.9509 23.2667ZM8.21887 23.2604C7.5683 23.2604 7.03906 22.7174 7.03906 22.05C7.03906 21.3832 7.5683 20.8406 8.21887 20.8406C8.86945 20.8406 9.39868 21.3832 9.39868 22.05C9.39868 22.7174 8.86945 23.2604 8.21887 23.2604Z');
    pathElement1.setAttribute('fill', 'white');

    const pathElement2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElement2.setAttribute('d', 'M21.876 22.2662C21.921 22.2549 21.9423 22.2339 21.96 22.2129C21.9678 22.2037 21.9756 22.1946 21.9835 22.1855C22.02 22.1438 22.0233 22.0553 22.0224 22.0105C22.0092 21.9044 21.9185 21.8315 21.8412 21.8315C21.8375 21.8315 21.8336 21.8317 21.8312 21.8318C21.7531 21.8372 21.6653 21.9409 21.6719 22.0625C21.6813 22.1793 21.7675 22.2662 21.8392 22.2662H21.876ZM8.21954 22.2599C8.31873 22.2599 8.39935 22.1655 8.39935 22.0496C8.39935 21.9341 8.31873 21.8401 8.21954 21.8401C8.12042 21.8401 8.03973 21.9341 8.03973 22.0496C8.03973 22.1655 8.12042 22.2599 8.21954 22.2599ZM21.9995 24.2662C21.9517 24.2662 21.8878 24.2662 21.8392 24.2662C20.7017 24.2662 19.7567 23.3545 19.6765 22.198C19.5964 20.9929 20.4937 19.9183 21.6953 19.8364C21.7441 19.8331 21.7928 19.8315 21.8412 19.8315C22.9799 19.8315 23.9413 20.7324 24.019 21.8884C24.0505 22.4915 23.8741 23.0612 23.4898 23.5012C23.1055 23.9575 22.5764 24.2177 21.9995 24.2662ZM8.21954 24.2599C7.01532 24.2599 6.03973 23.2709 6.03973 22.0496C6.03973 20.8291 7.01532 19.8401 8.21954 19.8401C9.42371 19.8401 10.3994 20.8291 10.3994 22.0496C10.3994 23.2709 9.42371 24.2599 8.21954 24.2599ZM21.1984 17.3938H9.13306C8.70013 17.3938 8.31586 17.1005 8.20331 16.6775L4.27753 2.24768H1.52173C0.993408 2.24768 0.560547 1.80859 0.560547 1.27039C0.560547 0.733032 0.993408 0.292969 1.52173 0.292969H4.99933C5.43134 0.292969 5.81561 0.586304 5.9281 1.01025L9.85394 15.4391H20.5576L24.1144 7.13379H12.2578C11.7286 7.13379 11.2957 6.69373 11.2957 6.15649C11.2957 5.61914 11.7286 5.17908 12.2578 5.17908H25.5886C25.9091 5.17908 26.2141 5.34192 26.3896 5.61914C26.566 5.89539 26.5984 6.23743 26.4697 6.547L22.0795 16.807C21.9193 17.1653 21.5827 17.3938 21.1984 17.3938Z');
    pathElement2.setAttribute('fill', 'white');

    const pathElement3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElement3.setAttribute('d', 'M21.876 22.2662C21.921 22.2549 21.9423 22.2339 21.96 22.2129C21.9678 22.2037 21.9756 22.1946 21.9835 22.1855C22.02 22.1438 22.0233 22.0553 22.0224 22.0105C22.0092 21.9044 21.9185 21.8315 21.8412 21.8315C21.8375 21.8315 21.8336 21.8317 21.8312 21.8318C21.7531 21.8372 21.6653 21.9409 21.6719 22.0625C21.6813 22.1793 21.7675 22.2662 21.8392 22.2662H21.876ZM8.21954 22.2599C8.31873 22.2599 8.39935 22.1655 8.39935 22.0496C8.39935 21.9341 8.31873 21.8401 8.21954 21.8401C8.12042 21.8401 8.03973 21.9341 8.03973 22.0496C8.03973 22.1655 8.12042 22.2599 8.21954 22.2599ZM21.9995 24.2662C21.9517 24.2662 21.8878 24.2662 21.8392 24.2662C20.7017 24.2662 19.7567 23.3545 19.6765 22.198C19.5964 20.9929 20.4937 19.9183 21.6953 19.8364C21.7441 19.8331 21.7928 19.8315 21.8412 19.8315C22.9799 19.8315 23.9413 20.7324 24.019 21.8884C24.0505 22.4915 23.8741 23.0612 23.4898 23.5012C23.1055 23.9575 22.5764 24.2177 21.9995 24.2662ZM8.21954 24.2599C7.01532 24.2599 6.03973 23.2709 6.03973 22.0496C6.03973 20.8291 7.01532 19.8401 8.21954 19.8401C9.42371 19.8401 10.3994 20.8291 10.3994 22.0496C10.3994 23.2709 9.42371 24.2599 8.21954 24.2599ZM21.1984 17.3938H9.13306C8.70013 17.3938 8.31586 17.1005 8.20331 16.6775L4.27753 2.24768H1.52173C0.993408 2.24768 0.560547 1.80859 0.560547 1.27039C0.560547 0.733032 0.993408 0.292969 1.52173 0.292969H4.99933C5.43134 0.292969 5.81561 0.586304 5.9281 1.01025L9.85394 15.4391H20.5576L24.1144 7.13379H12.2578C11.7286 7.13379 11.2957 6.69373 11.2957 6.15649C11.2957 5.61914 11.7286 5.17908 12.2578 5.17908H25.5886C25.9091 5.17908 26.2141 5.34192 26.3896 5.61914C26.566 5.89539 26.5984 6.23743 26.4697 6.547L22.0795 16.807C21.9193 17.1653 21.5827 17.3938 21.1984 17.3938Z');
    pathElement3.setAttribute('fill', 'white');




    mainproductDiv.appendChild(productDiv);
    productDiv.appendChild(productImg);
    productDiv.appendChild(productContent);
    productContent.appendChild(productLink);
    productContent.appendChild(productDesc);
    productContent.appendChild(productPrice);
    productDiv.appendChild(productAdd);
    productAdd.prepend(productAddIcon);
    productAddIcon.append(pathElement1);
    productAddIcon.append(pathElement2);
    productAddIcon.append(pathElement3);
});


const cartDivEl = document.querySelector('.cart__items__div');
const productAdd = document.querySelectorAll('.product__add');
const cartBlockLeftEl = document.querySelector('.cart__block__left');

for (const item of productAdd) {
    item.addEventListener('click', function() {
        const cartBlockLeftCartEl = document.createElement('div');
        cartBlockLeftCartEl.classList.add('cart__block__left__card');

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('alt', 'cart_1');
        productImgCart.src = './img/product_cart_1.jpg';

        const cartBlockLeftCardInfo = document.createElement('div');
        cartBlockLeftCardInfo.classList.add('cart__block__left__card__info');

        const cartBlockLeftCardInfoLinks = document.createElement('div');
        cartBlockLeftCardInfoLinks.classList.add('cart__block__left__card__info__links');

        const cartBlockLeftCardInfoLinksA1 = document.createElement('a');
        cartBlockLeftCardInfoLinksA1.classList.add('cart__block__left__card__info__a');
        cartBlockLeftCardInfoLinksA1.innerHTML = 'MANGO PEOPLE <br>';

        const cartBlockLeftCardInfoLinksA2 = document.createElement('a');
        cartBlockLeftCardInfoLinksA2.classList.add('cart__block__left__card__info__a');
        cartBlockLeftCardInfoLinksA2.textContent = 'T-SHIRT';

        const cartBlockLeftCardInfoText = document.createElement('div');
        cartBlockLeftCardInfoText.classList.add('cart__block__left__card__info__text');

        const cartBlockLeftCardInfoTextP1 = document.createElement('p');
        cartBlockLeftCardInfoTextP1.textContent = 'Price: ';
        const cartBlockLeftCardInfoTextPrice = document.createElement('span');
        cartBlockLeftCardInfoTextPrice.classList.add('cart__block__left__card__info__text__price');
        cartBlockLeftCardInfoTextPrice.textContent = '$300';

        const cartBlockLeftCardInfoTextP2 = document.createElement('p');
        cartBlockLeftCardInfoTextP2.textContent = 'Color: Red';

        const cartBlockLeftCardInfoTextP3 = document.createElement('p');
        cartBlockLeftCardInfoTextP3.textContent = 'Size: Xl';

        const cartBlockLeftCardInfoQuantity = document.createElement('div');
        cartBlockLeftCardInfoQuantity.classList.add('cart__block__left__card__info__quantity');

        const cartBlockLeftCardInfoQuantityP = document.createElement('p');
        cartBlockLeftCardInfoQuantityP.textContent = 'Quantity:';

        const cartblockLeftCardInfoQuantityInput = document.createElement('input');
        cartblockLeftCardInfoQuantityInput.classList.add('cart__block__left__card__info__quantity__input');
        cartblockLeftCardInfoQuantityInput.type = 'number';
        cartblockLeftCardInfoQuantityInput.placeholder = '2';

        const cartBlockClose = document.createElement('a');
        cartBlockClose.classList.add('cart__block_close');

        const cartBlockCloseIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        cartBlockCloseIcon.setAttribute('width', '18');
        cartBlockCloseIcon.setAttribute('height', '18');
        cartBlockCloseIcon.setAttribute('viewBox', '0 0 18 18');
        cartBlockCloseIcon.setAttribute('fill', 'none');
        cartBlockCloseIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        const cartBlockCloseIconpathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        cartBlockCloseIconpathElement.setAttribute('d', 'M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z');
        cartBlockCloseIconpathElement.setAttribute('fill', '#575757');

        cartBlockLeftEl.append(cartBlockLeftCartEl);
        cartBlockLeftCartEl.append(productImgCart);
        cartBlockLeftCartEl.append(cartBlockLeftCardInfo);
        cartBlockLeftCardInfo.append(cartBlockLeftCardInfoLinks);
        cartBlockLeftCardInfoLinks.append(cartBlockLeftCardInfoLinksA1);
        cartBlockLeftCardInfoLinks.append(cartBlockLeftCardInfoLinksA2);
        cartBlockLeftCardInfo.append(cartBlockLeftCardInfoText);
        cartBlockLeftCardInfoText.append(cartBlockLeftCardInfoTextP1);
        cartBlockLeftCardInfoTextP1.append(cartBlockLeftCardInfoTextPrice);
        cartBlockLeftCardInfoText.append(cartBlockLeftCardInfoTextP2);
        cartBlockLeftCardInfoText.append(cartBlockLeftCardInfoTextP3);
        cartBlockLeftCardInfoText.append(cartBlockLeftCardInfoQuantity);
        cartBlockLeftCardInfoQuantity.append(cartBlockLeftCardInfoQuantityP);
        cartBlockLeftCardInfoQuantity.append(cartblockLeftCardInfoQuantityInput);
        cartBlockLeftCartEl.append(cartBlockClose);
        cartBlockClose.append(cartBlockCloseIcon);
        cartBlockCloseIcon.append(cartBlockCloseIconpathElement);

        cartBlockClose.addEventListener('click', function() {
            cartBlockLeftCartEl.remove();
        });
    });
}

cartBlockLeftEl.addEventListener('DOMNodeInserted', function() {
    cartDivEl.style.display = 'block';
});