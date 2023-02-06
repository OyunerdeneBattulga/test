const express = require('express');
const connect = require("./db")
const cors = require("cors")
const dotenv = require("dotenv")

const {dirname} = require("path")
const {fileURLToPath} = require("url")


console.log("pm2 process")
console.log(errorWillShown)

const _dirname = dirname(fileURLToPath(import.meta.url))

const app = express();

app.get("/" , (req, res) =>{
    res.sendFile(path.join(_dirname, "/index.html"))
})

const port = process.env.PORT || 8000;



connect();
const postsRouter = require("./router")
dotenv.config()
const corsOptions = {
    origin:"http://localhost:3000",
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions))
app.use(express.json());
app.use('/post', postsRouter)   
app.listen(port, () => {console.log(`Server running at http://localhost:${port}/`)});