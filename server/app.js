import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const jsonParser = bodyParser.json();
// import homeRouter from "./routes/home.js";
import userRouter from "./routes/users.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*app.use("/", homeRouter);*/

app.use("/users", userRouter);

app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "Test route is up and running!",
  });
});

app.use(function (req, res, next) {
  res
    .status(404)
    .json({ message: "We couldn't find what you were looking for 😞" });
});

app.listen(port, () => {
  console.log(`RUNNING ON PORT ${port}`);
});
