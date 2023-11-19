import ProductList from "../Components/ProductsList/ProductList.js";
import showDetails from "../Components/Product_modal/product_modal.js";
import getById from "../Services/getById.js";
import DeleteFinal from "../Services/DeleteProduct.js";
import PutFinal from "../Services/PutProduct.js";
import { cuerpoPut } from "../main.js";
//import PostProducts from "../Services/POST.JS";


const modalNode = document.querySelector('.details')
const listofProducts = document.querySelector('#ListadeProductos')
const closeBtn = document.querySelector('.closebtn')
const closeBtn2 = document.querySelector('.cerrarModal')

const cleanData = (list) => list.map(({id, title, price, description, images})  => ({
        id,
        title,
        price,
        description, 
        images,
}))


const renderList = (productApiData) => {
    listofProducts.innerHTML = ProductList(cleanData(productApiData))
    
    const showDialogBtn = document.querySelectorAll('.boton_ver')
    
    const arrShowDialogBtn = [...showDialogBtn] 
    //console.log(arrShowDialogBtn);

    arrShowDialogBtn.forEach((item) =>{
        item.addEventListener('click', (e) => {
            modal.showModal()
            
           ///console.log(e.target.dataset.set);
            getById(showDetails, e.target.dataset.set);
          
            closeBtn.addEventListener('click', () =>{
                modal.close()
            })
        })
    })
    
    const DeleteBtn = document.querySelectorAll('.borrar')

    const arrDeleteBtn = [...DeleteBtn]
    //console.log(arrDeleteBtn);

    arrDeleteBtn.forEach((item) =>{
        item.addEventListener('click', (e) =>{
            //DeleteFinal(e.target.dataset.set);
            borrar_producto.showModal()
            
            var id_2 = e.target.dataset.set;
            
            si_borrar.addEventListener('click', (e) =>{
                
                if(id_2 != 0){
                    DeleteFinal(id_2)
                }
                
                id_2 = 0;
            })
        })

        const no_borrar = document.querySelector('.no_delete')
        const si_borrar = document.querySelector('.si_delete')
        const closeDlt = document.querySelector('.cerrar_modal_delete')
        
        no_borrar.addEventListener('click', () =>{
            borrar_producto.close()
        })
        
        closeDlt.addEventListener('click',() => {
            borrar_producto.close()
        })
        

    })
    //Put Code:
    const PutBtn = document.querySelectorAll('.Put_boton')
    const arrPutBtn = [...PutBtn]
    const PutBtnNode = document.querySelector('.actualizar')

    //console.log(arrPutBtn);
    arrPutBtn.forEach((item) => {
        item.addEventListener('click', (ev) =>{
            //console.log(ev.target.dataset.set);
            actualizar_producto.showModal()
            
            
          
        })
        
        
        
        const close = document.querySelector('.closePutModal')             
        close.addEventListener('click', () =>{
            actualizar_producto.close()
        })
        
    })
    
    arrPutBtn.forEach((item) => {
        item.addEventListener('click', (ev) => {
            
            var id = ev.target.dataset.set;
            
            PutBtnNode.addEventListener('click', (e) => {
               
            
                if(id != 0){
                    PutFinal(cuerpoPut, id);
                }
                
                id = 0;
            
            })
            
        })
    })
     
    
    
    const actualizarBtn = document.querySelector('.actualizar')

    
    
   



    //create code:
    const newProductBtn = document.querySelector('.create_btn')
    
        newProductBtn.addEventListener('click', () =>{
            nuevo_producto.showModal()

        })
        
            
        closeBtn2.addEventListener('click', () => {
            nuevo_producto.close()
        })
            

}



    


export default renderList
