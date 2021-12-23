require("dotenv").config();
const requestIP = require("request-ip");

const tracker_ip1 = process.env.TRACKER_IP1;
const tracker_ip2 = process.env.TRACKER_IP2;
const tracker_ip3 = process.env.TRACKER_IP3;
const tracker_ip4 = process.env.TRACKER_IP4;
const tracker_ip5 = process.env.TRACKER_IP5;

const service_auth = (req, res, next) => {
    next();
};

module.exports = service_auth;
