import './App.css';
import { Routes, Route } from "react-router-dom";
import Main from './components/Main';
import Posts from './components/Posts/Posts.lazy';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Posts />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
