import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import DashPanel from "../../pages/DashPanel";

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" Component={DashPanel} />
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
