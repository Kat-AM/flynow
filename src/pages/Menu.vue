<template>  
  <v-app class="main-container">
    <!-- Barra lateral de navegación -->
    <v-navigation-drawer app permanent>
      <v-sheet class="drawer-container" elevation="2" height="100%">
        <v-list>
          <v-list-item-group>
            <!-- Barra de búsqueda -->
            <v-list-item @click="currentView = 'home'">
              <v-list-item-content>
                <v-list-item-title>FLYNOW</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <!-- Opción para la lista de vuelos -->
            <v-list-item @click="currentView = 'datacontrol'">
              <v-list-item-content>
                <v-list-item-title>Control</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!-- Opción para agregar un vuelo -->
            <v-list-item @click="currentView = 'addFlight'">
              <v-list-item-content>
                <v-list-item-title>Agregar Vuelo</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!-- Opción para agregar aviones -->
            <v-list-item @click="currentView = 'addAviones'">
              <v-list-item-content>
                <v-list-item-title>Reservaciones</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-sheet>
    </v-navigation-drawer>

    <!-- Barra de encabezado -->
    <v-app-bar app color="#111c2d">
      <!-- Barra de búsqueda centrada -->
      <v-spacer></v-spacer>
      
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-ticket</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Contenido principal -->
    <v-main>
      <v-container class="main-container">
        <!-- Mostrar el componente seleccionado -->
        <datacontrol v-if="currentView === 'datacontrol'"/>
        <AddFlight v-if="currentView === 'addFlight'" />
        <FlightList v-if="currentView === 'flightsList'" />
        <AddAviones v-if="currentView === 'addAviones'" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import datacontrol from '../components/datacontrol.vue';
import AddFlight from '../components/AddVuelos.vue';
import AddAviones from '../components/Reservaciones.vue';
import FlightList from '../components/Enlistarvuelos.vue';

const currentView = ref('flightsList'); // Vista inicial
</script>

<style scoped>
.drawer-container {
  border-radius: 12px;
  background-color: #111c2d;
  padding: 16px;
  height: 100%;
}
.toolbar {
  background-color: #111c2d;
}
.main-container {
  background-color: #2b3c53;
}
.search{
 margin-top:  5px;
 border-radius: 6px; 
}

</style>
