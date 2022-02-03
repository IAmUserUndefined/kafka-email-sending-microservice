import Mail from "../../providers/Mail/Mail";
import ISendEmail from "./ISendMail";

export default class SendEmail {

	private mail: Mail;

	constructor(){
		this.mail = new Mail();
	}

	async execute( { subject, emailBody, email, token, url }: ISendEmail ): Promise<string> {

		try {
			await this.mail.sendMail(email, subject, emailBody, {
				appUrl: url,
				email: email,
				token: token
			});

			return "Email enviado com sucesso";
		}

		catch(e) {
			console.log(e);
			return "Houve um problema no envio de email";
		}
	}
}