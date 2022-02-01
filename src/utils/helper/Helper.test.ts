import Helper from "./Helper";

describe("Test of environment variable get", () => {

	test("Should return environment variable ", () => {
          
		const email = Helper.getEmailEnvironmentVariable();
		const password = Helper.getEmailPasswordEnvironmentVariable();
        
		expect(email).not.toBeUndefined();
		expect(password).not.toBeUndefined();
	});
});