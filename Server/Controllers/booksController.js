import Book from '../models/BookSchema.js';

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching books', error });
  }
};

export const postBooks = async (req, res) => {
  const { title, author, description } = req.body;
  const newbook = new Book({ title, author, description });
  try {
    console.log('Book added:', title);
    await newbook.save();
    res.status(201).json({ message: 'Book added successfully', book: newbook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding book', error });
  }
};

export const deleteBooks = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await Book.findByIdAndDelete(id); 
    if (deletedBook) {
      res.status(200).json({ message: 'Book deleted successfully' });
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting book', error });
  }
};
