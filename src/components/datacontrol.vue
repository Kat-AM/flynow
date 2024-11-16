<template>
  <v-container>
    <!-- Botones como diálogos en la parte superior -->
    <!-- <div class="d-flex justify-space-between mb-4">
      <v-btn color="primary" @click="dialogPlanes = true">Gestión de Aviones</v-btn>
      <v-btn color="primary" @click="dialogRutas = true">Gestión de Rutas</v-btn>
    </div> -->

    <!-- Diálogos para la gestión de aviones y rutas -->
    <v-dialog v-model="dialogUbicacion" max-width="500">
      <v-card class="custom-dialog">
        <v-card-title>Agregar Ubicacion</v-card-title>
        <v-card-text>
          <v-form>
              <v-text-field label="Codigo del Aeropuerto" v-model="newUbicacion.codigo" outlined></v-text-field>
              <v-text-field label="Ciudad" v-model="newUbicacion.ciudad" outlined></v-text-field>
              <v-text-field label="Pais" v-model="newUbicacion.pais" outlined></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="dialogUbicacion = false">Cerrar</v-btn>
          <v-btn color="primary" text @click="agregarUbicacion">Agregar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogRutas" max-width="500">
      <v-card class="custom-dialog">
        <v-card-title>Agregar Ruta</v-card-title>
        <v-card-text>
          <v-form>
              <v-text-field label="Codigo de la Ruta" v-model="newRuta.ruta" outlined></v-text-field>
              <v-text-field label="Codigo del punto de salida" v-model="newRuta.salida" outlined></v-text-field>
              <v-text-field label="Codigo del destino" v-model="newRuta.destino" outlined></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="dialogRutas = false">Cerrar</v-btn>
          <v-btn color="primary" text @click="agregarRuta">Agregar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogAvion" max-width="500">
      <v-card class="custom-dialog">
        <v-card-title>Agregar Avion</v-card-title>
        <v-card-text>
          <v-form>
                <v-text-field label="Modelo" outlined></v-text-field>
                <v-text-field label="Numero de Filas" outlined></v-text-field>
                <v-text-field label="Numero de columnas" outlined></v-text-field>
                <!-- <v-text-field label="Capacidad Total" outlined disabled="true"></v-text-field>   -->
              </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="dialogAvion = false">Cerrar</v-btn>
          <v-btn color="primary" text @click="agregarAvion">Agregar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Paneles de expansión para las tablas -->
    <v-expansion-panels>
      <v-expansion-panel class="custom-panel">
        <v-expansion-panel-title>Ubicaciones</v-expansion-panel-title>
        <v-expansion-panel-text >
          <v-data-table :headers="headersUbicaciones" :items="Ubicaciones" class="custom-table">
            <template v-slot:item.actions="{ item }">
              <v-icon small @click="editarUbicacion(item)">mdi-pencil</v-icon>
              <v-icon small @click="eliminarUbicacion(item)">mdi-delete</v-icon>
              <v-icon small color="primary" @click="dialogUbicacion = true">mdi-plus</v-icon>
            </template>
          </v-data-table>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel class="custom-panel">
        <v-expansion-panel-title>Rutas</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-data-table :headers="headersRutas" :items="rutas" class="custom-table">
            <template v-slot:item.actions="{ item }">
              <v-icon small @click="editarRuta(item)">mdi-pencil</v-icon>
              <v-icon small @click="eliminarRuta(item)">mdi-delete</v-icon>
              <v-icon small color="primary" @click="dialogRutas = true">mdi-plus</v-icon>
            </template>
          </v-data-table>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <!-- Panel para aviones -->
      <v-expansion-panel class="custom-panel">
        <v-expansion-panel-title>Aviones</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-data-table :headers="headersAviones" :items="aviones" class="custom-table">
            <template v-slot:item.actions="{ item }">
              <v-icon small @click="editarAvion(item)">mdi-pencil</v-icon>
              <v-icon small @click="eliminarAvion(item)">mdi-delete</v-icon>
              <v-icon small color="primary" @click="dialogAvion = true">mdi-plus</v-icon>
            </template>
          </v-data-table>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      // Variables para diálogos
      dialogUbicacion: false,
      dialogRutas: false,
      dialogAvion: false,
      enabledA: false,// para habilidar y deshabilidar los asientos
      enabledB: false,
      enabledC: false,
      enabledD: false,

      // Datos para las tablas y nuevos registros
      Ubicaciones: [
        { codigo: 'XPL', ciudad: 'Tegucigalpa', pais: 'Honduras' },
        { codigo: 'SAP', ciudad: 'San Pedro Sula', pais: 'Honduras'},
      ],
      headersUbicaciones: [
        { title: 'Aeropuerto', value: 'codigo' },
        { title: 'Ciudad', value: 'ciudad' },
        { title: 'Pais', value: 'pais' },
        { title: 'Acciones', value: 'actions', sortable: false },
      ],
      newUbicacion: { codigo: '', ciudad: '', pais: '' },

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
        { modelo: 'AV456', filas: '33',columnas: '6'},
        { modelo: 'AV455', filas: '30', columnas: '6'},
      ],
      headersAviones: [
        { title: 'Modelo', value: 'modelo' },
        { title: 'Numero de Filas', value: 'filas' },
        { title: 'Numero de Columnas', value: 'columnas' },
        { title: 'Acciones', value: 'actions', sortable: false },
      ],
    };
  },
  methods: {
    agregarUbicacion() {
      this.Ubicaciones.push({ ...this.newUbicacion });
      this.dialogPlanes = false;
      this.newUbicacion = { codigo: '', ciudad: '', pais: '' };
    },
    editarUbicacion(item) {
      // Lógica para editar una ubicación
    },
    eliminarUbicacion(item) {
      // Lógica para eliminar una ubicación
    },
    //------------------------------
    agregarRuta() {
      this.rutas.push({ ...this.newRuta });
      this.dialogRutas = false;
      this.newRuta = { ruta: '', salida: '', destino: '' };
    },
    editarRuta(item) {
      // Lógica para editar una ruta
    },
    eliminarRuta(item) {
      // Lógica para eliminar una ruta
    },
    //-----------------------------
    agregarAvion() {
      
      
    },
    editarAvion(item) {
      // Lógica para editar un avión
    },
    eliminarAvion(item) {
      // Lógica para eliminar un avión
    },
  },
};
</script>

<style scoped>
.colors {
  border-radius: 16px;
  background-color: #16293e;
}
.custom-panel {
  background-color: #111c2d; 
  color: #ffffff; 
}
.custom-table {
  background-color: #16293e; 
  color: #ffffff; 
}
.custom-dialog {
  background-color: #16293e; 
  color: #ffffff; 
}

</style>
