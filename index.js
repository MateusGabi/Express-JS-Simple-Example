/**
*
* @author Mateus Gabi Moreira
*/
var express = require('express')
var app = express()
var bodyParser = require('body-parser')


var port = process.env.PORT || 3000


// support json bodies
app.use(bodyParser.json())


app.post('/submit', async (req, res) => {

	var user_id = req.body.id
    var token = req.body.token

	res.status(200).json({message: 'Success!', payload: {
		user_id : user_id,
		token : token
	}})
})


app.listen(port)
console.log('Server started! At http://localhost:' + port)