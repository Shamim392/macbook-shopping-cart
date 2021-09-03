//update price
function updateTotalPrice(type, price) {

    // handle  memory cost of 8gb & 16gb
    if (type == "memory") {
        if (price == "8GB") {
            document.getElementById('extra-memory').innerText = '0';
            calculateTotal();
        }
        else {
            document.getElementById('extra-memory').innerText = '180';
            calculateTotal();
        }
    }

    // handle storage cost 0f 256gb,512bg & 1Tb
    else if (type == "storage") {
        if (price == "256GB") {
            document.getElementById('extra-storage').innerText = '0';
            calculateTotal();
        }
        else if (price == "512GB") {
            document.getElementById('extra-storage').innerText = '100';
            calculateTotal();
        }
        else {
            document.getElementById('extra-storage').innerText = '180';
            calculateTotal();
        }
    }

    // handle delivery cost
    else {
        if (price == "free") {
            document.getElementById('delivery-cost').innerText = '0';
            calculateTotal();
        }
        else {
            document.getElementById('delivery-cost').innerText = '20';
            calculateTotal();
        }
    }
}



//function of total price calculate 
function calculateTotal() {
    const bestPrice = parseFloat(document.getElementById('initial-price').
        innerText);
    const memoryCost = parseFloat(document.getElementById('extra-memory').
        innerText);
    const storageCost = parseFloat(document.getElementById('extra-storage').
        innerText);
    const deliveryCost = parseFloat(document.getElementById('delivery-cost').
        innerText);

    const totalPrice = bestPrice + memoryCost + storageCost + deliveryCost;

    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('final-total').innerText = totalPrice;
}

// use promo code for discount
document.getElementById('promo-code-button').addEventListener('click', function () {
    const promoCodeInput = document.getElementById('promo-code-input');
    const promoCodetext = promoCodeInput.value;
    const totalCost = parseFloat(document.getElementById('total-price').
        innerText);

    if (promoCodetext == 'stevekaku') {
        const discountedTotal = totalCost - (totalCost * 0.2);
        document.getElementById('final-total').innerText = discountedTotal;
        promoCodeInput.value = '';
    }
    else {
        document.getElementById('final-total').innerText = totalCost;
        promoCodeInput.value = '';
    }
});