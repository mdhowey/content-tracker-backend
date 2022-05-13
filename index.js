const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const db = require('./models')

db.sequelize.sync().then(() => {
  // TODO Remove console.log before deployment
  console.log("DB connected");
});

// TODO Look into deployment configurations
// Probably should just be deleted
// db.sequelize.sync({force:true}).then(() => {
//   console.log("Drop and re-sync happened successfully in PostgreSQL.")
// });

// configure cors options
var corsOptions = {
  origin: "http://localhost:8081"
};

// add cors
app.use(cors(corsOptions));

// parse requests (json)
app.use(bodyParser.json());

// TODO what is this?
// content-type --> application/x-www-form-urlencoded ????
app.use(bodyParser.urlencoded({ extended: true }));

// Requiring routes folder
require("./routes/article.routes")(app);
require("./routes/user.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server up and running at: http://localhost:${PORT}`);
});