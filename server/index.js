const express = require('express')
const app = express()
const port = 3000
var hash = require('object-hash')
var data= {};
var i = 0;

// express configuration
app.use(express.json({type: '*/*'}));

// Set your routes
app.get('/', (req, res) => res.send('Hello World!'))
app.post('/', function (req, res) {
    
    res.send(`Received object. ${JSON.stringify(req.body)}`);

});
//One time sharing
app.get('/:key', (req, res) => {
var key = req.params.key
if(data[key]){
	res.send(JSON.stringify(data[key]));
	delete data[key];
}
else{
	res.send(JSON.stringify({"success":false,"error":404,"message":"Not Found"}));
}

});

app.post('/share', function (req, res) {
    var key = hash(req.body) + (+new Date).toString(36);
    data[key] = req.body;
    res.send(JSON.stringify({"success":true,"link": "http://localhost:3000/"+key }));
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
