import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Createpost from "../components/Createpost";
import Postlist from "../components/Postlist";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Sidebar
            selectedTab={selectedTab}
            toggleSidebar={toggleSidebar}
            setSelectedTab={setSelectedTab}
          />
          <div className="content">
            <Header toggleSidebar={toggleSidebar} />

            <Outlet/>
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
