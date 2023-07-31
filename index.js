import express  from "express";
import cors from "cors"

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors());

app.get("/", (req, res) => {
  res.send("our api is working")
})

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}...`)
})