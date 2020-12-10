const express = require("express");
const router = express.Router();
module.exports = router;

router.get('/test', async (req, res) => {
    res.send('hahaha，我是需要token才能访问的接口，我的名字是：' + req.user.username);
});