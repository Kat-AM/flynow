<template>
  <v-container
    class="d-flex align-center justify-center login-container"
    fluid
    style="height: 100vh; background-color: #f7f7f7;"
  >
    <v-card class="pa-8 login-card" width="450">
      <v-card-title class="text-h5 text-center text-primary">Iniciar Sesión en FlyNow</v-card-title>

      <v-card-text>
        <v-form @submit.prevent="handleSignIn" ref="form">
          <!-- Correo Electrónico -->
          <v-text-field
            v-model="email"
            label="Correo Electrónico"
            prepend-icon="mdi-account"
            type="email"
            required
            outlined
            :color="emailError ? 'red' : 'primary'"
            :error="passwordError"
            :error-messages="passwordErrorMessage"
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
            :color="passwordError ? 'red' : 'primary'"
            :error="passwordError"
            :error-messages="passwordErrorMessage"
            class="mb-4"
          ></v-text-field>

          <!-- Enlace de "¿Olvidaste tu contraseña?" -->
          <v-row class="d-flex justify-space-between mt-3">
            <v-btn text small @click="openForgotPassword" class="text-primary">
              ¿Olvidaste tu contraseña?
            </v-btn>
          </v-row>

          <!-- Botón de Iniciar Sesión -->
          <v-btn type="submit" color="primary" block>Iniciar Sesión</v-btn>
          
          <!-- Divider y opciones de login -->
          <v-divider class="my-4">o</v-divider>

          <!-- Google Login -->
          <v-btn color="blue lighten-4" block @click="handleProviderGoogle" class="d-flex align-center">
            <v-icon left>mdi-google</v-icon> Iniciar sesión con Google
          </v-btn>

          <!-- Enlace para registrar una nueva cuenta -->
          <v-row class="mt-4 justify-center">
            <span class="text-primary">¿No tienes una cuenta?</span>
          </v-row>
          <v-row class="mt-2 justify-center">
            <v-btn text color="primary" @click="navigateToSignUp">Regístrate</v-btn>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth, googleAuthProvider } from '@/firebase'; // Asegúrate de que esta ruta sea correcta
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const email = ref('');
const password = ref('');
const passwordError = ref(false);
const passwordErrorMessage = ref('');
const router = useRouter();

// Función para manejar el login con correo y contraseña
const handleSignIn = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push('/Menu'); // Redirige al menu si el login es exitoso
  } catch (error) {
    passwordError.value = true;
    passwordErrorMessage.value = 'Correo y/o contraseña incorrectos';
    console.error("Error signing in: ", error);
  }
};

// Función para manejar login con Google
const handleProviderGoogle = async () => {
  try {
    await signInWithPopup(auth, googleAuthProvider);
    router.push('/Menu'); // Redirige al menu después de un login exitoso con Google
  } catch (error) {
    console.log("Google sign-in error: ", error);
  }
};

// Función para navegar a la página de registro
const navigateToSignUp = () => {
  router.push('/SignUp'); // Redirige a la página de registro
};

// Función para manejar la recuperación de contraseña
const openForgotPassword = () => {
  router.push('/ForgotPassword'); // Redirige a una página de recuperación de contraseña
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

.v-btn.text-primary {
  color: #FFFFFF !important;
}

.v-btn.color-blue-lighten-4 {
  background-color: #88BDF2 !important; /* Azul Cielo */
  color: #384959 !important; /* Azul Profundo */
}

.v-divider {
  border-color: #BDDDFC !important; /* Azul Claro */
}
</style>
