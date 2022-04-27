const express = require('express');
const { MongoClient } = require("mongodb");
const ObjectId = require('mongodb').ObjectID;
// const apicache = require('apicache');
// const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');

dotenv.config()

const router = express.Router()

// const limiter = rateLimit({
//   windowMs: 10 * 60 * 1000, // 10 mins
//   max: 100
// })

const uri = process.env.URI

const client = new MongoClient(uri);

// let cache = apicache.middleware

async function run() {
  try {
    await client.connect();
    const db = await client.db("OCC");
    const supplyCollection = await db.collection("SUPPLY_FORMS")

  router.get('/getSupply', async (req, res) => {
    const data = await supplyCollection.find({}).toArray();
    res.send(data)
  })

  router.post('/addSupply', async (req, res) => {
    var data = req.body.data
    await supplyCollection.insertOne(data)
    // console.log(data)
    res.send(data)
  })
  
  router.delete('/deleteSupply',async (req,res) => {
    const dataId = req.body.id
    const data = await supplyCollection.deleteOne({ _id:new ObjectId(dataId)})
    res.status(200).json({ msg: `The ${data} is deleted` });
  })

  router.put('/updateSupply', async (req, res,) => {
    const dataId = ObjectId(req.body.data.id)
    // console.log(typeof dataId)
    const newData = req.body.data
    await supplyCollection.updateOne({ _id:new ObjectId(dataId)},{ $set: newData });
    res.status(200);
  })

  }catch (err) {
    console.error(err)
  }
}
run()


module.exports = router