const handleCartAction = (event) => {
  let type = event.target.parentElement.getAttribute("data-type");
  let id = event.target.parentElement.getAttribute("data-id");

  switch (type) {
    case "increase":
        increaseProductCart(id)
      break;
    case "reduce":
        reduceProductCart(id)
      break;
    case "delete":
        deleteProductCart(id)
      break;
    default:
      break;
  }
};

document.getElementById("tblList").addEventListener("click", handleCartAction);
