import { useEffect, useState } from 'react';

function Post() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`https://jsonblob.com/api/jsonBlob/977265362072780800/`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setPost(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {post.map((p) => {
        return (
          <div key={p.id}>
            <img className='w-full h-[600px] mb-5' src={p.image} alt='' />
            <h1 className=' text-4xl'> {p.title}</h1>
            <p className=' text-gray-700 text-lg mb-5'>{p.author}</p>
            <p>{p.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Post;
