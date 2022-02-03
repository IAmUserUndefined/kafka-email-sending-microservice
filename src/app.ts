/* eslint-disable @typescript-eslint/no-unused-vars */

import Kafka from "./providers/Kafka/Kafka";
import SendEmail from "./classes/SendMail/SendMail";
import IPayload from "./interfaces/IPayload";

const kafka = new Kafka();
const sendEmail = new SendEmail();

const bootstrap = async () => {
	await kafka.consumer("request-send-email", {
		eachMessage: async ({ topic, partition, message }) => {

			const messageValue: string = message.value.toString();

			const payload: IPayload = JSON.parse(messageValue);

			const { subject, emailBody, email, token, url } = payload;

			const response = await sendEmail.execute({ subject, emailBody, email, token, url });

			kafka.producer("response-send-email", response);
		},
	});
}; 

bootstrap().catch(console.error);