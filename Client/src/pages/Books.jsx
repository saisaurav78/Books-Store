import axios from 'axios';
import { useEffect, useState } from 'react';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');

  const loadBooks = async () => {
    try {
      const response = await axios.get('https://books-store-rcgp.vercel.app//books');
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const deleteBook = async (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await axios.delete(`https://books-store-rcgp.vercel.app/books/${id}`);
        setBooks(books.filter((book) => book._id !== id));
        alert('Deleted successfully')
      }
      catch (error) {
        console.error('Error deleting book:', error);
      }
    }
  };

  return (
    <>
      <h3 className='text-center text-2xl font-semibold mb-5 mt-5'>Books List</h3>
      <div className='flex justify-center mb-4'>
        <div className='flex items-center space-x-2'>
          <h5>Total Count: {books.length}</h5>
          <input
            className='w-48 p-2 border border-gray-300 rounded-md'
            type='text'
            placeholder='Search title'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className='container mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {books.length > 0 ? (
          books
            .filter((book) => book.title.toLowerCase().includes(query.toLowerCase()))
            .map((book) => (
              <div
                key={book._id}
                className='shadow-md p-6 bg-white flex flex-col justify-between items-start rounded-lg hover:shadow-lg transition-shadow duration-300'
              >
                <h4 className='text-xl font-semibold mb-2'>{book.title}</h4>
                <p className='text-neutral-950 mb-2'>Author: {book.author}</p>
                <p className='text-gray-500 mb-4'>{book.description}</p>
                <button
                  className='bg-red-500 rounded-md p-1 text-white hover:bg-red-700 transition-all ease-linear'
                  onClick={() => deleteBook(book._id)}
                >
                  Delete
                </button>
              </div>
            ))
        ) : (
          <div className='text-center col-span-full'>No books found</div>
        )}
      </div>
    </>
  );
};

export default Books;
