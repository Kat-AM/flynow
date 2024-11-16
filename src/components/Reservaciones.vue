<template>
    <v-container class="pa-5">
      <!-- Búsqueda de Vuelos -->
      <v-row class="mb-5">
        <v-col cols="12" md="8">
          <v-text-field
            label="Buscar vuelos por destino"
            v-model="search.destination"
            @input="filterFlights"
            outlined
            dense
            clearable
            prepend-icon="mdi-airplane"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" class="d-flex align-center">
          <v-btn color="primary" @click="searchFlights">Buscar</v-btn>
        </v-col>
      </v-row>
  
      <!-- Tabla de Vuelos Disponibles -->
      <v-card outlined class="mb-5">
        <v-card-title>Vuelos Disponibles</v-card-title>
        <v-data-table
          :headers="flightHeaders"
          :items="flights"
          item-key="id"
          class="elevation-1"
          dense
        >
          <template #item.actions="{ item }">
            <v-btn color="primary" @click="selectFlight(item)">Seleccionar</v-btn>
          </template>
        </v-data-table>
      </v-card>
  
      <!-- Card de Datos del Pasajero -->
      <v-card outlined>
        <v-card-title>Datos del Pasajero</v-card-title>
        <v-card-subtitle>Información del pasajero seleccionado</v-card-subtitle>
        <v-card-text>
          <v-form>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Nombre"
                  v-model="passenger.name"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Apellido"
                  v-model="passenger.lastname"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Documento de Identidad"
                  v-model="passenger.id"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Correo Electrónico"
                  v-model="passenger.email"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Teléfono"
                  v-model="passenger.phone"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-btn color="primary" @click="savePassenger">Guardar Datos</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const search = ref({
    destination: ''
  })
  
  const flights = ref([
    { id: 1, origin: 'Ciudad A', destination: 'Ciudad B', date: '2024-12-01', price: '$200' },
    { id: 2, origin: 'Ciudad C', destination: 'Ciudad D', date: '2024-12-05', price: '$250' },
    // Agrega más vuelos según sea necesario
  ])
  
  const passenger = ref({
    name: '',
    lastname: '',
    id: '',
    email: '',
    phone: '',
  })
  
  const flightHeaders = [
    { title: 'Origen', value: 'origin' },
    { title: 'Destino', value: 'destination' },
    { title: 'Fecha', value: 'date' },
    { title: 'Precio', value: 'price' },
    { title: 'Acciones', value: 'actions', sortable: false },
  ]
  
  function filterFlights() {
    // Lógica para filtrar vuelos por destino
    
  }
  
  function searchFlights() {
    // Lógica para buscar vuelos
    
  }
  
  function selectFlight(flight) {
    // Lógica para seleccionar un vuelo
    console.log('Vuelo seleccionado:', flight)
  }
  
  function savePassenger() {
    // Lógica para guardar los datos del pasajero
    console.log('Guardando datos del pasajero:', passenger.value)
  }
  </script>
  
  <style scoped>
  .pa-5 {
    padding: 20px;
  }
  .mb-5 {
    margin-bottom: 20px;
  }
  </style>
  