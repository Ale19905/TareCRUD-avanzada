/*
import {BASE_URL} from '../vars.js'

export default async function PostProducts(product, callback) {
    try{
        const res = await window.fetch(`${BASE_URL}products`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
            
        })
        
        const data = await res.json()
        //console.log(data);
        if(res.status == 201){
           return callback(data)
        }
   
    } catch(error) {
        throw new Error(error)
    }
}*/

