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

  router.put('/updateSupply', async (req, res) => {
    const dataId = req.body.data._id
    const newData = req.body.data
    await collection.replaceOne({_id: dataId}, newData)
    res.status(200).send(await collection.findOne({_id: dataId}));;
  })

  }catch (err) {
    console.error(err)
  }
}
run()


module.exports = router