import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes> */}
        <Login />
      </Router>
    </div>
  );
}

export default App;
