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
  <div class="form">
    <!-- Trocar por form -->
    <span>{{ props.label }} médico:</span>
    <span>{{ doctor }}</span>
    <span>Nome: <input v-model="doctor.nome" placeholder="Digite o nome"></span>
    <span>CRM: <input v-model="doctor.crm" placeholder="Digite o nome"></span>
    <span>Estado: <input v-model="doctor.estado" placeholder="Digite o nome"></span>
    <span>Situação: <input v-model="doctor.situacao" placeholder="Digite o nome"></span>
    
    <button @click="emit('response', doctor)">{{ label }}</button>
  </div>
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
