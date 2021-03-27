const sgMail = require('@sendgrid/mail')
const Mailgen = require('mailgen')
const config = require('../config/email.json')
require('dotenv').config()
class EmailService {
    #sender = sgMail
    #GenerateTemplate = Mailgen
    constructor(env) {
        switch (env) {
            case 'development':
                this.link = config.dev
                break
            case 'stage':
                this.link = config.stage
                break
            case 'production':
                this.link = config.prod
                break
            default:
                this.link = config.dev
                break
        }
    }
    #createTemplate(verifyToken, name = 'My Friend') {
        const mailGenerator = new this.#GenerateTemplate({
            theme: 'neopolitan',
            product: {
                name: 'System contacts',
                link: this.link,
            },
        })
        const template = {
            body: {
                name,
                intro: 'Welcome to the contacts app',
                action: {
                    instructions: 'Please click here to verify your email',
                    button: {
                        color: '#22BC66', // Optional action button color
                        text: 'Verify',
                        link: `${this.link}/users/verify/${verifyToken}`,
                    },
                },
                outro:
                    "Need help, or have questions? Just reply to this email, we'd love to help.",
            },
        }
        return mailGenerator.generate(template)
    }
    async sendEmail(verifyToken, email, name) {
        const emailBody = this.#createTemplate(verifyToken, name)
        this.#sender.setApiKey(process.env.SENDGRID_API_KEY)
        const msg = {
            to: email,
            from: 'artwayprojects@gmail.com', // Use the email address or domain you verified above
            subject: 'Registration confirmation',
            html: emailBody,
        }
        await this.#sender.send(msg)
    }
}

module.exports = EmailService
