import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { Email_SERVICE } from '../constants';
import { TemplateErorr, TemplateSendEmail } from './template';

// function by email . com 
@Injectable()
export class SendEmailService {

 private transporter: nodemailer.Transporter;

 constructor() {
  if (!Email_SERVICE.EMAIL_ACCOUNT|| !Email_SERVICE.PASSWORD_EMAIL) {
    throw new Error('EMAIL_ACCOUNT and PASSWORD_EMAIL must be defined');
  }
  this.transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: Email_SERVICE.EMAIL_ACCOUNT,
      pass: Email_SERVICE.PASSWORD_EMAIL,
    },
  });
 }
 
    async  main(Token : string ,name : string) {
 Server: "email"
 const info = await this.transporter.sendMail({
  from: process.env.EMAIL_ACCOUNT, // sender address
  to: "osamaproud01@gmail.com", // list of receivers
  subject: "Hello ✔", // Subject line
  text: "Hello world?", // plain text body
  
  html:TemplateSendEmail(Token  , name),  // html body
 });

 console.log("Message sent: SUCCESSFULLY ");
}

}

