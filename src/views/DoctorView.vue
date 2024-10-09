<script setup lang="ts">
import { reactive, ref } from 'vue'
import DoctorForm from '../components/DoctorForm.vue'


const doctors = ref(
  [
    {
      nome: "Antônio Silva",
      crm: 123456,
      estado: 'SP',
      situacao: 'Ativo'
    },
    {
      nome: "Juliana Cardos",
      crm: 222222,
      estado: 'RJ',
      situacao: 'Inativo'
    },
    {
      nome: "Helena Couto",
      crm: 333333,
      estado: 'BA',
      situacao: 'Ativo'
    },
    {
      nome: "Eduardo Prado",
      crm: 444444,
      estado: 'CE',
      situacao: 'Inativo'
    },
    {
      nome: "Maria Laura",
      crm: 555555,
      estado: 'MA',
      situacao: 'Ativo'
    },
    {
      nome: "Pedro Arantes",
      crm: 777777,
      estado: 'SC',
      situacao: 'Ativo'
    }
  ]
)

const action = ref("Adicionar")

const doctor = reactive(
  {
    nome: "",
    crm: "",
    estado: "",
    situacao: ""
  }
)

</script>


<template>
  <div class="container">
    <div>
      <H1>Gestor de médicos</H1>
      <li v-for="doctor in doctors" :key="doctor">
        {{ doctor.nome }}
        {{ doctor.crm }}
        {{ doctor.estado }}
        {{ doctor.situacao }}
      </li>
    </div>


    <div>
      <DoctorForm :label="action" v-model="doctor" />
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
