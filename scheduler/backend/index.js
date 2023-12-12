import express from "express"
import authRoutes from "./routes/auth.js"
import editRoutes from "./routes/edit.js"
import addRoutes from "./routes/add.js"
import grabRoutes from "./routes/grab.js"
import removeRoute from "./routes/remove.js"
import cors from 'cors'

const app = express();


app.use(express.json())
app.use(cors()) //important: api doesn't work without it

//routes
app.use("/auth", authRoutes)
app.use("/edit", editRoutes)
app.use("/add", addRoutes)
app.use("/grab", grabRoutes)
app.use("/remove", removeRoute)



app.listen(8800, () =>{
    console.log("Connected to backend!")
})