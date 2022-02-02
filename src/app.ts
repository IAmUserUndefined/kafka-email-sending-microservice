/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Kafka } from "kafkajs";
import SendEmailRules from "./class/SendMail";
import Helper from "./utils/helper/Helper";

const sendEmailRules = new SendEmailRules();
const kafka = new Kafka({ clientId: "send-email", brokers: [Helper.getKafkaPortEnvironmentVariable()] });
const consumer = kafka.consumer({ groupId: "send-email-group" });
const producer = kafka.producer();

const run = async () => {
		
	await consumer.connect();
	await consumer.subscribe({ topic: "request-send-email", fromBeginning: true });
	await consumer.run({
		eachMessage: async ({ topic, partition, message }) => {

			const messageValue: any = message.value.toString();

			const payload: any = JSON.parse(messageValue);

			const { subject, emailBody, email, token, url, response } = payload;

			const result = await sendEmailRules.execute({ subject, emailBody, email, token, url }) || response;

			await producer.connect();
			producer.send({
				topic: "response-send-email",
				messages: [
					{ value: result }
				]
			});
		},
	});
}; 

run().catch(console.error);