const reduceProductCart = (idProduct) => {
  for (i = 0; i < localProducts.length; i++) {
    let product = localProducts[i];
    if (product.id === idProduct) {
      product.amount = product.amount - 1;
      console.log(product.amount);
      localStorage.setItem("products", JSON.stringify(localProducts));
      document.getElementById("tblList").innerHTML = "";
      localRender();
    }
    // cartRender(product);
  }
};
