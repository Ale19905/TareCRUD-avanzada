let modalNode = document.querySelector('.details')

const showDetails = (props) => {
    modalNode.innerHTML =`
    <div class = "head">
        <h1> Titulo:</h1>
        <p> ${props.title}</p>
           
    </div>
        
    <img class="imageInside" src=${props.images}"  alt="" referrerpolicy="no-referrer">
    <p>Price: ${props.price}$</p>
    <div class = "description">
        <p>${props.description}</p>
           
    </div>
    
    


    `
}

export default showDetails