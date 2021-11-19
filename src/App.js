import "./App.css";
import Home from "./Home/Home";
import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Register from "./Register/Register";
import Services from "./Services/Services";
import NotFound from "./NotFound/NotFound";
import CardDetail from "./CardDetail/CardDetail";
import AddService from "./AddNewSerivces/AddService";
import Allbookings from "./Allbooking/Allbookings";
import DashboardUser from "./DashboardUser/DashboardUser";
import AddReview from "./DashboardUser/AddReview/AddReview";
import MakeAdmin from "./DashboardAdmin/MakeAdmin";
import Payment from "./DashboardUser/Payment";
import DashboardAdmin from "./DashboardAdmin/DashboardAdmin";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <h1>Our Eyewears</h1>
              <hr></hr>
              <Services></Services>
            </Route>
            <PrivateRoute path="/dashboardUser">
              <DashboardUser></DashboardUser>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/details/:serviceId">
              <CardDetail></CardDetail>
            </PrivateRoute>
            <PrivateRoute path="/allbooking">
              <Allbookings></Allbookings>
            </PrivateRoute>
            <PrivateRoute path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/newReviews">
              <AddReview></AddReview>
            </PrivateRoute>
            <PrivateRoute path="/addServices">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute path="/dashboardAdmin">
              <DashboardAdmin></DashboardAdmin>
            </PrivateRoute>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
