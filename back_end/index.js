const express = require('express');
const router = require('./Routes/router');
const app = express();
const cors = require('cors');

PORT = process.env.PORT || 7000

app.use(express.json());
app.use(cors());
app.use('/', router)

app.listen(PORT, ()=>console.log(`listening on port ${PORT}`));