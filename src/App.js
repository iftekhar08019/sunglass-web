import "./App.css";
import Home from "./Home/Home";
import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About/About";
import Galleries from "./Galleries/Gallery";
import Footer from "./Footer/Footer";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Register from "./Register/Register";
import Services from "./Services/Services";
import NotFound from "./NotFound/NotFound";
import CardDetail from "./CardDetail/CardDetail";
import AddService from "./AddNewSerivces/AddService";
import OrderOptions from "./OrderOptions/OrderOptions";
import Allbookings from "./Allbooking/Allbookings";

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
              <h1>Our Services</h1>
              <hr></hr>
              <Services></Services>
            </Route>
            <PrivateRoute path="/gallery">
              <Galleries></Galleries>
            </PrivateRoute>
            <PrivateRoute path="/orderOption">
              <OrderOptions></OrderOptions>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/details/:serviceId">
              <CardDetail></CardDetail>
            </PrivateRoute>
            <PrivateRoute path="/allbooking">
              <Allbookings></Allbookings>
            </PrivateRoute>
            <Route path="/addService">
              <AddService></AddService></Route>
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
