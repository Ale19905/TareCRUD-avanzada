import GetProducts from "./Services/Get.js";
import renderList from "./Render/RenderList.js";
import PutFinal from "./Services/PutProduct.js";

//import PostProducts from "./Services/POST.JS";

/*mport ProductList from "./Components/Products/ProductsList/ProductList.js";

const listofProducts = (list) => {
    console.log(list)
}*/

GetProducts(renderList)
    
    const newProductTitle = document.querySelector('.input_title')
    const newProductPrice = document.querySelector('.input_price')
    const newProductDescription = document.querySelector('.input_description')
    const newProductImage = document.querySelector('.input_image')
    const categoryId = 2
    
    let cuerpo  = {
        title : '',
        price : '',
        description : '',
        categoryId : 2,
        images: []

    }

function onChangeTitle (e){
    cuerpo.title = e.target.value;
    console.log(e.target.value);
}
function onChangePrice (e){
    cuerpo.price = e.target.value;
    console.log(e.target.value);
}
function onChangeDescription (e){
    cuerpo.description = e.target.value;
    console.log(e.target.value);
}
function onChangeImage (e){
    cuerpo.images[0] = e.target.value;
    console.log(cuerpo.images);

}

        
newProductTitle.addEventListener('change', onChangeTitle)
newProductPrice.addEventListener('change', onChangePrice)
newProductDescription.addEventListener('change', onChangeDescription)
newProductImage.addEventListener('change', onChangeImage)


//Put:

const PutTitle = document.querySelector('.input_title2')
    const PutPrice = document.querySelector('.input_price2')
    const PutDescription = document.querySelector('.input_description2')
    const PutImage = document.querySelector('.input_image2')
    
    var cuerpoPut  = {
        title : '',
        price : '',
        description : '',
        categoryId : 2,
        images: []

    }

    function onChangeTitlePut (e){
        cuerpoPut.title = e.target.value;
        console.log(e.target.value);
    }
    function onChangePricePut (e){
        cuerpoPut.price = e.target.value;
        console.log(e.target.value);
    }
    function onChangeDescriptionPut (e){
        cuerpoPut.description = e.target.value;
        console.log(e.target.value);
    }
    function onChangeImagePut (e){
        cuerpoPut.images[0] = e.target.value;
        console.log(cuerpoPut.images);
    
    }

    PutTitle.addEventListener('change', onChangeTitlePut)
    PutPrice.addEventListener('change', onChangePricePut)
    PutDescription.addEventListener('change', onChangeDescriptionPut)
    PutImage.addEventListener('change', onChangeImagePut)

    export var cuerpoPut
    // 
        

const createBtnNode = document.querySelector('.crear_final')

async function postFinal(){
    try{
        const res = await fetch('https://api.escuelajs.co/api/v1/products',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},

            body:JSON.stringify(cuerpo)
        });
        
        const succses_message = document.querySelector('#succses_text')
        console.log(cuerpo);
    
        if(res.ok){
            succses_message.innerHTML = 'Product Created!';
        }
    
    }catch(error){
        throw new Error(error)
    }

}



createBtnNode.addEventListener('click', () => {
    postFinal()
})
