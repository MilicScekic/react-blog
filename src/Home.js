import { useEffect, useState } from 'react';
import Card from './components/Card';

function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch('https://jsonblob.com/api/jsonBlob/977265362072780800')
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
    <>
      <h1 className=' text-center text-3xl text-gray-700 mb-3 lg:mb-5'>
        Svi postovi
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 text-center'>
        {post.map((p) => {
          return (
            <Card
              key={p.id}
              id={p.id}
              title={p.title}
              image={p.image}
              author={p.author}
              description={p.description}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
