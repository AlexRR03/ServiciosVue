<template>
  <div>
    <h1>Customers</h1>
    <form v-on:submit.prevent="buscarCustomer()">
        <label>Buscar opor Id:</label>
        <input type="text" v-model="id">
        <button>Buscar</button>
    </form>
    
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Empresa</th>
                    <th>Direccion</th>
                    <th>Pais</th>
                    <th>Ciudad</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="customer in customers" :key="customer">
                    <td>{{customer.id}}</td>
                    <td>{{customer.contactName}}</td>
                    <td>{{customer.companyName}}</td>
                    <td>{{customer.address}}</td>
                    <td>{{customer.country}}</td>
                    <td>{{customer.city}}</td>
                </tr>
            </tbody>
        </table>
        </div>
  
</template>

<script>
import axios from 'axios'
import Global from '../Global'
export default {
    name:"CustomersComponet",
    data(){
        return{ 
            customers:[],
            id:""
        }
    },
    mounted(){
        const request ="customers"
        let url = Global.urlApiCustomers+request
        axios.get(url).then(response=>{
            this.customers = response.data.results
        })
    },
    methods:{
        buscarCustomer(){
            this.customers=[]
            const request = "customers/"+this.id
            let url = Global.urlApiCustomers+request
            axios.get(url).then(response=>{
                //console.log(response.data)
                this.customers=response.data
            })
            
            
        }
    }
}
</script>

<style>

</style>