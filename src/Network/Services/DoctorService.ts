import axios from 'axios'

export default class DoctorService {
  data: any
  constructor() {}

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
        console.log('then', data)

        alert(data)
      })
      .catch(function (error) {
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
}
