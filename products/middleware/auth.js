const jwt = require("jsonwebtoken");
const producer = require("../../gateway/kafka/producer");
producer

const config = process.env;

const verifyToken = async (req, res, next) => {

  const token =
    req.headers.authorization.split(' ')[1];


  if (!token) {
    return res.status(403).json({ message: "A token is required for authentication." });
  }
  console.log("Message Sent: ", token)
  try {

    await producer.send({
      topic: 'test-topic',
      messages: [
        { value: JSON.stringify(token) },
      ],
    })
    // console.log(sentMessage)

    // var decoded;
    // await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })
    // console.log("consumer subscribed")
    // await consumer.run({
    //   // this function is called every time the consumer gets a new message
    //   eachMessage: ({ message }) => {
    //     // here, we just log the message to the standard output
    //     console.log(`received message: `, JSON.parse(message.value))
    //     decoded= message.value
    //   },
    // })

    // // const decoded = jwt.verify(token, config.TOKEN_KEY);
    // req.user = decoded;
    // console.log(req.user)
  } catch (err) {
    return res.status(401).json({ message: "Please enter a valid token." });
  }
  next();
};

module.exports = verifyToken;
//req.body.token || req.query.token || req.headers["x-access-token"] ||