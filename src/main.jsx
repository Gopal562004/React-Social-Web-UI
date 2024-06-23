import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Createpost from "./components/Createpost.jsx";
import Postlist from "./components/Postlist.jsx";

// const router = (
//   <Router>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/create-post" element={<Createpost />} />
//     </Routes>
//   </Router>
// );
const router = (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Postlist />} />
        <Route path="/create-post" element={<Createpost />} />
      </Route>
    </Routes>
  </Router>
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>{router}</React.StrictMode>
);
