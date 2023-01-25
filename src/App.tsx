import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const HomeView = lazy(() => import("./pages/HomeView"));
const ArticlesList = lazy(() => import("components/ArticlesList"));
const ArticleView = lazy(() => import("./pages/ArticleView"));
const NotFound = lazy(() => import("components/NotFound"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />}>
        <Route index element={<ArticlesList />} />
        <Route path="/articles/:articleId" element={<ArticleView />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
