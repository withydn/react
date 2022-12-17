const express = require('express');
const router = express.Router();

const mongoDB = require('../controllers/mongoController');

router.post('/setdata', async (req, res) => {
  const msg = await mongoDB.setData();
  res.send(JSON.stringify(msg));
});

router.get('/count', async (rea, res) => {
  const counts = await mongoDB.getCounts();
  res.send(counts);
});

router.post('/inccount', async (req, res) => {
  const msg = await mongoDB.incCounts();
  res.send(JSON.stringify(msg));
});

router.get('/getdata', async (req, res) => {
  const data = await mongoDB.getData();
  res.send(data);
});

// data = {[]} 가 아니라 data = [0] 이런식으로 접근 해야 한댕
module.exports = router;
