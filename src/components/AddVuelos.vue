<template> 
  <v-container>
    
      <!-- Formulario de Ubicación -->
      
        <v-card class="my-card" max-width="auto" outlined>
          <v-card-title>Agregar vuelos</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field label="Codigo de Ruta" outlined></v-text-field>
              <v-text-field label="Estado" outlined></v-text-field> 
              <!-- usar radiobutons -->
              <v-text-field label="Codigo del Avion" outlined></v-text-field>

              <v-row>
                <v-col cols="12" md="6" class="d-flex justify-center">
                  <v-date-input
                    outline
                    multiple="range"
                    v-model="dates"
                    label="Seleccionar fechas"
                    max-width="500"
                  ></v-date-input>
                </v-col>

                <v-spacer></v-spacer>

                <v-col cols="12" md="3" class="d-flex justify-center">
                  <v-combobox
                    outline
                    label="Hora de salida"
                    :items="['00:00', '00:01']"
                    dense
                  ></v-combobox>
                </v-col>

                <v-spacer></v-spacer>

                <v-col cols="12" md="3" class="d-flex justify-center">
                  <v-combobox
                    label="Hora de llegada"
                    :items="['00:00', '00:01']"
                    dense
                  ></v-combobox>
                </v-col>
              </v-row>

              
              
              <v-btn color="primary" class="mt-4">Agregar</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
    
    
  </v-container>
</template>

<script>
import { VDateInput } from 'vuetify/labs/VDateInput'

export default {
  name: 'CardView',
  components: {
    VDateInput,
  },
  data: () => ({
      dates: null,
    })

}
</script>

<style scoped>
.my-card {
  border-radius: 16px;
  background-color: #16293e
}
</style>
