const mongoose = require('mongoose')
const Schema = mongoose.Schema

const emailAlertSchema = new Schema ({
    email: {type: String, required: true}
})

const EmailAlert = mongoose.model("EmailAlert", emailAlertSchema);

module.exports = EmailAlert;