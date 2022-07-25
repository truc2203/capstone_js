const deleteProductCart = (idProduct) => {
  
  for (i = 0; i < localProducts.length; i++) {
    let product = localProducts[i];
    if (product.id === idProduct) {
      localProducts.splice(i, 1);
      document.getElementById(`addCart${product.id}`).style.display = 'Block'
      document.querySelector(`.showAmount${product.id}`).style.display = 'None'
      localStorage.setItem("products", JSON.stringify(localProducts));
      document.getElementById("tblList").innerHTML = "";
      countAmount -= product.amount
      document.getElementById(`countAmount${product.id}`).innerHTML = 1
      // document.querySelector('.sub-cart').style.display = "block"
      // document.querySelector('.sub-cart').innerHTML = countAmount
      // if(countAmount < 1)
      //     {
      //       document.querySelector('.sub-cart').style.display = "none"
      //       document.querySelector('.sub-cart').innerHTML = countAmount
      //     }
      //     else{
      //       document.querySelector('.sub-cart').style.display = "block"
      //       document.querySelector('.sub-cart').innerHTML = countAmount
      //     }
      localRender();
      if(localProducts.length < 1)
      {
      document.getElementById('totalPay').innerHTML =`<h6>Tổng Tiền : 0$</h6>`
      }
    }
  }
};
