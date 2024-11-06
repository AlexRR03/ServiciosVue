<template>
    <div>
        <h1>Detalle Empleados</h1>
        <form v-on:submit.prevent="buscarEmpleado()">
            <label>Seleccionar empleado</label>
            <select v-model="idEmpleado" class="form-control">
                <option  v-for="empleado in listaEmpleados" :key="empleado" :value="empleado.idEmpleado">
                    {{empleado.apellido}}
                </option>
            </select>
            <button class="btn btn-primary">Buscar</button>
        </form>
        <div v-if="empleadoSeleccionado">
             <table class="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                    <th>Departamento</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{empleadoSeleccionado.idEmpleado}}</td>
                    <td>{{empleadoSeleccionado.apellido}}</td>
                    <td>{{empleadoSeleccionado.oficio}}</td>
                    <td>{{empleadoSeleccionado.salario}} $</td>
                    <td>{{empleadoSeleccionado.departamento}}</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<script>
//IMPORTAR AXIOS PARA LEER API Y GLOBAL QUE TIENE LA URL DEL SERVICIO
import ServiceEmpleados from '../services/ServiceEmpleados'
const service = new ServiceEmpleados()

export default {
    name:"EmpleadosComponent",
    data(){
        return{ 
            //VARIABLE DONDE SE GUARDA LOS EMPLEADOS QUE SE TRAE DE LA API
            listaEmpleados:[],
            idEmpleado:0,
            empleadoSeleccionado:null
        }

    },
    mounted(){
        service.getEmpleados().then(result=>{
            this.listaEmpleados = result
        })
    },
    methods:{
        buscarEmpleado(){
            service.findEmpleado(this.idEmpleado).then(result=>{
                this.empleadoSeleccionado=result
            })
        }
    }
}
</script>

<style>

</style>