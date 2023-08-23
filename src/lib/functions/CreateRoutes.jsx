import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Portfolio, ErrorPage } from "../../pages";

const CreateRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default CreateRoutes;
