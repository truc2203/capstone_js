//Array localstorege
let localProducts = [];

//Thêm sản phẩm vào giỏ hàng
const addCart = (event) => {
  let id = event.target.parentElement.getAttribute("data-id");
  let type = event.target.parentElement.getAttribute("data-type")
  if (id === null) {
    return;
  }
  if(type === "push")
  {
  
    APIAddProductToCart(id).then(function (result) {
      let products = result.data;
      localProducts.push(products);
      //set localstorege
      localStorage.setItem("products", JSON.stringify(localProducts));
      cartRender(products);
    });
    countAmount += 1
    document.querySelector('.sub-cart').style.display = "block"
    document.querySelector('.sub-cart').innerHTML = countAmount
    document.getElementById(`addCart${id}`).style.display = 'None'
    document.querySelector(`.showAmount${id}`).style.display = 'Block'
  }
  if(type === "increase-web")
  {
    increaseProductCart(id)
    
  }
  if(type === "reduce-web")
  {
    reduceProductCart(id)
   
  }
};
//Event click của btn thêm SP
document.getElementById("homePageRender").addEventListener("click", addCart);