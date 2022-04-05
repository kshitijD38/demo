import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import CallInfo from "./components/CallInfo";
import ListCallInfo from "./components/ListCallInfo";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Home></Home> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/schedule/a/call" element={<CallInfo />} />
          <Route path="/list/call/info" element={<ListCallInfo />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
