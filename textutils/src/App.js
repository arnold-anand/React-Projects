import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
function App() {

  return (
    <>
    <Navbar title="TextUtils"></Navbar>
    <Router>
    <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<TextArea heading="Enter your text here"></TextArea>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
