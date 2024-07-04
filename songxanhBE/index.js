import express from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config();
app.get("/", (req, res) => res.send(
    process.env.DB_CONNECT
));

app.listen(process.env.PORT || 3000, () => {
    console.log(process.env.DB_CONNECT)
});
