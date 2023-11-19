import { BASE_URL } from "../vars.js"

export default async function DeleteFinal(id){
    try{
        const res = await fetch(`${BASE_URL}products/${id}`,{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        });
        
        const succses_deleted = document.querySelector('#succses_delete')        

        if(res.ok){
            succses_deleted.innerHTML = 'Product Deleted!';

        }
    
       

    }catch(error){
        throw new Error(error)
    }

}