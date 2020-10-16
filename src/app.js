const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const app = express()
//heroku port
const port = process.env.PORT || 3000
const publicdircpath = path.join(__dirname,'../public')
const viewsdircpath = path.join(__dirname,'../views/')
//const aboutpagepath = path.join(__dirname,'../public/about.html')
//const helppagepath = path.join(__dirname,'../public/help.html')
//console.log(__dirname) //current path
//console.log(path.join(__dirname,'../public'))
const viewPath = path.join(__dirname,'../templates/views/')
const partialPath = path.join(__dirname,'../templates/partials')
app.set('view engine', 'hbs')
app.set('views',viewPath)
hbs.registerPartials(partialPath) //register partial path
app.engine('html', require('hbs').__express)
app.use(express.static(publicdircpath)) //main page
//app.use('/about', express.static(aboutpagepath)) //About page
//app.use('/help', express.static(helppagepath)) //Help page

//homepage call through hbs
app.get('/', ( req, res) => {
    res.render(viewPath +'index',{
        title:'Weather Application',
        name:'koyal das'

    })
})
app.get('/about', ( req, res) => {
    res.render(viewPath+'about',{
        title:'About Page',
        name:'koyal das'
    })
})
app.get('/help', ( req, res) => {
    res.render(viewPath+'help',{
        title:'Help Page',
        name:'koyal das'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})
app.get('/products',(req,res) => {
    if(!req.query.search){
        return res.send({
            error : 'you must provide a search query!'
        })

    } 
        console.log(req.query.search)
        res.send({
            products:[]
        })

    
    
})
app.get('/help/*',(req,res) => {
    res.render(viewPath+'404help',{
        title:'Help article Not found',
        name:'koyal'
    })

})
//404 page 
app.get('*',(req,res) => {
    res.render(viewPath+'404',{
        title:'Page Not found',
        name:'koyal'
    })

})
app.listen(port,() => {
    console.log('server is up on port !'+port)
})
