// import SMTPTransport from "nodemailer/lib/smtp-transport";
// import nodemailer from "nodemailer";
// import Mail from "nodemailer/lib/mailer";

// const Transport = nodemailer.createTransport({
//   host: process.env.MAIL_HOST,
//   port: process.env.MAIL_PORT,
//   secure: process.env.NODE_ENV !== "development",
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASS,
//   },
// } as SMTPTransport.Options);

// type sendEmailtt = {
//   sender: Mail.Address;
//   receipients: Mail.Address[];
//   subject: string;
//   massage: string;
// };

// export const sendEmail = async (tt: sendEmailtt) => {
//   const { sender, receipients, subject, massage } = tt;
//   return Transport.sendMail({
//     from: sender,
//     to: receipients,
//     subject,
//     html: massage,
//     text: massage,
//   });
// };
import SMTPTransport from "nodemailer/lib/smtp-transport";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const Transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT), // Convert port to a number
  secure: process.env.NODE_ENV !== "development", // Use SSL if not in development
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
} as SMTPTransport.Options);

type sendEmailtt = {
  sender: Mail.Address;
  recipients: string[]; // Updated to string[] for simplicity
  subject: string;
  message: string; // Corrected from 'massage' to 'message'
};

export const sendEmail = async (tt: sendEmailtt) => {
  const { sender, recipients, subject, message } = tt;

  return Transport.sendMail({
    from: sender,
    to: recipients, // Send email to multiple recipients
    subject,
    html: message, // HTML version of the message
    text: message, // Plain text version of the message
  });
};
