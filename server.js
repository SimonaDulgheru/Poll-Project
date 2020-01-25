const express = require('express');
const cors = require('cors');
require(`fetch`);
require(`dotenv`).config();

const PORT = process.env.PORT || 3000;
const db = require("./models");
const seeds = require(`./seed.js`);

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(cors());

require('./routes/api-routes.js')(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync({force:true})
    .then(() => {
        seeds(db);
        app.listen(PORT, () => {
            console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
    });
});