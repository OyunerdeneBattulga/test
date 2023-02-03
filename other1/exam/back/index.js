const express = require('express');
const connect = require("./db")
const cors = require("cors")
const dotenv = require("dotenv")
connect();

const postsRouter = require("./router")

dotenv.config()

const port = process.env.PORT || 8000;
const app = express();

const corsOptions = {
    origin:"http://localhost:3000",
    credentials:true,
    optionSuccessStatus:200
}

app.use(cors(corsOptions))
app.use(express.json());
app.use('/post', postsRouter)   

app.listen(port, () => {console.log(`Server running at http://localhost:${port}/`)});