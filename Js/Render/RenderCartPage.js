//Render 

//Array chứa tổng tiền tất cả sản phẩm
const arrTotalPay = []

const cartRender = (products) => {
  let totalPay = 0
  let cart = "";
  let product = new Products(
    products.id,
    products.brand,
    products.pic,
    products.name,
    products.amount,
    products.price,
    products.discount,
    products.desc,
    products.total
  )
  
  cart += `<tr>
        <td class="clear-tbl">
              <img src="${product.pic}" alt="" style="width:50px;height:50px">   
        </td>
        <td>${product.name}</td>
        <td>
          <button data-type="increase" data-id="${product.id}" class="btn-number me-1"><i class="fa-solid fa-plus"></i></button>
          ${parseInt(product.amount)}
          <button data-type="reduce" data-id="${product.id}" class="btn-number ms-1"><i class="fa-solid fa-minus"></i></button>
        </td>
        <td>${product.discount}%</td>
        <td>$${Math.floor(product.getTotal())}</td>
        <td><button data-type="delete" data-id="${product.id}" class="btn-del-product"><i class="fa-solid fa-trash"></i></button></td>
      </tr>
      `;

    //Duyệt mảng cộng dồn giá tất cả sản phẩm
    arrTotalPay.push(product.getTotal())
    for( let i = 0;i< arrTotalPay.length ; i++){
      totalPay += arrTotalPay[i]
    }
  //Render danh sách sản phẩm
  document.getElementById("tblList").innerHTML += cart;

  //Render Tổng tiền tất cả sản phẩm
  document.getElementById('totalPay').innerHTML =`<h6>Tổng Tiền : $${Math.floor(totalPay)}</h6>`
};




