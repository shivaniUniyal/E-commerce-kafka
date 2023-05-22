var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var dotenv = require('dotenv');
const db = require("./config/db");
let cors = require("cors");
// require("./middleware/auth")
// const {consumeMessage}= require('./middleware/auth')

let userRouter =require("./routes/user");
const consumer = require("../gateway/kafka/consumer");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler, ,
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const showMessage =  async()=>{
  
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })
  console.log("consumer subscribed")
  await consumer.run({
    
    eachMessage: ({ message }) => {
      
      console.log(`received message: `, JSON.parse(message.value))
       
    },
  })
  
}
showMessage();


const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App is listen to port ${port} for users`);
});

module.exports = app;