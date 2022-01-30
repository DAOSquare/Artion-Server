require("dotenv").config();
const sgMail = require("@sendgrid/mail");
const SendGridTemplates = require("../constants/mail_template_id");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const foundationEmail = "nft@daosquare.io";

const adminEmails = ["nft@daosquare.io"];

const createDenyMessage = (data) => {
  return {
    to: data.to,
    from: foundationEmail,
    subject: data.subject,
    text: "NFT4ever notification",
    html: `Your collection has been denied to register on NFT4ever. <br/><br/> reason : ${data.reason} </br></br> Thank You.  <br/><br/>`,
  };
};

const createApproveMessage = (data) => {
  return {
    to: data.to,
    from: foundationEmail,
    subject: data.subject,
    text: "NFT4ever notification",
    html: "Dear NFT4ever User, <br/> Your collection has been successfully registered in NFT4ever. ",
  };
};

const sendApplicationDenyEmail = (data) => {
  let message = createDenyMessage(data);
  sgMail.sendMultiple(message).then(
    () => {},
    (error) => {
      if (error.response) {
      }
    }
  );
};

const sendApplicationReviewedEmail = (data) => {
  let message = createApproveMessage(data);
  sgMail.sendMultiple(message).then(
    () => {},
    (error) => {
      if (error.response) {
      }
    }
  );
};

const notifyAdminForNewCollectionApplication = () => {
  let message = {
    to: adminEmails,
    from: foundationEmail,
    subject: "New Application",
    text: "NFT4ever notification",
    html: "New collection has been submitted for your review.",
  };
  sgMail.sendMultiple(message).then(
    () => {},
    (error) => {
      if (error.response) {
      }
    }
  );
};

const notifyInternalCollectionDeployment = (address, email) => {
  let message = {
    to: email,
    from: foundationEmail,
    // subject: "Collection Created",
    // text: "NFT4ever notification",
    // html: `New collection has been deployed with address ${address}`,
    templateId: SendGridTemplates.collection,
    personalizations: [
      {
        to: email,
        dynamic_template_data: {
          title: 'Dear NFT4ever User',
          content: 'New collection has been deployed with address',
          address: address
        },
      },
    ],
  };
  sgMail.send(message).then(
    () => {},
    (error) => {
      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
};

const applicationMailer = {
  sendApplicationDenyEmail,
  sendApplicationReviewedEmail,
  notifyAdminForNewCollectionApplication,
  notifyInternalCollectionDeployment,
};

module.exports = applicationMailer;
