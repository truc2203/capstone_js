//get localstorega
const localRender = () => {
  localProducts = JSON.parse(localStorage.getItem("products")) || [];
  let count = 0;
  for (let j = 0; j <= arrTotalPay.length; j++) {
    count = j;
  }
  arrTotalPay.splice(0, count);
  for (let i = 0; i < localProducts.length; i++) {
    cartRender(localProducts[i]);
  
  }
};
localRender();
