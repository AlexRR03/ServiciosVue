<template>
    <div>
        <h1>Home</h1>
        <h2 style="color:black">{{mensaje}}</h2>
    </div>
</template>

<script>
import ServiceEjemplo from '../services/ServiceEjemplo';
//PARA PODER UTILIZAR EL SERVICIO ES NECESARIO UNA CONSTANTE INSTANCIADO
//CON LA CLASE DEL SERVICIO NECESARIO

const service = new ServiceEjemplo();
export default {

    name:"HomeComponent",
    data(){
        return{
            mensaje:""
        }
    },
    mounted(){
        this.mensaje=service.getSaludo("Batman")
    }
}
</script>

<style>

</style>