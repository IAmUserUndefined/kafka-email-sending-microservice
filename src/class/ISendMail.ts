interface ISendEmail {
    url: string;
    email: string;
    subject: string; 
    token: string;
    emailBody: string; 
}

export default ISendEmail;