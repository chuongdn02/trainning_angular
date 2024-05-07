const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use(cors());

app.use(express.json());

// Define routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);
const userRouter = require('./routes/userRouter');
app.use('/users', userRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
