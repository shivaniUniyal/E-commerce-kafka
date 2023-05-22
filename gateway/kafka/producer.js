const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:9092','localhost:9093','localhost:9094'],
});

const producer = kafka.producer()
 producer.connect().then(console.log("Producer up and ready."))

module.exports = producer;