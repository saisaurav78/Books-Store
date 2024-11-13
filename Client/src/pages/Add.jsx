import React, { useState } from 'react';
import axios from 'axios';

const Add = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.title || !formData.author || !formData.description) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);

    axios
      .post('https://books-store-rcgp.vercel.app/books', formData)
      .then((response) => {
        setLoading(false);
        setSuccess(response.data.message);
        setFormData({
          title: '',
          author: '',
          description: '',
        });
        alert('Book added successfully!');
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response ? err.response.data.message : 'An error occurred. Please try again.');
      });
  };

  const getInputClass = (field) => {
    return formData[field] === '' ? 'border-red-600' : 'border-gray-300';
  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md mb-36'>
        <h3 className='text-center text-2xl font-semibold mb-3'>Add a New Book</h3>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor='title' className='block mb-2 text-sm font-medium text-gray-700'>
              Title
            </label>
            <input
              type='text'
              id='title'
              name='title'
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${getInputClass(
                'title',
              )}`}
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor='author' className='block mb-2 text-sm font-medium text-gray-700'>
              Author
            </label>
            <input
              type='text'
              id='author'
              name='author'
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${getInputClass(
                'author',
              )}`}
              value={formData.author}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor='description' className='block mb-2 text-sm font-medium text-gray-700'>
              Description
            </label>
            <textarea
              id='description'
              name='description'
              rows='4'
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${getInputClass(
                'description',
              )}`}
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type='submit'
            className='w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50'
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Add Book'}
          </button>

          {error && <div className='mt-4 text-sm text-red-600'>{error}</div>}
          {success && <div className='mt-4 text-sm text-green-600'>{success}</div>}
        </form>
      </div>
    </div>
  );
};

export default Add;
