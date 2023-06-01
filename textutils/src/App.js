import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

// import {
//   BrowserRouter as Router, Routes, Route
// } from "react-router-dom";
function App() {

  return (
    <>
    <Navbar title="TextUtils"></Navbar>
    {/* <Router>
    <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={}/>
    </Routes>
    </Router> */}
    <TextArea heading="Enter your text here"></TextArea>
    </>
  );
}

export default App;
