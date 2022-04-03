const express = require('express');
const { MongoClient } = require("mongodb");
const dotenv = require('dotenv');

dotenv.config()

const router = express.Router()

const uri = process.env.URI

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = await client.db("OCC");
    const supplyCollection = await db.collection("SUPPLY_FORMS")

  router.post('/addSupply', async (req, res) => {
    var data = req.body.data
    await supplyCollection.insertOne(data)
    // console.log(data)
    res.send(data)
  })
  router.get('/getSupply', async (req, res) => {
    const data = await supplyCollection.find({}).toArray();
    res.send(data)
  })
  
  // router.delete('/deleteSupply',async (req,res) => {
  //   const data = await supplyCollection.drop()
  //   res.status(200).json({ msg: `The Collection is deleted ${data}` });
  // })

  // router.put('/updatedata1', async (req, res) => {
  //   var newData = req.body.data
  //   var lab = req.body.Lab
  //   var location = req.body.location
  //   await collection.replaceOne({Lab: lab}, newData)
  //   res.status(200);
  // })
  }catch (err) {
      console.error(err)
  }
}
run()


module.exports = router