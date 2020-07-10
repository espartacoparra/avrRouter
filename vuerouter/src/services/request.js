import Vue from 'vue'

export default new class Request {
 constructor() {
  this.api = 'http://localhost:3000/'
 }
 async getTeam(query) {
  return (await Vue.axios.post(`${this.api}users`, this.query(query))).data.data
 }

 query(query) {
  return { query: query }
 }
}