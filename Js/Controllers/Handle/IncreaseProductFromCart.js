const increaseProductCart = (idProduct) => {
  let product;
  for (i = 0; i < localProducts.length; i++) {
    product = localProducts[i];
    if (product.id === idProduct) {
      product.amount += 1;
      //Tăng só lượng sản phẩm thêm 1 và render ra giao diện web
      document.getElementById(`countAmount${product.id}`).innerHTML = `${product.amount}`
      
      if(product.amount > 1)
      {
        countAmount += 1
        document.querySelector('.sub-cart').style.display = "block"
        document.querySelector('.sub-cart').innerHTML = countAmount
        document.getElementById(`addCart${product.id}`).style.display = 'None'
        document.querySelector(`.showAmount${product.id}`).style.display = 'Block'
      }
      //Lưu localstorege
      localStorage.setItem("products", JSON.stringify(localProducts));
      //reset
      document.getElementById("tblList").innerHTML = "";
      //render lại giao diện giỏ hàng
      localRender();
   
    }
    else{
      alert('not')
    }
    // cartRender(product);
  }
 
};
