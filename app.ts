const express = require('express');
const userRoutes = require('./route/userRoute');
const app = express();
app.use(express.json());

app.use(userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});
