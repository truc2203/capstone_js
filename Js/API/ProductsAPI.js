//Mock API
const baseUrl = 'https://62aa993a371180affbd7ccc8.mockapi.io/api/CapstoneJS';

//Lấy danh sách sản phẩm
const APIGetProducts = () =>
    axios({
        url : baseUrl,
        method : 'GET',
    })

//Lay chi tiet san pham
const APIAddProduct = (producId) =>
  axios({
    url: `${baseUrl}/${producId}`,
    method: "GET",
  });

//Lọc SP theo brand
const APIFilterBrand = (brand) =>
    axios({
        url : `${baseUrl}/?brand=${brand}`,
        method : 'GET',
    })

