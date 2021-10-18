const express = require("express")
const app = express()
require("./db/connection")
const registryRoute = require("./routes/registryRoute")
const garageRoute = require("./routes/garageRoute")
const userRoute = require("./routes/userRoute")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("", garageRoute)
app.use("", userRoute)
app.use("", registryRoute)


app.listen(8081, () => console.log('RUNNING...'))