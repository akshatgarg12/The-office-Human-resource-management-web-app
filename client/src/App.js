import { Switch, Route } from "react-router-dom";
import LoginPage from "./components/pages/loginPage";
import ProtectedRoute from "./components/atoms/ProtectedRoute";
import AdminRoute from "./components/atoms/adminRoute";
import DashboardPage from "./components/pages/dashboard";
import AdminPage from "./components/pages/adminPage";
import DiscussionPage from "./components/pages/discussion";
import SearchPage from "./components/pages/searchPage";
import HomePage from "./components/pages/homePage";
import "react-calendar/dist/Calendar.css";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact children={HomePage} />
      <Route path="/login" children={<LoginPage />} />
      <ProtectedRoute path="/dashboard" component={DashboardPage} />
      <ProtectedRoute path="/discussion" component={DiscussionPage} />
      <ProtectedRoute path="/search" component={SearchPage} />
      <AdminRoute path="/admin" component={AdminPage} />
      <Route component={() => <h1>404 Page not found</h1>} />
    </Switch>
  );
};

export default App;
