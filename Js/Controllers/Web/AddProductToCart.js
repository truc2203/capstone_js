//Array localstorege
let localProducts = [];

//Thêm sản phẩm vào giỏ hàng
const addCart = (event) => {
  let id = event.target.parentElement.getAttribute("data-id");
  let type = event.target.parentElement.getAttribute("data-type");
  if (id === null) {
    return;
  }
  if (type === "push") {
    const index = localProducts.findIndex((product) => product.id === id);
    if (index === -1) {
      APIAddProductToCart(id).then(function (result) {
        let products = result.data;
        products.amount += 1;
        localProducts.push(products);
        localStorage.setItem("products", JSON.stringify(localProducts));
        // localRender()
        console.log('add to cart');

      });
      document.getElementById(`addCart${id}`).style.display = "None";
      document.querySelector(`.showAmount${id}`).style.display = "Block";
    }
    if (index !== -1) {
      let products = localProducts[index];
      products.amount += 1;
      localStorage.setItem("products", JSON.stringify(localProducts));  
      // localRender()
      console.log('increase quantity');

      document.getElementById(`addCart${id}`).style.display = "None";
      document.querySelector(`.showAmount${id}`).style.display = "Block";
      document.getElementById(
        `countAmount${id}`
      ).innerHTML = `${products.amount}`;
    }
  }
  localRender()
  if (type === "increase-web") {
    increaseProductCart(id);
  }
  if (type === "reduce-web") {
    reduceProductCart(id);
  }
};
//Event click của btn thêm SP
document.getElementById("homePageRender").addEventListener("click", addCart);
