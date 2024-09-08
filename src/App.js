import logo from './logo.svg';
import './App.css';
import Student from './Student';
import Faculty from './Faculty';
import College from './College';
import { Link,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div>
      <Link to="/Student">Student</Link><span>        </span>
      <Link to="/Faculty">Faculty</Link><span>        </span>
      <Link to="/College">College</Link><span>        </span>
    </div>
    <div>
      <Routes>
        <Route exact path="/Student" element={<Student></Student>}></Route>
        <Route path="/Faculty" element={<Faculty></Faculty>}></Route>
        <Route  path="/College" element={<College></College>}></Route>
      </Routes>
    </div>
    </div>
  );
}

export default App;
