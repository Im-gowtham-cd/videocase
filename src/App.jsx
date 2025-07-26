import Home from './files/Home';
import Connect from './files/Connect';
import Nav from './files/Nav';
import { Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </>
  );
}
