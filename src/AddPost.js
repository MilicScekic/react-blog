import { useState } from 'react';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';

function AddPost() {
  const [post, setPost] = useState({
    title: '',
    image: '',
    author: '',
    description: '',
  });
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const alert = useAlert();
  const handleChange = (e) => {
    setPost((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const validation = (e) => {
    e.preventDefault();

    if (post.title === '') {
      alert.show(
        <div className='bg-red-500 text-white p-3 rounded-full'>
          Title can't be empty{' '}
        </div>
      );
    } else if (post.title.length > 20) {
      alert.show(
        <div className='bg-yellow-500 text-white p-3 rounded-full'>
          Title can't be longer than 20 characters
        </div>
      );
    } else if (post.author === '') {
      alert.show(
        <div className='bg-red-500 text-white p-3 rounded-full'>
          Author can't be empty{' '}
        </div>
      );
    } else if (post.author > 20) {
      alert.show(
        <div className='bg-yellow-500 text-white p-3 rounded-full'>
          Author can't be longer than 20 characters
        </div>
      );
    } else if (post.description === '') {
      alert.show(
        <div className='bg-red-500 text-white p-3 rounded-full'>
          Description can't be empty
        </div>
      );
    } else if (post.description > 250) {
      alert.show(
        <div className='bg-yellow-500 text-white p-3 rounded-full'>
          Description can't be longer than 250 characters
        </div>
      );
    } else {
      let { title, image, author, description } = post;
      fetch('https://jsonblob.com/api/jsonBlob/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          redirect: 'follow',
        },
        body: JSON.stringify([
          {
            id: count,
            title,
            image,
            author,
            description,
          },
        ]),
      })
        .then(function (response) {
          let blobUrl = response.headers.get('Location');
          console.log(blobUrl);
          setCount((prevState) => prevState + 1);

          alert.show(
            <div className='bg-green-500 text-white p-3 rounded-full'>
              Post created! title: {title}
            </div>
          );
          navigate('/');
        })
        .catch(function (error) {
          alert.show(
            <div className='bg-red-500 text-white p-3 rounded-full'>
              {error.message}
              burek
            </div>
          );
        });
    }
  };

  return (
    <form
      onSubmit={validation}
      className='p-10 mt-20 mb-0 space-y-4 rounded-lg shadow-2xl lg:w-1/2 mx-auto'
    >
      <div>
        <label htmlFor='title' className='text-sm font-medium'>
          Title
        </label>

        <div className='relative mt-1'>
          <input
            type='text'
            id='title'
            name='title'
            required
            value={post.title}
            className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500'
            placeholder='Enter username'
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor='image' className='text-sm font-medium'>
          Image url
        </label>

        <div className='relative mt-1'>
          <input
            type='text'
            id='image'
            name='image'
            value={post.image}
            required
            className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500'
            placeholder='Enter email'
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor='author' className='text-sm font-medium'>
          Author
        </label>

        <div className='relative mt-1'>
          <input
            type='text'
            id='author'
            name='author'
            required
            value={post.author}
            className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500'
            placeholder='Enter password'
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor='description' className='text-sm font-medium'>
          Description
        </label>

        <div className='relative mt-1'>
          <textarea
            type='text'
            id='description'
            required
            name='description'
            value={post.description}
            className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500'
            placeholder='Enter password'
            onChange={handleChange}
          />
        </div>
      </div>

      <button
        type='submit'
        className='block w-full px-5 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg'
      >
        Add post
      </button>
    </form>
  );
}

export default AddPost;
