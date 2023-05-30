//const { Person } =  require("./person");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/databse/connect");

dotenv.config();

connectToDatabase();

require("./modules/express")


//require("./modules/http");
//require("./modules/express");
//const person = new Person("João");
//console.log(person.sayMyName());