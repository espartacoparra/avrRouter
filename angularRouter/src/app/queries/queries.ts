export default {
 allUsers: `query {
  allUsers{
   id
  first_name
  email
  last_name
  avatar
  }
 }`,
 allPhotos: `query {
  allPhotos{
  url
  }
 }`
}