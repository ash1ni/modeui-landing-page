import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Desktop = React.lazy(() => import("pages/Desktop"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Desktop />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
