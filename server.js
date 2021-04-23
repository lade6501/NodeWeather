const express = require('express');
const bodyParser = require('body-parser');
let request = require('request');
let apiKey ='480be85682ebba4153d873fb04707408';
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');


app.get('/',function(req,res){
    res.render('index',{weather : null,error: null});
})

app.post('/', function (req, res) {
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
  request(url, function (err, response, body) {
      if(err){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weather = JSON.parse(body)
        if(weather.main == undefined){
          res.render('index', {weather: null, error: 'Error, please try again'});
        } else {
          let weatherText = `It's ${weather.main.temp} farenhite in ${weather.name}!`;
          res.render('index', {weather: weatherText, error: null});
        }
      }
    });
})

app.listen(8008,function(){
    console.log('app listening on port 8008');
})