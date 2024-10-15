import axios from 'axios'

export default class DoctorService {
  data: any
  doctors: any[]
  constructor() {
    this.doctors = [
      {
        doctorName: 'Antônio Silva',
        crm: 123456,
        crmUf: 'SP',
        status: 'Ativo',
        type: 'Principal',
        specialties: ''
      },
      {
        doctorName: 'Juliana Cardoso',
        crm: 222222,
        crmUf: 'RJ',
        status: 'Cancelado',
        type: 'Principal',
        specialties: ''
      },
      {
        doctorName: 'Helena Couto',
        crm: 333333,
        crmUf: 'BA',
        status: 'Ativo',
        type: 'Principal',
        specialties: ''
      },
      {
        doctorName: 'Eduardo Prado',
        crm: 444444,
        crmUf: 'CE',
        status: 'Cancelado',
        type: 'Principal',
        specialties: ''
      },
      {
        doctorName: 'Maria Laura',
        crm: 555555,
        crmUf: 'MA',
        status: 'Ativo',
        type: 'Principal',
        specialties: ''
      },
      {
        doctorName: 'Pedro Arantes',
        crm: 777777,
        crmUf: 'SC',
        status: 'Ativo',
        type: 'Principal',
        specialties: ''
      }
    ]
  }

  create(data: any) {
    this.data = data
    const options = {
      method: 'POST',
      url: 'https://apidev.minhaescala.app/v1/cfm',
      headers: { 'Content-Type': 'application/json' },
      data: this.data
    }

    const response = axios
      .request(options)
      .then((data) => {
        alert(data.data.message)
      })
      .catch((error) => {
        alert(error)
      })

    return response
  }

  async validate(data: any) {
    this.data = data
    const options = {
      method: 'GET',
      url: 'https://apidev.minhaescala.app/v1/cfm',
      headers: { 'Content-Type': 'application/json' },
      params: this.data
    }

    let response
    try {
      response = await axios.request(options)
      alert(response.status + ' ' + response.statusText)
    } catch (e) {
      alert(e)
    }

    return response
  }

  index() {
    return this.doctors
  }
}
