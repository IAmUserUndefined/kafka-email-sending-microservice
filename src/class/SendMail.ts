import Mail from "../provider/Mail/Mail";
import ISendEmail from "./ISendMail";

export default class SendEmailRules {

	private mail: Mail;

	constructor(){
		this.mail = new Mail();
	}

	async execute( { subject, emailBody, email, token, url }: ISendEmail ): Promise<string | void> {

		try {
			await this.mail.sendMail(email, subject, emailBody, {
				appUrl: url,
				email: email,
				token: token
			});
		}

		catch(e) {
			console.log(e);
			return "Houve um problema no envio de email";
		}
	}
}