// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
let Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
let sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
let CamperInfo = sequelize.define("camperInfo", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  userPassword: Sequelize.STRING,
  state: Sequelize.STRING,
  created_at: Sequelize.DATE
});

// Syncs with DB
CamperInfo.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = CamperInfo;