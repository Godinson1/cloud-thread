import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hey there! This is Godinson for Cloud Threadf. Way to go! 🚀",
    version: process.env.APP_VERSION || "dev",
  });
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
