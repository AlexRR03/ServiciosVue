import Global from "../Global";
import axios from 'axios'

export default class ServiceCoche{
    getCoches = new Promise(function(resolve){       
            let coches=[];
            let request = "webresources/coches"
            let url = Global.urlApiCoches+request
            axios.get(url).then(response=>{
                coches = response.data;
                resolve(coches)
            })
            
        
    })
}