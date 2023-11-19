import { BASE_URL} from '../vars.js'

export default async function getById(callback, id) {
    try{
        const res = await window.fetch(`${BASE_URL}products/${id}`)
        const data = await res.json()

        if(res.status === 200){
            callback(data)   
        }

    }catch(error){
        throw new Error(error)
    }
}