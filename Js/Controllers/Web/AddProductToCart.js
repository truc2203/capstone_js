//Array localstorege
let localProducts = [];

//Thêm sản phẩm vào giỏ hàng
const addCart = (event) => {
  let id = event.target.parentElement.getAttribute("data-id");
  if (id === null) {
    return;
  }
  APIAddProductToCart(id).then(function (result) {
    let products = result.data;
    localProducts.push(products);
    //set localstorege
    localStorage.setItem("products", JSON.stringify(localProducts));
    cartRender(products);
  });
};
//Event click của btn thêm SP
document.getElementById("homePageRender").addEventListener("click", addCart);