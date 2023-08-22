const applyCouponButton = document.getElementById('applyCouponBtn');
const couponCodeInput = document.getElementById('couponCodeInput');
const congratsModal = document.getElementById('congratsModal');
const goHomeButton = document.getElementById('goHomeBtn');
const cards = document.querySelectorAll('.card');
const totalPriceElement = document.getElementById('totalPrice');
const discountElement = document.getElementById('discount');
const grandTotalElement = document.getElementById('grandTotal');
const purchaseBtn = document.getElementById('purchaseBtn');

function applyCoupon() {
    const couponCode = couponCodeInput.value;
    if (totalPrice <= 200.00 && couponCode === 'SELL200') {
        discount = totalPrice * 0.2;
    } else {
        discount = 0;
    }
    updateUI();
}

function updateUI() {
    grandTotal = totalPrice - discount;
    totalPriceElement.textContent = `${totalPrice.toFixed(2)} Taka`;
    discountElement.textContent = `${discount.toFixed(2)} Taka`;
    grandTotalElement.textContent = `${grandTotal.toFixed(2)} Taka`;

}

let totalPrice = 0;
let discount = 0;
let grandTotal = 0;

cards.forEach(card => {
    card.addEventListener('click', () => {
        const price = parseFloat(card.querySelector('p').textContent.split(':')[1]);
        totalPrice += price;
        updateUI();
    });
});


applyCouponButton.addEventListener('click', applyCoupon);
purchaseBtn.addEventListener('click', () => {
    congratsModal.classList.remove('hidden');
});
goHomeButton.addEventListener('click', () => {
    congratsModal.classList.add('hidden');
    
});

const cardsItem = document.querySelectorAll('.card');
const selectedItemContainer = document.getElementById('shoppingItems');
const maxItems = 5;
let itemCount = 1;
function handleClick(event) {
    if (selectedItemContainer.children.length >= maxItems) {
        cards.forEach(card => {
            card.removeEventListener('click', handleClick);
        });
        return;
    }

    const card = event.currentTarget;
    const text = card.querySelector('h2').textContent.split(':')[0].trim();
    
    const p = document.createElement('p');
    p.innerHTML = `${itemCount}. ${text}`;
    itemCount++; 

    selectedItemContainer.appendChild(p);
    updateUI();
}
