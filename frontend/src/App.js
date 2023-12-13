import './App.css';
import { Routes, Route } from "react-router-dom";
import Main from './components/Main';
import Posts from './components/Posts/Posts.lazy';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Posts />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/todos" element={<Todos />}></Route>
      </Routes>
    </div>
  );
}

export default App;
