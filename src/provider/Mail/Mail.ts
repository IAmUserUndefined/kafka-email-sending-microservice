/* eslint-disable @typescript-eslint/no-explicit-any */

import path from "path";
import Helper from "../../utils/helper/Helper";

import hbs from "nodemailer-express-handlebars";
import nodemailer, { SentMessageInfo, Transporter } from "nodemailer";
import IMail from "./IMail";

class Mail implements IMail {

	private mail: Transporter<SentMessageInfo>;

	constructor() {
        
		this.mail = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: { user: Helper.getEmailEnvironmentVariable(), pass: Helper.getEmailPasswordEnvironmentVariable() }
		});

		this.mail.use("compile", hbs({
			viewEngine: {
				defaultLayout: null,
				partialsDir: path.resolve("./src/resources/emailBody/")
			},
			viewPath: path.resolve("./src/utils/emailBody/"),
			extName: ".html"
		}));
	}

	async sendMail(to: string, subject: string, template: string, context: any): Promise<void> {
		const email = {
			from: "Minhas Despesas",
			to: to,
			subject: subject,
			template: template,
			context: context
		};
		await this.mail.sendMail(email);
	}
}

export default Mail;