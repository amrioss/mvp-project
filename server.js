import dotenv from "dotenv";
import postgres from "postgres";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();
let db_url = process.env.DATABASE_URL;
const sql = postgres(db_url);
app.use(express.static('public'))

app.get("/api/marvel", (req, res) => {
  sql`SELECT * FROM marvelmovies`.then((result) => {
    res.json(result);
  });
});

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`listening on port ${port}`);
  }
});
