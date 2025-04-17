function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = quantity * pricePerItem

    if (quantity >= 10) {
        totalPrice = quantity * 0.9 * pricePerItem;
    }

    return totalPrice;
}

// console.log(calculateDiscountedPrice(11,9.99))


module.exports = calculateDiscountedPrice;