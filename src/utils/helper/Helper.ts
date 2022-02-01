import "dotenv/config";

class Helper {

	static getEmailEnvironmentVariable(){
		return process.env.EMAIL;
	}

	static getEmailPasswordEnvironmentVariable(){
		return process.env.EMAIL_PASSWORD;
	}

}

export default Helper;