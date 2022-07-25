
const clearAllProduct = () =>{
    let index = 0
    for(let i = 0; i<=localProducts.length;i++)
    {
        index = i
    }
    //Xóa toàn bộ mảng
    localProducts.splice(0,index)
    //Reset giao diện web
    init()
    //set local storage
    localStorage.setItem("products", JSON.stringify(localProducts));
    //Reset danh sách sản phẩm
    document.getElementById("tblList").innerHTML = '' 
    //Reset tổng tiền
    document.getElementById('totalPay').innerHTML =`<h6>Tổng Tiền : 0$</h6>`
    // console.log(localProducts)
    // countAmount = 0
    document.querySelector('.sub-cart').style.display = "none"
    document.querySelector('.sub-cart').innerHTML = countAmount
}

document.getElementById('btnClearAll').addEventListener('click',clearAllProduct)