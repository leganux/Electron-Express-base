var express = require('express');
var app = express();
const path = require('path');
const bodyParser = require('body-parser');
var express_port = 8000;

const config = require('./config/general.config');


app.use(bodyParser.json({limit: '100mb', type: 'application/json'}));
app.use(bodyParser.urlencoded({parameterLimit: 100000, limit: '100mb', extended: true}));

app.set("view engine", "pug");
app.use(require('cookie-parser')());


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());

app.use('/', require('./routes/app_routes'))
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.set("views", path.join(__dirname, "views"));
app.use(function (req, res) {
    res.status(404).json({
        success: false,
        error_code: 404,
        message: 'No pudimos establecer la conexión con el sistema, intentelo más tarde o consulte al administrador'
    });
});
app.listen(express_port, function () {
    console.log('Example app listening on port ' + express_port + '!');
});