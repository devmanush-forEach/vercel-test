import express from "express";

const app = express();

app.use(express.json());

app.use("/home", (req, res) => {
  res.send({ message: "working fine home route", success: true });
});

app.use("/", (req, res) => {
  res.send({ message: "working fine", success: true });
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log("server is working fine");
});
