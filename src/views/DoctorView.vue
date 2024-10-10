<script setup lang="ts">
import { ref, onMounted } from 'vue'
import DoctorForm from '../components/DoctorForm.vue'
interface Doctor {
  nome: string
  crm: number
  estado: string
  situacao: string
}

const create = ref("Adicionar")
const edit = ref("Editar")
let doctors: Doctor[] = ref([])
let newDoctor: Doctor = ref(
  {
    nome: "",
    crm: "",
    estado: "",
    situacao: ""
  }
)

function addDoctor() {
  const clone = ref(Object.assign({}, newDoctor.value))
  doctors.value.push(clone)
  newDoctor.value = { nome: '', crm: '', estado: '', situacao: '' }
}

function deleteDoctor(index) {
  doctors.value.splice(index, 1)
}

onMounted(() => {
  doctors.value = [
    ref({
      nome: "Antônio Silva",
      crm: 123456,
      estado: 'SP',
      situacao: 'Ativo'
    }),
    ref({
      nome: "Juliana Cardos",
      crm: 222222,
      estado: 'RJ',
      situacao: 'Inativo'
    }),
    ref({
      nome: "Helena Couto",
      crm: 333333,
      estado: 'BA',
      situacao: 'Ativo'
    }),
    ref({
      nome: "Eduardo Prado",
      crm: 444444,
      estado: 'CE',
      situacao: 'Inativo'
    }),
    ref({
      nome: "Maria Laura",
      crm: 555555,
      estado: 'MA',
      situacao: 'Ativo'
    }),
    ref({
      nome: "Pedro Arantes",
      crm: 777777,
      estado: 'SC',
      situacao: 'Ativo'
    })
  ]
})
</script>

<template>
  <div class="container">
    <div>
      <H1>Gestor de médicos</H1>
      <div>
        <DoctorForm :label="create" v-model="newDoctor" @response="() => addDoctor()" />
      </div>
      <ul v-if="doctors && doctors.length">
        <li v-for="(doctor, index) in doctors" :key="doctor">
          {{ doctor.value.nome }}
          {{ doctor.value.crm }}
          {{ doctor.value.estado }}
          {{ doctor.value.situacao }}
          <DoctorForm :label="edit" v-model="doctor.value" />
          <v-btn @click="deleteDoctor(index)">Deletar</v-btn>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .container {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>
