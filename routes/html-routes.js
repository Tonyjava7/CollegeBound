var https = require('https')
var path = require('path')
var getInfo = require('./apiCalls')

module.exports = function (app){
    //homepage
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, 'index.html'))
    })

    //form
    app.get('/form', function(req, res){

    })

    //results
    app.post('/results', function(req, res){
        var query = req.body.query
        var prevParams = req.body.prevParams
        getInfo(query, prevParams, res)
    })

    // *** Metadata ***
    // app.post("/metadata", function(req,res){
    //   var data = req.body
    //   console.log("********"+data)
    //   getInfo(data, res)
    // })

    //most viewed
    app.get('/mostviewed', function(req, res){

    })

    //page doesn't exist
    app.get('*', function(req, res){

    })
}
