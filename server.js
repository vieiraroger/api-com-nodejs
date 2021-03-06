var express = require('express');

app = express();
port = process.env.PORT || 3000;
mongoose = require('mongoose')
livro = require('./api/models/livroModel');
bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('SEU LINK DO BANCO');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/livroRoutes');
routes(app);

app.listen(port);
