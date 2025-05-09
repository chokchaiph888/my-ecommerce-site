const express = require('express');
const router = express.Router();

const subject =require('../data/contact_subject.json');
router.get('/', (req, res) => {
    //req.end('{"contactSubject": ["General Enquiry","Class","Schedule","instructor","Price","Other","sss"]}');
    res.json(subject);

});

module.exports = router;
