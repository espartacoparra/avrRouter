
const { buildSchema, graphql } = require('graphql')
const schema = require('../graphql/schemes/schema')
const query = require('../graphql/queries/query')
const root = require('../graphql/rootvalues/root')
const axios = require('axios').default

module.exports = new class PhotoController {
 async index(req, res) {
  try {
   const query = req.body.query
   const photos = await (await axios.get('https://jsonplaceholder.typicode.com/photos')).data
   return res.json(await graphql(schema, query, root('allPhotos', photos)))
  } catch (error) {
   res.json(error)
  }
 }
}
