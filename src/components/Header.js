import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='flex justify-between mt-5 mb-16'>
      <Link to='/'>
        <h3 className='text-3xl text-gray-700'>Blog</h3>
      </Link>
      <Link to='/add-post'>
        <button className=' bg-blue-500 px-4 py-3 text-white rounded-lg'>
          Dodaj post
        </button>
      </Link>
    </div>
  );
}

export default Header;
