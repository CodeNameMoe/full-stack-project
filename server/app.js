
import express from "express";
let app = express();
const port = 3000
import homeRouter from "./routes/home.js";
import userRouter from "./routes/users.js"


app.use("/", homeRouter);
app.use("/users", userRouter);






app.listen(port, () => {
    console.log(`RUNNING ON PORT ${port}`)
  })
