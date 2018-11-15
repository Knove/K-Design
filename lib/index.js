var Button = require("./button");
var Card = require("./card")

try {
  Button = require("k-button");
} catch (err) {
  console.warn("K-Design: Detected not installed k-button, please bind 'npm install k-button --save' to used.");
}
try {
  Button = require("k-card");
} catch (err) {
  console.warn("K-Design: Detected not installed k-card, please bind 'npm install k-card --save' to used.");
}

module.exports = {
  Button,
  Card
};
