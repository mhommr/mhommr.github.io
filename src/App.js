import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Screens/Home'; 
import Exercise from './Screens/Exercise/Exercise';

function App() {
  return (
    <div className="route-container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise' element={<Exercise expanded={true}/>} />
      </Routes>
    </div>
  );
}

export default App;
