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
      key: 'nome'
    },
    { title: 'CRM', key: 'crm' },
    { title: 'Estado', key: 'crmUf' },
    { title: 'Status', key: 'status' },
    { title: 'Type', key: 'type' },
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
  <DoctorTable v-model="doctors"></DoctorTable>
</template>

<style></style>
