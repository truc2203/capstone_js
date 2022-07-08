//Array localstorege
let localProducts = [];
let countAmount = 1

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
    document.getElementById(`addCart${id}`).style.display = 'None'
    document.querySelector(`.showAmount${id}`).style.display = 'Block'
  }
  if(type === "increase-web")
  {
    increaseProductCart(id)
    document.getElementById(`countAmount${id}`).innerHTML = `${countAmount += 1}`
    if(countAmount > 1)
    {
      document.getElementById(`addCart${id}`).style.display = 'None'
      document.querySelector(`.showAmount${id}`).style.display = 'Block'
    }
  }
  if(type === "reduce-web")
  {
    reduceProductCart(id)
    document.getElementById(`countAmount${id}`).innerHTML = `${countAmount -= 1}`
    if(countAmount < 1)
    {
      document.getElementById(`countAmount${id}`).innerHTML = `${countAmount = 1}`
      deleteProductCart(id)
      document.getElementById(`addCart${id}`).style.display = 'Block'
      document.querySelector(`.showAmount${id}`).style.display = 'None'
    }
  }
};
//Event click của btn thêm SP
document.getElementById("homePageRender").addEventListener("click", addCart);