import express from 'express';
import dotenv from 'dotenv';
import booksRoute from './Routes/booksRoute.js'; 
import cors from 'cors'
import connectDB from './config/connection.js';


dotenv.config();
const app = express();
app.use(
  cors({
    origin: [
      'https://books-store-navy.vercel.app',
      'https://books-store-git-main-saisaurav78s-projects.vercel.app',
      'https://books-store-oenr1q48s-saisaurav78s-projects.vercel.app',
    ],
    methods:['GET','POST','DELETE']
  })
);
app.use(express.json()); 
const PORT = process.env.PORT || 3000;

connectDB()

app.use('/books', booksRoute)
app.get('/', (req, res) => {
  res.status(200).send('hello from backend')
})

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}/`);
});
