import React from "react"; // Add this line
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./routes/App.jsx";
import Createpost from "./components/Createpost.jsx";
import Postlist from "./components/Postlist.jsx";
import ReactDOM from "react-dom";


const router = (
  <Router basename="/React-Social-Web-UI">
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Postlist />} />
        <Route path="/create-post" element={<Createpost />} />
      </Route>
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>{router}</React.StrictMode>
);
