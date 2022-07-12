const filterProduct = () =>{
    let value = document.getElementById('slcBrand').value
    APIFilterBrand(value).then(function(result){
        let products = result.data
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
            )
        }
        renderWeb(products)
    })
}
document.getElementById('btnFilterBrand').addEventListener('click',filterProduct)
    