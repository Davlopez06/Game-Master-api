import mongoose from "mongoose";
import server from './src/app'
require('dotenv').config()

mongoose   
.connect(process.env.MONGODB_URI || "")
.then(() => console.log("Connected to Database UltraGames"))
.catch((error) => console.log(error))

server.listen(process.env.PORT, () => {
    console.log("Server listening in port", process.env.PORT)
})