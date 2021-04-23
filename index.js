let request = require('request');
const argv = require('yargs').argv;
let apiKey ='480be85682ebba4153d873fb04707408';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
request(url,function(err,response,body){
    if(err){
        console.log('error:',error);
    }else{
        //console.log('body:',body);
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} farenhite in ${weather.name}`;
        console.log(message);
    }
});

