const deleteProductCart = (idProduct) => {
  
  for (i = 0; i < localProducts.length; i++) {
    let product = localProducts[i];
    if (product.id === idProduct) {
      localProducts.splice(i, 1);
      document.getElementById(`addCart${product.id}`).style.display = 'Block'
      document.querySelector(`.showAmount${product.id}`).style.display = 'None'
      localStorage.setItem("products", JSON.stringify(localProducts));
      document.getElementById("tblList").innerHTML = "";
      localRender();
      if(localProducts.length < 1)
      {
      document.getElementById('totalPay').innerHTML =`<h6>Tổng Tiền : 0$</h6>`
      }
    }
  }
};
