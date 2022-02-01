jest.setTimeout(20000);

import Mail from "./Mail";
const mail = new Mail();

describe("Email Send", () => {

	test("Should send the email", async () => {
		await mail.sendMail("joao@teste.com", "Test", "createUserEmailBody", {
			message: "test",
		});
	});
});