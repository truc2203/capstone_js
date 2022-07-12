//Hiển thị danh sách SP ra giao diện web

//Call API
init()

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
        }
        renderWeb(products)
    })
}

const renderWeb = (products) =>{
    let homePage = ''
    for(let i in products)
    {
        let product = products[i]
        homePage += `<div class="col-12 col-sm-6 col-lg-4 col-xl-3 px-4 pb-5">
        <div class="list-card p-4 border rounded-3">
          <div class="list-img">
            <img  
              style="height:240px"         
              class="w-100 rounded-3"
              src="${product.pic}"
              alt=""
            />
          </div>
          <div class="mt-5 list-info position-relative">
            <div class="detail">
              <div class="name">
                <a href="">${product.name}</a>
              </div>
              <div class="price position-relative">
                <span>$${product.price}</span>
                <span class="discount rounded-3">-${product.discount}%</span>
              </div>
              <div class="star">
                <i class="text-warning fa-solid fa-star"></i>
                <i class="text-warning fa-solid fa-star"></i>
                <i class="text-warning fa-solid fa-star"></i>
                <i class="text-warning fa-solid fa-star"></i>
                <i class="text-warning fa-solid fa-star"></i>
              </div>
              <div class="desc">
                <p>${product.desc}</p>
              </div>
            </div>
            <button 
              type="button"
              data-id="${product.id}"
              class="btn-add-cart position-absolute"
            >
              <i class="fa-solid fa-cart-arrow-down"></i>
            </button>            
          </div>

        </div>
      </div>
    `;      
    }
    // DOM
    document.getElementById("homePageRender").innerHTML = homePage;
}