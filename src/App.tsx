// import logo from "./logo.svg";
// import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const HomeView = lazy(() => import("./pages/HomeView"));
const ArticleView = lazy(() => import("./pages/ArticleView"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />}></Route>
      <Route path="/article/:articleId" element={<ArticleView />} />
    </Routes>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
