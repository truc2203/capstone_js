//get localstorega
const localRender = () => {
  localProducts = JSON.parse(localStorage.getItem("products")) || [];
  let count = 0;
  let counTotal = 0;
  for (let j = 0; j <= arrTotalPay.length; j++) {
    count = j;
  }
  arrTotalPay.splice(0, count);
  for (let i = 0; i < localProducts.length; i++) {
    counTotal += localProducts[i].amount;
  // console.log(localProducts);
    cartRender(localProducts[i]);
  }
  countAmount = counTotal;
  if (countAmount === 0) {
    document.querySelector(".sub-cart").style.display = "none";
    document.querySelector(".sub-cart").innerHTML = countAmount;
  }
   if(countAmount !== 0) {
    document.querySelector(".sub-cart").style.display = "block";
    document.querySelector(".sub-cart").innerHTML = countAmount;
  }
};
localRender();
