const increaseProductCart = (idProduct) => {
  let product;
  for (i = 0; i < localProducts.length; i++) {
    product = localProducts[i];
    if (product.id === idProduct) {
      product.amount += 1;
      console.log(product.amount);
      //Lưu localstorege
      localStorage.setItem("products", JSON.stringify(localProducts));
      //reset
      document.getElementById("tblList").innerHTML = "";
      //render lại giao diện
      localRender();
    }
    // cartRender(product);
  }
};
