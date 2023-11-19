import Product from "../Product/Products.js";

export default function ProductList (list) {
    if(list.length){
        let productList = ''
        
        list.forEach ((ch) => {
            productList += `${Product(ch)}`;

        })
        return productList
        
    }
    return 'We have no products to show'
}


