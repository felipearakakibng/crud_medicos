import { defineStore } from 'pinia'
import DoctorService from '@/Network/Services/DoctorService'

const doctorService = new DoctorService()

export type DoctorState = {
  doctorName: string
  crm: string
  crmUf: string
  status: string
  type: string
  specialties: string[]
}

export const useDoctorStore = defineStore('doctor', {
  state: (): DoctorState => ({
    doctorName: '',
    crm: '',
    crmUf: '',
    status: '',
    type: '',
    specialties: []
  }),
  actions: {
    async create(data: DoctorState): Promise<void> {
      return await doctorService.create(data)
    },
    async validate(data: DoctorState) {
      return await doctorService.validate(data)
    }
  }
})
