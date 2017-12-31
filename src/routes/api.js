const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({api: 'It works!'}) ;
});

router.get('/account', (req, res) => {
    res.json({api: 'It works!'}) ;
});


module.exports = router;
