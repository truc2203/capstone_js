//get localstorega
const localRender = () => {
    localProducts = JSON.parse(localStorage.getItem("products")) || [];
    for (let i = 0; i < localProducts.length; i++) {
      cartRender(localProducts[i]);
    }
  }
  localRender();