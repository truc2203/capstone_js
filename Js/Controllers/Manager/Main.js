//Call API
init()

//Product Array
const arrProduct = []
//Get API
function init(){
    APIGetProducts().then(function(reponse){
        let products = reponse.data
        for(let i in products)
        {
            let product = products[i]
            products[i] = new Products(
                product.id,
                product.brand,
                product.pic,
                product.name,
                product.amount,
                product.price,
                product.discount,
                product.desc,
                product.total,
            )
            arrProduct.push(product)
        }
        display(products)
    })
}

//Hiển thị danh sách sản phẩm (addmin page)
const display = (products) =>{
    let html = ''
    for(let i in products)
    {
        let product = products[i]
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
}