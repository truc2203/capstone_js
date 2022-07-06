//Call API
init();

//Product Array
const arrProduct = [];
//Get API
function init() {
  APIGetProducts().then(function (reponse) {
    let products = reponse.data;
    for (let i in products) {
      let product = products[i];
      products[i] = new Products(
        product.id,
        product.brand,
        product.pic,
        product.name,
        product.amount,
        product.price,
        product.discount,
        product.desc,
      );
      arrProduct.push(product);
    }
    display(products);
  });
}

//Hiển thị danh sách sản phẩm (addmin page)
const display = (products) => {
  let html = "";
  for (let i in products) {
    let product = products[i];
    html += `<tr>
        <td>${product.id}</td>
        <td>${product.brand}</td>
        <td>
            <img src="${product.pic}" width="70px" height="70px" />
        </td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.discount}</td>
        <td>${product.desc}</td>
        <td>
            <button class="btn btn-primary sp-noti" 
             style="display: inline;"
             data-toggle="modal"
             data-target="#myModal" 
             data-type="update" 
             data-id="${product.id}">Cập nhật</button>
            <button class="btn btn-danger sp-noti" style="display: inline;" data-type="delete" data-id="${product.id}">Xóa</button>
        </td>
    </tr>
    `;
  }
  // DOM
  document.getElementById("tblDanhSach").innerHTML = html;
};
function addProduct() {
  const brand = document.getElementById("idBrand").value;
  const pic = document.getElementById("idPic").value;
  const name = document.getElementById("idName").value;
  const price = document.getElementById("idPrice").value;
  const discount = document.getElementById("idDiscount").value;
  const desc = document.getElementById("idDesc").value;
  let product = new Products(
    null,
    brand,
    pic,
    name,
    1,
    price,
    discount,
    desc,
  );
  apiAddProduct(product)
    .then((reponse) => {
      console.log(reponse.data);
      init();
    })
    .catch((error) => {
      console.log(error);
    });
}
function deleteProduct(producId) {
  apiDeleteProducts(producId)
    .then(() => {
      init();
    })
    .catch((error) => {
      console.log(error);
    });
}
// Hàm cập nhật sản phẩm
function updateProduct() {
  const id = document.getElementById("idNumber").value;
  const brand = document.getElementById("idBrand").value;
  const pic = document.getElementById("idPic").value;
  const name = document.getElementById("idName").value;
  const price = document.getElementById("idPrice").value;
  const discount = document.getElementById("idDiscount").value;
  const desc = document.getElementById("idDesc").value;

  let product = new Products(
    id,
    brand,
    pic,
    name,
    1,
    price,
    discount,
    desc,
  );
  apiUpdateProducts(product)
    .then(() => {
      init();
      resetForm();
    })
    .catch((error) => {
      console.log(error);
    });
}
document.getElementById("btnThem").addEventListener("click", showAddModal);
function showAddModal() {
  document.querySelector(".modal-title").innerHTML = "Add Products";
  document.querySelector(
    ".modal-footer"
  ).innerHTML = `<button class="btn btn-success" data-type="add">Thêm sản phẩm</button> <button data-target="#myModal" data-toggle="modal" class="btn btn-danger">Hủy</button>`;
}
document.querySelector(".modal-footer").addEventListener("click", handlesubmit);
function handlesubmit(event) {
  const type = event.target.getAttribute("data-type");
  switch (type) {
    case "add":
      addProduct();
      break;
    case "update":
      updateProduct();
      break;
    default:
      break;
  }
}
document.getElementById("tblDanhSach").addEventListener("click", handleAction);
function handleAction(event) {
  let type = event.target.getAttribute("data-type");
  let id = event.target.getAttribute("data-id");
  switch (type) {
    case "delete":
      deleteProduct(id);
      break;
    case "update":
      showUpdateModal(id);
      break;
    default:
      break;
  }
}
function showUpdateModal(productId) {
  document.querySelector(".modal-title").innerHTML = "Cập nhật sản phẩm";
  document.querySelector(
    ".modal-footer"
  ).innerHTML = `<button class="btn btn-success" data-type="update" data-toggle="modal" data-target="#myModal">Cập nhật</button> <button class="btn btn-secondary" data-toggle="modal" data-target="#myModal" >Hủy</button>`;
  apiGetProductDetail(productId)
    .then((reponse) => {
      let product = reponse.data;
      document.getElementById("idNumber").value = product.id;
      document.getElementById("idBrand").value = product.brand;
      document.getElementById("idPic").value = product.pic;
      document.getElementById("idName").value = product.name;
      document.getElementById("idPrice").value = product.price;
      document.getElementById("idDiscount").value = product.discount;
      document.getElementById("idDesc").value = product.desc;
    })
    .catch((error) => {
      console.log(error);
    });
}
document.getElementById("txtSearch").addEventListener("keypress", handleSearch);
function handleSearch(evt) {
  if (evt.key !== "Enter") return;
  let value = evt.target.value;
  APIGetProducts(value).then((response) => {
    let products = response.data;
    for (let i = 0; i < products.length; i++) {
      let product = products[i];
      products[i] = new Products(
        product.id,
        product.brand,
        product.pic,
        product.name,
        product.amount,
        product.price,
        product.discount,
        product.desc,
        product.total
      );
    }
    console.log(products)
    display(products);
  });
}
function resetForm() {
  document.getElementById("idNumber").value = "";
  document.getElementById("idBrand").value = "";
  document.getElementById("idPic").value = "";
  document.getElementById("idName").value = "";
  document.getElementById("idPrice").value = "";
  document.getElementById("idDiscount").value = "";
  document.getElementById("idDesc").value = "";
  $("#myModal").modal("hide");
}
