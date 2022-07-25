const reduceProductCart = (idProduct) => {
  for (i = 0; i < localProducts.length; i++) {
    let product = localProducts[i];
    if (product.id === idProduct) {

         if(product.amount <= 1)
        {
          deleteProductCart(product.id)
          document.getElementById(`addCart${product.id}`).style.display = 'Block'
          document.querySelector(`.showAmount${product.id}`).style.display = 'None'
        }

      else{
        product.amount -= 1;
        document.getElementById(`countAmount${product.id}`).innerHTML = `${product.amount}`
        
        localStorage.setItem("products", JSON.stringify(localProducts));

        document.getElementById("tblList").innerHTML = "";
        localRender();
       
      }
    }
    // cartRender(product);
  }
};
