const jwt = require("jsonwebtoken");
// const producer = require("../../kafka/producer");
const consumer = require("../../gateway/kafka/consumer")

const config = process.env;

const verifyToken = async () => {

  try {
    console.log("hello")

    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })
    console.log("consumer subscribed")
    await consumer.run({
     
      eachMessage: ({ message }) => {
    
        console.log(`received message: `, JSON.parse(message.value))
       
      },
    })

    
  } catch (err) {
   console.log(err)
  }

};
verifyToken();
//req.body.token || req.query.token || req.headers["x-access-token"] ||