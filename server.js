const express = require('express');
const app = express();

//to read incoming JSON requests.
app.use(express.json());

//test server
app.get('/', (req, res) => {
    res.send('Task Manager API is running!');
  });

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  