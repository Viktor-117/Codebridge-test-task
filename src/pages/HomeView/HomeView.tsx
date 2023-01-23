import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const HomeView: React.FC = () => {
  return (
    <Suspense>
      <Outlet />
    </Suspense>
  );
};

export default HomeView;
