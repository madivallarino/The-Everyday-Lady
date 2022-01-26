import { Route, Switch } from "react-router-dom";
import LandingPage from "./AuthorizedApp/LandingPage";
import Clothing from "./AuthorizedApp/Clothing";
import NavBar from "./AuthorizedApp/NavBar";
const AuthorizedApp = () => {
 
 
 return ( 
<div>
    <NavBar />
    <Switch>
        <Route path="/clothing" component={Clothing}/>
        <Route exact path="/" component={LandingPage}/>

        
    </Switch>
</div>
)};
  

export default AuthorizedApp;