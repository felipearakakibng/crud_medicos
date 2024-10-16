<script setup>
import { reactive } from 'vue'
import DoctorTable from '../components/DoctorTable.vue'
import DoctorService from '@/Network/Services/DoctorService'

const doctorService = new DoctorService()
const doctors = reactive({
  collection: doctorService.index(),
  headers: [
    {
      title: 'Nome',
      key: 'doctorName'
    },
    { title: 'CRM', key: 'crm' },
    { title: 'Estado', key: 'crmUf' },
    { title: 'Status', key: 'status' },
    { title: 'Tipo', key: 'type' },
    { title: 'Especialidades', key: 'specialties' },
    { title: 'Ações', key: 'actions', sortable: false }
  ],
  editedItem: {
    doctorName: '',
    crm: '',
    crmUf: '',
    status: '',
    type: '',
    specialties: []
  },
  defaultItem: {
    doctorName: '',
    crm: '',
    crmUf: '',
    status: '',
    type: '',
    specialties: []
  }
})
</script>

<template>
  <router-link to="/">Voltar</router-link>
  <DoctorTable v-model="doctors"></DoctorTable>
</template>

<style></style>
