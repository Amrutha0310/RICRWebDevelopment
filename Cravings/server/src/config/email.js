import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// dotenv.config();    //part chla rhe the

const sendEmail = async (to, subject, message) => {
  try {
    console.log("Started sending Email");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSCODE,
      },
    });

    const mailOption = {
      from: process.env.GMAIL_USER,
      to,
      subject,
      html: message, //JSON format
    };
    console.log("Processing..");

    const res = await transporter.sendMail(mailOption);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

// sendEmail(
//   "amrutha@gmail.com",    //which email me send krna he msg  //to
//   "test Email",                 //subject
//   "<p style = 'color:red>Test Message</p>",   //message   //always in html
// );
  export default sendEmail;