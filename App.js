import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import  Counter  from './Counter';
import Colection  from './Colection';
import ModulWind  from './ModulWind';
import Quiz  from './Quiz';
import Rate  from './Rate';
import Users  from './Users'

function App() {
  
  return (
    <>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/colection">Colection</Link>
        <Link to="/modulewind">ModulWind</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/rate">Rate</Link>
        <Link to="/users">Users</Link>
      </div>
      <Routes>
        <Route path='/counter' element={<Counter/>} />
        <Route path='/colection' element={<Colection/>} />
        <Route path='/modulewind' element={<ModulWind/>} />
        <Route path='/quiz' element={<Quiz/>} />
        <Route path='/rate' element={<Rate/>} />
        <Route path='/users' element={<Users/>} />
      </Routes>
    </>
  );
}

export default App;
