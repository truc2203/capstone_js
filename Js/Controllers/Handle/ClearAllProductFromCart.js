
const clearAllProduct = () =>{
    let index = 0
    for(let i = 0; i<=localProducts.length;i++)
    {
        index = i
    }
    //Xóa toàn bộ mảng
    localProducts.splice(0,index)
    //set local storage
    localStorage.setItem("products", JSON.stringify(localProducts));
    //Reset danh sách sản phẩm
    document.getElementById("tblList").innerHTML = '' 
    //Reset tổng tiền
    document.getElementById('totalPay').innerHTML =`<h6>Tổng Tiền : $</h6>`
    // console.log(localProducts)
}

document.getElementById('btnClearAll').addEventListener('click',clearAllProduct)