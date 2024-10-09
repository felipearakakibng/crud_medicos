<template>
  <div>
    <H1>Gestor de médicos</H1>
    <li v-for="doctor in doctors" :key="doctor">
      {{ doctor.nome }}
      {{ doctor.crm }}
      {{ doctor.estado }}
      {{ doctor.situacao }}
    </li>
  </div>



  <!-- To do: componentizar o form -->
  <DoctorForm></DoctorForm>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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


</script>




<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
