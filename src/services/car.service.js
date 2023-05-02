import axios from "axios"

export const CarService = {
  async getAll() {
    const response = await axios.get('http://localhost:3001/cars-catalog')

    return response.data
  },

  async getById(id) {
    const response = await axios.get(`http://localhost:3001/cars-catalog?id=${id}`)

    return response.data[0]
  }
}