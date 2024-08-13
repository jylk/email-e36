const nodemailer = require("nodemailer");
// Import NodeMailer (after npm install)

async function main() {
// Async function enables allows handling of promises with await

  // First, define send settings by creating a new transporter: 
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
    port: 465, // Port for SMTP (usually 465)
    secure: true, // Usually true if connecting to port 465
    auth: {
      user: "rjayalakshmi901@gmail.com", // Your email address
      pass: "lmrb coes hqcr cpvu", // Password (for gmail, your app password)
      // ⚠️ For better security, use environment variables set on the server for these values when deploying
    },
  });
  
  // Define and send message inside transporter.sendEmail() and await info about send from promise:
  let info = await transporter.sendMail({
    from: 'rjayalakshmi901@gmail.com',
    to: "ashin209@gmail",
    subject: "Assignment Nodejs",
    html: `
    <h1>Hello there</h1>
    <p>This is send through nodemailer by R.Jayalakshmi,rjayalakshmi901@gmail.com</p>
    `,
  });

  console.log(info.messageId); // Random ID generated after successful send (optional)
}

main()
.catch(err => console.log(err));