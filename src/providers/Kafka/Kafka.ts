import Helper from "../../utils/helper/Helper";
import { Kafka, ConsumerRunConfig, } from "kafkajs";

export default class KafkaServer {

	private kafka: Kafka;

	constructor() {
		this.kafka = new Kafka({ clientId: "send-email", brokers: [Helper.getKafkaPortEnvironmentVariable()] });
	}

	async consumer(topic: string, config: ConsumerRunConfig): Promise<void>{
		const consumer = this.kafka.consumer({ groupId: "send-email-group" });
		await consumer.connect();
		await consumer.subscribe({ topic: topic, fromBeginning: true });
		await consumer.run(config);
	}

	async producer(topic: string, message: string): Promise<void> {
		const producer = this.kafka.producer();
		await producer.connect();
		producer.send({
			topic: topic,
			messages: [
				{ value: message }
			]
		});
	}
}