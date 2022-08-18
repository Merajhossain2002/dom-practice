document.getElementById("apply-btn").addEventListener("click", function () {
  const priceInputElement = document.getElementById("price-input");
  const priceInputStringValue = priceInputElement.value;
  const inputPrice = parseFloat(priceInputStringValue);
  priceInputElement.value = "";

  const discountedPriceDivide = inputPrice / 100;
  const discountAmount = discountedPriceDivide * 30;
  const discountPrice = inputPrice - discountAmount;

  const price = document.getElementById("price");
  price.innerText = "";

  const coupon = document.getElementById("coupon-input");
  const couponValue = coupon.value;
  coupon.value = "";
  if (couponValue === "DOM") {
    price.innerText = discountPrice;
  } else {
    alert("Your Coupon Code Is Invalid");
  }
});
