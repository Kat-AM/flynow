<template>
  <v-container
    class="d-flex align-center justify-center login-container"
    fluid
    style="height: 100vh; background-color: #f7f7f7;"
  >
    <v-card class="pa-8 login-card" width="450">
      <v-card-title class="text-h5 text-center text-primary">Regístrate en FlyNow</v-card-title>

      <v-card-text>
        <v-form @submit.prevent="handleSignUp" ref="form">
          <!-- Correo Electrónico -->
          <v-text-field
            v-model="email"
            label="Correo Electrónico"
            prepend-icon="mdi-account"
            type="email"
            required
            outlined
            class="mb-4"
          ></v-text-field>

          <!-- Contraseña -->
          <v-text-field
            v-model="password"
            label="Contraseña"
            prepend-icon="mdi-lock"
            type="password"
            required
            outlined
            class="mb-4"
          ></v-text-field>

          <!-- Botón de Registrarse -->
          <v-btn type="submit" color="primary" block>Registrarse</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '@/firebase'; // Asegúrate de que esta ruta sea correcta
import { createUserWithEmailAndPassword } from 'firebase/auth';

const email = ref('');
const password = ref('');
const router = useRouter();

// Función para manejar el registro con correo y contraseña
const handleSignUp = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    router.push('/Menu'); // Redirige al menu después de un registro exitoso
  } catch (error) {
    console.error("Error signing up: ", error);
  }
};
</script>

<style scoped>
.login-container {
  background-color: #f7f7f7; /* Fondo claro */
}

.login-card {
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 15px hsla(220, 30%, 5%, 0.1), 0px 15px 35px -5px hsla(220, 25%, 10%, 0.1);
}

.text-primary {
  color: #FFFFFF !important; /* Azul Grisáceo Suave */
}

.mb-4 {
  margin-bottom: 1rem !important;
}
</style>
