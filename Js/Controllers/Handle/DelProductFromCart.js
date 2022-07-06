const deleteProductCart = (idProduct) => {
  for (i = 0; i < localProducts.length; i++) {
    let product = localProducts[i];
    if (product.id === idProduct) {
      localProducts.splice(i, 1);
      localStorage.setItem("products", JSON.stringify(localProducts));
      document.getElementById("tblList").innerHTML = "";
      localRender();
    }
  }
};
