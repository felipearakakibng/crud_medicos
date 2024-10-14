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

  async create(data: any): Promise<any> {
    this.data = data
    const options = {
      method: 'POST',
      url: 'https://apidev.minhaescala.app/v1/cfm',
      headers: { 'Content-Type': 'application/json' },
      data: this.data
    }

    const response = await axios
      .request(options)
      .then(function (data) {
        console.log('then', data.data.message)

        alert(data.data.message)
      })
      .catch(function (error) {
        console.log('error', error)

        alert(error)
      })

    // debugger // eslint-disable-line

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

    console.log('validate', 'options', options)

    let response
    try {
      response = await axios.request(options)

      alert(response.data.status)
    } catch (e) {
      alert(e)
    }
    // debugger // eslint-disable-line
    console.log('response', response)

    return response
  }

  index() {
    return this.doctors
  }
}
