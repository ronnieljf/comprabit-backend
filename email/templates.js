const mandrill = require("mandrill-api/mandrill");
const mandrill_client = new mandrill.Mandrill(process.env.MANDRILL_KEY);

const sendRegisterEmail = async (email) => {
  const message = {
    subject: "Test subject",
    text: "Test text",
    from_email: "no-responder@comprabit.cl",
    from_name: "Comprabit",
    to: [
      {
        email: email,
        name: "toName",
        to: "to",
      },
    ],
  };
  await mandrill_client.messages.send({ message });
};

module.exports = {
  sendRegisterEmail,
};
