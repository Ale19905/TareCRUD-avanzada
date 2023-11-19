export default function Product (props) {
    return `
    
    <li class="listaLI">
    
    <div id = "container">
        <div id = "subcontainer">
             <div id = "container_image">
                <img class="product_image" src="${props.images[0]}" alt="" referrerpolicy="no-referrer">
                
            </div>      
            
            <div id = "container_texts">
                <p class="products_texts" id="product_title" ><b> Title:</b> ${props.title}</p>
                <p class="products_texts" id="product_price" > <b> Price:</b> ${props.price}$</p>
                <p class="products_texts" id="product_description" ><b>Description:</b> ${props.description}</p>
            </div>      
               
            <div class="container_btns">
                <div class="botones ordenar_botones">
                    <img data-set=${props.id}  class="boton_ver ordenar_botones" src="./Assets/seo-social-web-network-internet_232_icon-icons.com_61542.png" alt="" width="30" height="25">
                </div>

                <div class="botones ordenar_botones">
                    <img data-set=${props.id} class="Put_boton ordenar_botones" src="./Assets/pencil-striped-symbol-for-interface-edit-buttons_icon-icons.com_56782.png" alt="" height="20" width="20">
                </div>
                    <div class="botones ordenar_botones">
                        <img data-set=${props.id} class="borrar ordenar_botones" src="./Assets/trashcan_delete_remove_trash_icon_178327.png" alt="" width="25" height="25">
                    </div>
                </div>
            </div>      
        </div>
    
    </li>
    `
}
