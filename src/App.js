import './App.css';
import Chat from './components/Chat';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Prompt from './components/Prompt';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
  
        <Route path="/" element={<Prompt />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
