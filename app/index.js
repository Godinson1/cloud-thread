import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello from Land of Honey 🚀",
    version: process.env.APP_VERSION || "dev",
  });
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
