const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.API_SENDGRID,
    },
  })
);

const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // validate krna hai like some data miss
    if (!name || !email || !msg) {
      return res.status(500).send({
        success: false,
        message: "please provide all fields",
      });
    }
    transporter.sendMail({
      to: "divyanshu.gupta_cs21@gla.ac.in",
      from: "divyanshu.gupta_cs21@gla.ac.in",
      subject: "Regarding portfolio",
      html: `
            <h5>Detail information</h5>
            <ul>
                <li><p>Name:${name}</p></li>
                <li><p>Email:${email}</p></li>
                <li><p>Message:${msg}</p></li>
            </ul>
            `,
    });
    return res.status(200).send({
      success: true,
      message: "Your Message send Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };
