const express = require('express');
const app = express();

app.use(express.json());
app.get('/', (req,res) => {
  res.send('Hello world!')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})