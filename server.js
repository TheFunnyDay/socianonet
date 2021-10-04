const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const methodOverride = require('method-override');
const postRoutes = require('./routes/post-routes');
const postApiRoutes = require('./routes/api-post-routes');
const createPath = require('./helpers/create-path');

//иконка

const errorMsg = chalk.bgKeyword('white').redBright;
const successMsg = chalk.bgKeyword('green').white;

const app = express();
//иконка


app.set('view engine', 'ejs');

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(successMsg('Connected to DB')))
  .catch((error) => console.log(errorMsg(error)));

app.listen(process.env.PORT, (error) => {
  error ? console.log(errorMsg(error)) : console.log(successMsg(`listening port ${process.env.PORT}`));
});

app.use(express.urlencoded({ extended: false }));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.static('static'));

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.redirect('/posts');
});

app.get('/settings', (req, res) => {
  const title = 'Настройки';
  res.render(createPath("settings"), { title });
});

app.use(postRoutes);
app.use(postApiRoutes);

app.use((req, res) => {
  const title = 'Error Page';
  res
    .status(404)
    .render(createPath('error'), { title });
});
