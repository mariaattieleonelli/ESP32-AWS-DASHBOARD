const express = require('express');
const bodyParser = require("body-parser");
const { exec } = require("child_process");

const app = express();

//Middlewares
app.use(express.static(__dirname+'/public/'));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//CORES


//RUTAS
app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + '/public/index.html');
});

app.get("/publish/:action", (req, res) => {
    
    const action = req.params.action;
    const publishURL = `aws --region us-east-1 iot-data publish --topic 'inTopic' --cli-binary-format raw-in-base64-out --payload '{\"action\":\"${action}\"}'`
    exec(publishURL, (error, stdout, stderror) => {
        if(error){
            console.log(error);
            res.status(200).send(error);
        }
        if(stderr){
            console.log(stderror);
            res.status(200).send(stderr);
        }
            console.log("Published");
            res.status(200).send(JSON.stringify({status:"published"}));
    });
});

module.exports = app;