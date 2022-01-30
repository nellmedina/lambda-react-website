import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Messages from './component/Messages';

function App() {
  return (
    <div className='wrapper'>
      <h1>Testing Routers</h1>

      <p>
        Go to <Link to='/messages'>Messages</Link>.
      </p>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/messages' element={<Messages />} />
      </Routes>
    </div>
  );
}

export default App;
