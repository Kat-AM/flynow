<template>
  <v-app>
    <!-- Barra lateral de navegación -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item-group>
          <!-- Barra de búsqueda -->

          <v-list-item @click="currentView = 'flightsList'">
            <v-list-item-content>
              <v-list-item-title>FLYNOW</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
          
          <!-- Opción para la lista de vuelos -->
          <v-list-item @click="currentView = 'flightsList'">
            <v-list-item-content>
              <v-list-item-title>Inicio</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- Opción para agregar un vuelo -->
          <v-list-item @click="currentView = 'addFlight'">
            <v-list-item-content>
              <v-list-item-title>Agregar Vuelo</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Barra de encabezado -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-ticket</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Contenido principal -->
    <v-main>
      <v-container>
        <!-- Componente de agregar vuelo -->
        <AddFlight v-if="currentView === 'addFlight'" @flightAdded="addFlightToList" />

        <!-- Componente de la lista de vuelos con búsqueda y eliminación -->
        <FlightList v-else-if="currentView === 'flightsList'" :flights="filteredFlights" @removeFlight="removeFlightFromList" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue';
import AddFlight from '../components/AddVuelos.vue';
import FlightList from '../components/Enlistarvuelos.vue';

const drawer = ref(false);
const currentView = ref('flightsList');
const flights = ref([]);
const searchQuery = ref('');

// Filtrar vuelos según la consulta de búsqueda
const filteredFlights = computed(() => {
  return flights.value.filter((flight) =>
    flight.destination.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Función para añadir vuelo
const addFlightToList = (flight) => {
  flights.value.push(flight);
  currentView.value = 'flightsList';
};

// Función para eliminar vuelo
const removeFlightFromList = (index) => {
  flights.value.splice(index, 1);
};
</script>

<style scoped>
/* Estilos personalizados */
</style>
