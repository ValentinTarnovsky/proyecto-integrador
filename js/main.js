let slider = document.querySelector('.slider .slider__list');
let items = document.querySelectorAll('.slider .slider__list .slider__item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .slider__dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(() => { next.click() }, 5500);
function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';
    let last_active_dot = document.querySelector('.slider .slider__dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { next.click() }, 3000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    })
})

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.button--add').forEach(function (button) {
        button.addEventListener('click', function () {
            let cartCount = parseInt(document.querySelector('.cart h2').textContent);

            if (cartCount < 10) {
                cartCount += 1;
                document.querySelector('.cart h2').textContent = cartCount;
            } else {
                alert("¡Ya has alcanzado el máximo de productos en el carrito!");
            }
        });
    });

    document.querySelectorAll('.button--remove').forEach(function (button) {
        button.addEventListener('click', function () {
            let cartCount = parseInt(document.querySelector('.cart h2').textContent);

            if (cartCount > 0) {
                cartCount -= 1;
                document.querySelector('.cart h2').textContent = cartCount;
            } else {
                alert("No hay productos en el carrito para remover.");
            }
        });
    });
});


// Primer formulario
const formProduct = document.querySelector('form:first-of-type');
const titleInput = document.getElementById('title');
const priceInput = document.getElementById('price');
const stockInput = document.getElementById('stock');
const brandInput = document.getElementById('brand');
const categoryInput = document.getElementById('category');
const productDescriptionInput = document.getElementById('product_description');
const productImagesInput = document.getElementById('product_images');

function validateTitle() {
    const titleRegex = /^[a-zA-Z0-9\s]+$/;
    const titleValue = titleInput.value.trim();
    if (!titleRegex.test(titleValue) || titleValue.length === 0) {
        alert("Por favor, ingresa un título válido.");
        return false;
    }
    return true;
}

function validatePrice() {
    const priceRegex = /^\d+(\.\d{1,2})?$/;
    const priceValue = priceInput.value.trim();
    if (!priceRegex.test(priceValue) || priceValue.length === 0) {
        alert("Por favor, ingresa un precio válido.");
        return false;
    }
    return true;
}

function validateStock() {
    const stockRegex = /^[1-9]\d*$/;
    const stockValue = stockInput.value.trim();
    if (!stockRegex.test(stockValue) || stockValue.length === 0) {
        alert("Por favor, ingresa un valor de stock válido.");
        return false;
    }
    return true;
}

function validateBrand() {
    const brandRegex = /^[a-zA-Z\s]+$/;
    const brandValue = brandInput.value.trim();
    if (!brandRegex.test(brandValue) || brandValue.length === 0) {
        alert("Por favor, ingresa una marca válida.");
        return false;
    }
    return true;
}

function validateCategory() {
    const categoryRegex = /^[a-zA-Z\s]+$/;
    const categoryValue = categoryInput.value.trim();
    if (!categoryRegex.test(categoryValue) || categoryValue.length === 0) {
        alert("Por favor, ingresa una categoría válida.");
        return false;
    }
    return true;
}

function validateProductDescription() {
    const productDescriptionRegex = /^[a-zA-Z0-9\s]+$/;
    const productDescriptionValue = productDescriptionInput.value.trim();
    if (!productDescriptionRegex.test(productDescriptionValue) || productDescriptionValue.length === 0) {
        alert("Por favor, ingresa una descripción de producto válida.");
        return false;
    }
    return true;
}

function validateProductImages() {
    const validExtensions = /\.(jpg|jpeg|png|gif)$/i;
    const fileValue = productImagesInput.value.trim();
    if (!validExtensions.test(fileValue) || fileValue.length === 0) {
        alert("Por favor, selecciona una imagen válida (formatos admitidos: JPG, JPEG, PNG, GIF).");
        return false;
    }
    return true;
}

function validateFormProduct() {
    const isValidTitle = validateTitle();
    const isValidPrice = validatePrice();
    const isValidStock = validateStock();
    const isValidBrand = validateBrand();
    const isValidCategory = validateCategory();
    const isValidProductDescription = validateProductDescription();
    const isValidProductImages = validateProductImages();

    if (isValidTitle && isValidPrice && isValidStock && isValidBrand && isValidCategory && isValidProductDescription && isValidProductImages) {
        alert("¡Formulario enviado con éxito!");
        formProduct.submit();
    } else {
        alert("Corrige los campos antes de enviar el formulario.");
    }
}

formProduct.addEventListener('submit', function (event) {
    event.preventDefault();
    validateFormProduct();
});

// Segundo formulario
document.addEventListener('DOMContentLoaded', function () {
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const phoneNumberInput = document.getElementById("number");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const additionalDetailsInput = document.getElementById("additional-details");
    const submitButton = document.getElementById("validate");

    const regexName = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s']+$/;
    const regexPhoneNumber = /^[0-9]{10}$/;

    function validateFirstName() {
        if (!regexName.test(firstNameInput.value)) {
            firstNameInput.nextElementSibling.innerText = "Ingresa un nombre válido";
        } else {
            firstNameInput.nextElementSibling.innerText = "";
        }
    }

    function validateLastName() {
        if (!regexName.test(lastNameInput.value)) {
            lastNameInput.nextElementSibling.innerText = "Ingresa un apellido válido";
        } else {
            lastNameInput.nextElementSibling.innerText = "";
        }
    }

    function validatePhoneNumber() {
        if (!regexPhoneNumber.test(phoneNumberInput.value)) {
            phoneNumberInput.nextElementSibling.innerText = "Ingresa un número de teléfono válido (10 dígitos)";
        } else {
            phoneNumberInput.nextElementSibling.innerText = "";
        }
    }

    function validateEmail() {
        validateEmail();
    }

    function validateMessage() {
        if (messageInput.value.trim() === "") {
            messageInput.nextElementSibling.innerText = "El mensaje no puede estar vacío";
        } else {
            messageInput.nextElementSibling.innerText = "";
        }
    }

    function validate() {
        validateFirstName();
        validateLastName();
        validatePhoneNumber();
        validateEmail();
        validateMessage();
    }

    submitButton.onclick = validate;
});
