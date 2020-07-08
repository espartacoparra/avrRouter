
const { buildSchema, graphql } = require('graphql')
const schema = require('../graphql/schemes/schema')
const query = require('../graphql/queries/query')
const root = require('../graphql/rootvalues/root')
const axios = require('axios').default


module.exports = new class UserController {
 async index(req, res) {
  try {
   const query = req.body.query
   const users = await (await axios.get('https://reqres.in/api/users?page=1')).data.data
   return res.json(await graphql(schema, query, root('allUsers', users)))
  } catch (error) {
   res.json(error)
  }
 }
}
