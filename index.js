const express = require('express')

const cors = require('cors')


var students =  [{
    'id': 1,
    'firstName': 'Alice',
    'Last Name': 'Zephyr',
    'Home Town': 'Seattle'
},{
    'id': 1,
    'firstName': 'Bob',
    'Last Name': 'Yellow',
    'Home Town': 'Vancouver'
},{
    'id': 1,
    'firstName': 'Claire',
    'Last Name': 'Xylitol',
    'Home Town': 'Toledo'
},{
    'id': 1,
    'firstName': 'Daniel',
    'Last Name': 'Winston',
    'Home Town': 'Akron'
},{
    'id': 1,
    'firstName': 'Edina',
    'Last Name': 'Veritas',
    'Home Town': 'Wichita'
}]

function findId (data, id){
    for (var i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            return data[i]
        }
    }
    return null
}

const app = express()
app.use(cors())

app.get('/', function(request, response){
    response.json({data: students})
})

app.get('/:id', function(request, response) {
    var record = findId(students, request.params.id)
    if (!record) {
        response.status(404).json({
            error: {
                message: 'No record found!'
            }
        })
    }
    response.json({data: record})
})

app.listen(process.env.PORT||3000)
