import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Header from './component/Header/Header';
import { Container } from 'react-bootstrap';
import './App.css'
import Register from './component/Register/Register';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Header></Header>
        </Container>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='*' element={<Home></Home>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
