import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sample from './Sample.jsx';
import Project from './Project.jsx'
import Showsteps from './Showsteps.jsx';

function App() {

  return(
  <Router>
      <Routes>
        <Route path="/" element={<Project />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/steps" element={<Showsteps/>}/>
      </Routes>
    </Router>
  );

}

export default App
