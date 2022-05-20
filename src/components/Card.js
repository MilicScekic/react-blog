import { Link } from 'react-router-dom';

function Card({ id, title, image, description, author }) {
  return (
    <div>
      <Link
        className='block overflow-hidden border border-gray-100 rounded-lg shadow-sm'
        to={`/${id}`}
      >
        <img className='object-cover w-full h-56' src={image} alt='' />

        <div className='p-6 bg-gray-100'>
          <h5 className='text-xl font-bold'>{title}</h5>
          <h6 className='text-xl font-bold'>{author}</h6>

          <p className='mt-2 text-sm text-gray-500'>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
