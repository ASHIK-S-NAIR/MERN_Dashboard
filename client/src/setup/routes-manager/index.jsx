import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import DashPanel from "../../pages/DashPanel";

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/dashpanel/dashboard" Component={DashPanel} />
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
