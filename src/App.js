import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Home from './component/Home/Home';
import Login from './component/Login/Login';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
       </Routes>
      </header>
    </div>
  );
}

export default App;
