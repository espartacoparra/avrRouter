const { buildSchema } = require('graphql');
module.exports = schema = buildSchema(`
type Query{
 allUsers:[User]
 allPhotos:[Photo]
}

type User{
 id: ID
 first_name:String
 email: String
 last_name: String,
 avatar:String
}

type Photo{
 albumId: String
    id: ID
    title: String
    url: String
    thumbnailUrl: String
}

`)