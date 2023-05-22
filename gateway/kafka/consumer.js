const {Kafka}  = require("kafkajs")

const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:9092','localhost:9093','localhost:9094'],
});

const consumer = kafka.consumer({ groupId: 'test-group' })

consumer.connect().then(console.log('consumer connected!'))


module.exports = consumer;