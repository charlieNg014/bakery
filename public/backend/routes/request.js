const router = require('express').Router();
const RequestDetails = require('../models/request.model')

//get method 
router.get("/", function(req, res) {
    RequestDetails.find()
    .then(requestDetails => res.json(requestDetails))
    .catch(err => res.status(400).json("Error" + err))
})

//post method
router.post("/add", function(req, res) {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phone = Number(req.body.phone);
    const note = req.body.note;

    const newRequest = new RequestDetails({
        firstname, lastname, email, phone, note
    })

    newRequest.save() 
    .then(() => res.json("New request added"))
    .catch(err => res.status(400).json("Error" + err))
})

module.exports = router;