<script setup lang="ts">
interface Doctor {
  nome: string
  crm: number
  estado: string
  situacao: string
}
const props = defineProps({
  label: String,
})

const doctor = defineModel({
  type: Object as PropType<Doctor>
})

const emit = defineEmits(['response'])

function clearFields() {
  doctor.value = { nome: '', crm: '', estado: '', situacao: '' }
}

</script>

<template>
  <v-dialog max-width="340">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        prepend-icon="mdi-package"
        width="204"
      >
        {{ props.label }} médico
      </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card
        prepend-icon="mdi-package"
      >
        <h2>{{ props.label }} médico</h2>
        <span>Nome: <input v-model="doctor.nome" placeholder="Digite o nome"></span>
        <span>CRM: <input v-model="doctor.crm" placeholder="Digite o CRM"></span>
        <span>Estado: <input v-model="doctor.estado" placeholder="Digite o estado"></span>
        <span>Situação: <input v-model="doctor.situacao" placeholder="Digite a situação"></span>

        <template v-slot:actions>
          <v-btn
            class="ml-auto"
            text="Salvar"
            @click="isActive.value = false; emit('response', doctor); clearFields()"
          ></v-btn>
        </template>
      </v-card>
    </template>
  </v-dialog>
</template>




<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  line-height: 1.5;
  max-height: 100vh;
}
</style>
