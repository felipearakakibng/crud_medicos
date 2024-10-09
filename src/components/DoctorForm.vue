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
  type: Object as PropType<Doctor>,
  default: () => ({ nome: '', crm: '', estado: '', situacao: '' })
})

const emit = defineEmits(['response'])

</script>

<template>
  <v-dialog max-width="500" v-model="doctor">
    <div class="modal-container">
      <div class="modal-body">
        <span class="modal-close" @click="emit('cancel')">X</span>
        <h2>{{ props.label }} médico:</h2>
        <span>Nome: <input v-model="doctor.nome" placeholder="Digite o nome"></span>
        <span>CRM: <input v-model="doctor.crm" placeholder="Digite o nome"></span>
        <span>Estado: <input v-model="doctor.estado" placeholder="Digite o nome"></span>
        <span>Situação: <input v-model="doctor.situacao" placeholder="Digite o nome"></span>
        <div class="modal-action">
          <button class="modal-button" @click="emit('response', doctor)">Salvar</button>
          <button class="modal-button" @click="emit('cancel')">Cancelar</button>
        </div>
      </div>
    </div>
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
