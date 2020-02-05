const router = require('express').Router();
const EmailAlert = require('../models/emailAlert.model')

//get method 
router.get("/", function(req, res) {
    EmailAlert.find()
    .then(emailAlert => res.json(emailAlert))
    .catch(err => res.status(400).json("Error" + err))
})

//post method
router.post("/add", function(req, res) {
    const email = req.body.email;

    const newEmailAlert = new EmailAlert({
        email
    })
    newEmailAlert.save() 
    .then(() => res.json("New request added"))
    .catch(err => res.status(400).json("Error" + err))
})

module.exports = router;