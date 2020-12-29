const { Router } = require('express');
const router = Router();
const db = require('../database');

router.get('/', (req, res) => {
    res.send('Hello world prdo');
});

router.post('/', (req, res) => {
    console.log('tag', req.body);
    res.send('Eso')
});
module.exports = router;