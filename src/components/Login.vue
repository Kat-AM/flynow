<template>
  <v-container class="d-flex align-center justify-center" style="height: 100vh;">
    <v-card class="pa-8" width="400">
      <v-card-title class="text-h5 text-center">Iniciar Sesión en FlyNow</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handleLogin" ref="form">
          <v-text-field
            v-model="email"
            label="Correo Electrónico"
            prepend-icon="mdi-account"
            type="email"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Contraseña"
            prepend-icon="mdi-lock"
            type="password"
            required
          ></v-text-field>
          <v-btn type="submit" color="primary" block>Iniciar Sesión</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('Admin');
const password = ref('1234');
const router = useRouter();

const handleLogin = () => {
  
  if (email.value && password.value) {
    console.log('Iniciar sesión con', email.value, password.value);
    // autenticar

    // Redirigir a la página MENU (automáticamente generado por vue-router/auto)
    router.push('/Menu');
  } else {
    console.log('Por favor ingresa ambos campos');
  }
};
</script>

<style scoped>
</style>

  