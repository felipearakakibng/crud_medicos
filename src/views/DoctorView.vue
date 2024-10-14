<script setup>
  import { reactive } from 'vue'
  import DoctorTable from '../components/DoctorTable.vue'
  
  const doctors = reactive({
    collection: [
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
    ],
    headers: [
      {
        title: 'Nome',
        key: 'nome',
      },
      { title: 'CRM',
        key: 'crm'
      },
      { title: 'Estado',
        key: 'estado'
      },
      { title: 'Situação',
        key: 'situacao'
      },
      { title: 'Actions',
        key: 'actions',
        sortable: false
      }
    ],
    editedItem: {
      name: '',
      crm: '',
      estado: '',
      situacao: ''
    },
    defaultItem: {
      name: '',
      crm: '',
      estado: '',
      situacao: ''
    }
  })


</script>

<template>
  <DoctorTable v-model="doctors" @response="() => console.log(doctors)"></DoctorTable>
</template>

<style>
</style>
