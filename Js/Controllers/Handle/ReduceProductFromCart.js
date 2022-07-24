const reduceProductCart = (idProduct) => {
  for (i = 0; i < localProducts.length; i++) {
    let product = localProducts[i];
    if (product.id === idProduct) {

         if(product.amount === 1)
        {
          product.amount += 0
          countAmount -= 1
          document.getElementById(`countAmount${product.id}`).innerHTML = `${product.amount = 0}`
          deleteProductCart(product.id)
          document.getElementById(`addCart${product.id}`).style.display = 'Block'
          document.querySelector(`.showAmount${product.id}`).style.display = 'None'
        }

      else{
        product.amount -= 1;
        document.getElementById(`countAmount${product.id}`).innerHTML = `${product.amount}`
        countAmount -= 1
        if(countAmount < 1)
              {
                countAmount = 1
                document.querySelector('.sub-cart').style.display = "none"
                document.querySelector('.sub-cart').innerHTML = countAmount
              }
              else{
                document.querySelector('.sub-cart').style.display = "block"
                document.querySelector('.sub-cart').innerHTML = countAmount
              }
        localStorage.setItem("products", JSON.stringify(localProducts));
        document.getElementById("tblList").innerHTML = "";
        localRender();
       
      }
    }
    // cartRender(product);
  }
};
