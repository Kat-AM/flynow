<template>
  <v-dialog v-model="isDialogVisible" max-width="400px">
    <v-card>
      <v-card-title class="text-h5">Restaurar Contraseña</v-card-title>

      <v-card-text>
        <v-form @submit.prevent="handlePasswordReset">
          <v-text-field
            v-model="email"
            label="Correo Electrónico"
            type="email"
            required
            outlined
            :error-messages="emailErrorMessages"
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn @click="closeDialog">Cancelar</v-btn>
        <v-btn color="primary" @click="handlePasswordReset">Enviar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';  // Importa el router de Vue
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/firebase'; // Asegúrate de que esta ruta sea correcta

// Estado para manejar el email y el estado del diálogo
const email = ref('');
const isDialogVisible = ref(true);

// Error de validación de correo
const emailErrorMessages = ref([]);

// Obtener el router
const router = useRouter();

// Función para cerrar el diálogo
const closeDialog = () => {
  isDialogVisible.value = false;
};

// Función para manejar el restablecimiento de contraseña
const handlePasswordReset = async () => {
  if (!email.value) {
    emailErrorMessages.value = ['Por favor ingrese un correo electrónico.'];
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email.value);
    alert('Se ha enviado un correo para restablecer su contraseña');
    closeDialog();  // Cierra el diálogo

    // Redirige a la página de inicio de sesión después de enviar el correo de recuperación
    router.push('/');  // Redirige a SignIn
  } catch (error) {
    console.error("Error al enviar el correo de recuperación: ", error);
    alert(`Error: ${error.message}`);
  }
};
</script>

<style scoped>
.v-dialog {
  min-width: 350px;
}
</style>
