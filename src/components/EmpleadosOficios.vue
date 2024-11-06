<template>
  <div>
        <h1>Empleados Oficios</h1>
         <table class="table table-striped">
            <thead>
                <tr>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                    <th>Departamento</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="empleado in datosEmpleados" :key="empleado">
                    <td>{{empleado.apellido}}</td>
                    <td>{{empleado.oficio}}</td>
                    <td>{{empleado.salario}} $</td>
                    <td>{{empleado.departamento}}</td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
import ServiceEmpleados from '../services/ServiceEmpleados'
const service = new ServiceEmpleados()
export default {
    name:"EmpleadosOficios",
    methods:{
        loadEmpleados(){
            let oficio = this.$route.params.oficio
            service.getEmpleadosByOficios(oficio).then(result=>{
                this.datosEmpleados=result
            })

        }
    },
    data(){
        return{
            datosEmpleados:[]
        }
    },
    mounted(){
        this.loadEmpleados()
    },
    watch:{
        '$route.params.oficio'(nextVal,oldVal){
            if(nextVal!=oldVal){
                this.loadEmpleados()
            }
        }
    }
}
</script>

<style>

</style>