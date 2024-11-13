import express from 'express';
import dotenv from 'dotenv';
import booksRoute from './Routes/booksRoute.js'; 
import cors from 'cors'
import connectDB from './config/connection.js';


dotenv.config();
const app = express();
app.use(cors())
app.use(express.json()); 
const PORT = process.env.PORT || 3000;

connectDB()

app.use('/books', booksRoute)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}/`);
});
