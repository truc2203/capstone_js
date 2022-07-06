//Mock API
const baseUrl = "https://62aa993a371180affbd7ccc8.mockapi.io/api/CapstoneJS";

//Lấy danh sách sản phẩm
const APIGetProducts = (search) =>
  axios({
    url: baseUrl,
    method: "GET",
    params: { brand: search },
  });

//Lay chi tiet san pham
const APIAddProductToCart = (producId) =>
  axios({
    url: `${baseUrl}/${producId}`,
    method: "GET",
  });

//Lọc SP theo brand
const APIFilterBrand = (brand) =>
  axios({
    url: `${baseUrl}/?brand=${brand}`,
    method: "GET",
  });

// Thêm sản phẩm (Admin)
function apiAddProduct(product) {
  return axios({
    url: baseUrl,
    method: "POST",
    data: product,
  });
}
//Xóa sản phẩm (Admin)
function apiDeleteProducts(producId) {
  return axios({
    url: `${baseUrl}/${producId}`,
    method: "DELETE",
  });
}

//Update sản phẩm (Admin)
function apiUpdateProducts(product) {
  return axios({
    url: `${baseUrl}/${product.id}`,
    data: product,
    method: "PUT",
  });
}

// Lấy chi tiết sản phẩm (Admin)
function apiGetProductDetail(productId) {
  return axios({
    url: `${baseUrl}/${productId}`,
    method: "GET",
  });
}
