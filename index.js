const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server Food App đang chạy!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server started!'));