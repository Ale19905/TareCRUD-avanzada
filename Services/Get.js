import {BASE_URL} from '../vars.js'

export default async function GetProducts (callback) {
    try{
        const res = await window.fetch(`${BASE_URL}products?limit=90&offset=0`)
        const data = await res.json()
    
        if(res.status == 200){
            
           return  callback(data)

        }
   
    } catch(error) {
        throw new Error(error)
    }
}

                   