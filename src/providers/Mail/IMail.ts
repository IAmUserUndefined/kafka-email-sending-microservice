/* eslint-disable @typescript-eslint/no-explicit-any */

interface IMail {
    sendMail(to: string, subject: string, template: string, context: any): Promise<string>
}

export default IMail;