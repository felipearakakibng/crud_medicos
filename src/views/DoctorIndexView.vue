<script setup lang="ts">
import { reactive, ref } from 'vue'
import DoctorForm from '../components/DoctorForm.vue'

// components() = { DoctorForm }

interface Doctor {
  nome: string
  crm: number
  estado: string
  situacao: string
}

let id = 0
let doctors: Doctor[] = ref(
  [
    {
      id: id++,
      nome: "Antônio Silva",
      crm: 123456,
      estado: 'SP',
      situacao: 'Ativo'
    },
    {
      id: id++,
      nome: "Juliana Cardos",
      crm: 222222,
      estado: 'RJ',
      situacao: 'Inativo'
    },
    {
      id: id++,
      nome: "Helena Couto",
      crm: 333333,
      estado: 'BA',
      situacao: 'Ativo'
    },
    {
      id: id++,
      nome: "Eduardo Prado",
      crm: 444444,
      estado: 'CE',
      situacao: 'Inativo'
    },
    {
      id: id++,
      nome: "Maria Laura",
      crm: 555555,
      estado: 'MA',
      situacao: 'Ativo'
    },
    {
      id: id++,
      nome: "Pedro Arantes",
      crm: 777777,
      estado: 'SC',
      situacao: 'Ativo'
    }
  ]
)

// Abordar edit
const create = ref("Adicionar")
const edit = ref("Editar")

const doctor: Doctor = reactive(
  {
    nome: "",
    crm: "",
    estado: "",
    situacao: ""
  }
)

function addDoctor(obj) {
  doctors.value.push(obj)
}

function checkAction(obj) {
  // Not the best practice...
  console.log('action', action.value)

  if (action.value == 'Adicionar') {
    addDoctor(obj)
  }
}

function deleteDoctor(id) {
  console.log('deleteDoctor', id)

}

</script>


<template>
  <div class="container">
    <div>
      <H1>Gestor de médicos</H1>
      <div>
        <DoctorForm :label="create" v-model="doctor" @response="(obj) => checkAction(obj)" />
      </div>
      <li v-for="doctor in doctors" :key="doctor">
        {{ doctor.nome }}
        {{ doctor.crm }}
        {{ doctor.estado }}
        {{ doctor.situacao }}

        <DoctorForm :label="edit" v-model="doctor.value" @response="(obj) => checkAction(obj)" />
        <v-btn @click="deleteDoctor(doctor.id)">Deletar</v-btn>
      </li>
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
