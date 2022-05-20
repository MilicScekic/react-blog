import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPost from './AddPost';
import Post from './Post';
import Home from './Home';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';

const AlertTemplate = ({ style, message, close }) => (
  <div onClick={close} style={style}>
    {message}
  </div>
);
const options = {
  position: positions.TOP_CENTER,
  timeout: 3000,
  offset: '10px',
  transition: transitions.SCALE,
};

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <div className='container mx-auto px-5 lg:px-[200px]'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add-post' element={<AddPost />} />
            <Route path='/:id' element={<Post />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AlertProvider>
  );
}

export default App;
