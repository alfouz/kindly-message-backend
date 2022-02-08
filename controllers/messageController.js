const { getMessage } = require("../services/messageServices");

module.exports = {
  getMessage: function (req, res, next) {
    const body = req.body;
    const message = getMessage();
    return res.status(200).send({ status: 200, data: { message: message } });
  },
};
