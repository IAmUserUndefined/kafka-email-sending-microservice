/* eslint-disable @typescript-eslint/no-unused-vars */

import Kafka from "./providers/Kafka/Kafka";
import Mail from "./providers/Mail/Mail";
import IPayload from "./interfaces/IPayload";

const kafka = new Kafka();
const mail = new Mail();

const bootstrap = async () => {
	await kafka.consumer("request-send-email", {
		eachMessage: async ({ topic, partition, message }) => {

			const messageValue: string = message.value.toString();

			const payload: IPayload = JSON.parse(messageValue);

			const { subject, emailBody, email, token, url } = payload;

			const response = await mail.sendMail(email, subject, emailBody, {
				appUrl: url,
				email: email,
				token: token
			});

			kafka.producer("response-send-email", response);
		},
	});
}; 

bootstrap().catch(console.error);