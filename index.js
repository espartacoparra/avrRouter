const express = require('express')
const app = express()
const router = require('./src/routes/router')
const cors = require('cors')
const bodyParser = require('body-parser')

app.set('port', 3000)

app.use(cors())
app.use(bodyParser.json())

app.use('/', router)

app.listen(app.get('port'), () => {
 console.log('server running on port ' + app.get('port'));
})