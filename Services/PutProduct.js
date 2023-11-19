import { BASE_URL } from "../vars.js"

export default async function PutFinal(items, id){
    try{
        const res = await fetch(`${BASE_URL}products/${id}`,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},

            
            body:JSON.stringify(items)
        });
        
        const succses_put = document.getElementById('succses_put')
      
        if(res.ok){
            succses_put.innerHTML = 'Product Updated!';
        }
    
    }catch(error){
        throw new Error(error)
    }

}