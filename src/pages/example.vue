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
        :headers="HeadersVuelos"
        :items="vuelos"
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
    <!-- <v-card outlined>
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
    </v-card> -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      // Datos para las tablas y nuevos registros
      vuelos: [
        { codigo: 'XPL', ciudad: 'Tegucigalpa', pais: 'Honduras' },
        { codigo: 'SAP', ciudad: 'San Pedro Sula', pais: 'Honduras'},
      ],
      HeadersVuelos: [
        { title: 'Aeropuerto', value: 'codigo' },
        { title: 'Ciudad', value: 'ciudad' },
        { title: 'Pais', value: 'pais' },
        { title: 'Acciones', value: 'actions', sortable: false },
      ],

      rutas: [
        { ruta: 'AV456', salida: 'XPL', destino: 'SAP' },
        { ruta: 'AV455', salida: 'SAP', destino: 'XPL' },
      ],
      headersRutas: [
        { title: 'Ruta', value: 'ruta' },
        { title: 'Origen', value: 'salida' },
        { title: 'Destino', value: 'destino' },
        { title: 'Acciones', value: 'actions', sortable: false },
      ],
      newRuta: { ruta: '', salida: '', destino: '' },

      aviones: [
        { modelo: 'AV456', asientos: '200' },
        { modelo: 'AV455', asientos: '150' },
      ],
      headersAviones: [
        { title: 'Modelo', value: 'modelo' },
        { title: 'Capacidad', value: 'asientos' },
        { title: 'Acciones', value: 'actions', sortable: false },
      ],
    };
  },
  methods: {
    buscarVuelos() {
      // llenar la tabla de vuelos disponibles
      try {
      const response = await fetch('/ruta_a_tu_json.json');
      flights.value = await response.json();
    } catch (error) {
      console.error("Error al cargar los datos del JSON:", error);
    }
    },
    editarUbicacion(item) {
      
    },
    
  },
  mounted() {
  fetch('/ejemplo.json')
    .then(response => response.json())
    .then(data => {
      this.items = data;
       
    })
    .catch(error => {
      console.error("Error al cargar el catedraticos:", error);
    });

}
};
</script>