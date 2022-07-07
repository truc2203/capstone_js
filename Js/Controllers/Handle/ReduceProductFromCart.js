const reduceProductCart = (idProduct) => {
  for (i = 0; i < localProducts.length; i++) {
    let product = localProducts[i];
    if (product.id === idProduct) {
      if(product.amount === 1)
      {
         product.amount += 0
      }
      else{
        product.amount = product.amount - 1;
        localStorage.setItem("products", JSON.stringify(localProducts));
        document.getElementById("tblList").innerHTML = "";
        localRender();
      }
    }
    // cartRender(product);
  }
};
