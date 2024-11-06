import { createRouter, createWebHistory } from "vue-router";

import CochesComponent from'./components/CochesComponent' 
import CustomersComponent from './components/CustomersComponent'
import EmpleadosComponent from'./components/EmpleadosComponent' 
import HomeComponent from './components/HomeComponent'
import EmpleadosOficios from './components/EmpleadosOficios'

const myRoutes = [
    {
        path:"/",
        component:HomeComponent
    },
    {
        path:"/coche",component:CochesComponent
    },
    {
        path:"/customers",component:CustomersComponent
    },
    {
        path:"/empleados",component:EmpleadosComponent
    },
    {
        path:"/empleadosoficios/:oficio", component:EmpleadosOficios
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router