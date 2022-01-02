const sgMail = require("@sendgrid/mail");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { SENDGRID_API_KEY, SENDGRID_TO_EMAIL, SENDGRID_FROM_EMAIL } =
  process.env;

exports.handler = async (event) => {
  try {
    const payload = JSON.parse(event.body);

    sgMail.setApiKey(SENDGRID_API_KEY);

    const body = Object.keys(payload)
      .map((k) => {
        return `${k}: ${payload[k]}`;
      })
      .join("<br><br>");

    const msg = {
      to: SENDGRID_TO_EMAIL,
      from: SENDGRID_FROM_EMAIL,
      subject: "Contact from appsr website",
      html: body,
    };
    return sgMail.send(msg).then(() => {
      return {
        statusCode: 200,
        body: "Message sent",
      };
    });
  } catch (error) {
    return {
      statusCode: error.code,
      body: error.message,
    };
  }
};
