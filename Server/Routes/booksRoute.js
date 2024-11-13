import express from 'express';
import { getBooks, postBooks, deleteBooks } from '../Controllers/booksController.js';

const router = express.Router(); 


router.get('/', getBooks);
router.post('/', postBooks);
router.delete('/:id', deleteBooks)

export default router;
