<template>
  <div>
    <nav
      class="navbar navbar-expand-sm navbar-dark bg-dark"
      aria-label="Third navbar example"
    >
      <div class="container-fluid">

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample03">
          <ul class="navbar-nav me-auto mb-2 mb-sm-0">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/coche" >Coches</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/customers" >Customers</router-link>
            </li>
             <li class="nav-item">
              <router-link class="nav-link" to="/empleados" >Empleados</router-link>
            </li>
           

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Oficios</a
              >

              <ul class="dropdown-menu">
                <li v-for="oficio in oficios" :key="oficio">
                        <router-link :to="'/empleadosoficios/'+oficio">{{oficio}}</router-link>
                </li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ServiceEmpleados from '../services/ServiceEmpleados';
const service = new ServiceEmpleados()

export default {
  name: "MenuComponent",
  data() {
    return {
      oficios: [],
    };
  },
  mounted() {
    service.getOficios().then(result=>{
      this.oficios=result
    })
  }
};
</script>

<style></style>
