import { ConsumerRunConfig } from "kafkajs";

interface IKafka {
    consumer(argument: ConsumerRunConfig): Promise<void>;
    producer(topic: string, message: string): Promise<void>;
}

export default IKafka;